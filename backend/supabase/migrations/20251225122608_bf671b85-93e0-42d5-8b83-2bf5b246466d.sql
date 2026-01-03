
-- Drop and recreate the get_leaderboard function with time filtering support
DROP FUNCTION IF EXISTS public.get_leaderboard(integer);

CREATE OR REPLACE FUNCTION public.get_leaderboard(
  limit_count integer DEFAULT 50,
  time_filter text DEFAULT 'all'
)
RETURNS TABLE(user_id uuid, display_name text, avatar_url text, total_xp bigint, rank bigint)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT 
    p.user_id,
    COALESCE(p.display_name, 'Anonymous') as display_name,
    p.avatar_url,
    COALESCE(SUM(
      CASE 
        WHEN time_filter = 'today' AND up.last_activity_date = CURRENT_DATE THEN up.xp
        WHEN time_filter = 'week' AND up.last_activity_date >= CURRENT_DATE - INTERVAL '7 days' THEN up.xp
        WHEN time_filter = 'month' AND up.last_activity_date >= CURRENT_DATE - INTERVAL '30 days' THEN up.xp
        WHEN time_filter = 'all' THEN up.xp
        ELSE 0
      END
    ), 0) as total_xp,
    ROW_NUMBER() OVER (ORDER BY COALESCE(SUM(
      CASE 
        WHEN time_filter = 'today' AND up.last_activity_date = CURRENT_DATE THEN up.xp
        WHEN time_filter = 'week' AND up.last_activity_date >= CURRENT_DATE - INTERVAL '7 days' THEN up.xp
        WHEN time_filter = 'month' AND up.last_activity_date >= CURRENT_DATE - INTERVAL '30 days' THEN up.xp
        WHEN time_filter = 'all' THEN up.xp
        ELSE 0
      END
    ), 0) DESC) as rank
  FROM public.profiles p
  LEFT JOIN public.user_progress up ON p.user_id = up.user_id
  GROUP BY p.user_id, p.display_name, p.avatar_url
  HAVING COALESCE(SUM(
    CASE 
      WHEN time_filter = 'today' AND up.last_activity_date = CURRENT_DATE THEN up.xp
      WHEN time_filter = 'week' AND up.last_activity_date >= CURRENT_DATE - INTERVAL '7 days' THEN up.xp
      WHEN time_filter = 'month' AND up.last_activity_date >= CURRENT_DATE - INTERVAL '30 days' THEN up.xp
      WHEN time_filter = 'all' THEN up.xp
      ELSE 0
    END
  ), 0) > 0 OR time_filter = 'all'
  ORDER BY total_xp DESC
  LIMIT limit_count;
$$;
