-- Create a security definer function to get leaderboard data
-- This allows fetching aggregated XP data without exposing all user progress details
CREATE OR REPLACE FUNCTION public.get_leaderboard(limit_count integer DEFAULT 50)
RETURNS TABLE (
  user_id uuid,
  display_name text,
  avatar_url text,
  total_xp bigint,
  rank bigint
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    p.user_id,
    COALESCE(p.display_name, 'Anonymous') as display_name,
    p.avatar_url,
    COALESCE(SUM(up.xp), 0) as total_xp,
    ROW_NUMBER() OVER (ORDER BY COALESCE(SUM(up.xp), 0) DESC) as rank
  FROM public.profiles p
  LEFT JOIN public.user_progress up ON p.user_id = up.user_id
  GROUP BY p.user_id, p.display_name, p.avatar_url
  ORDER BY total_xp DESC
  LIMIT limit_count;
$$;