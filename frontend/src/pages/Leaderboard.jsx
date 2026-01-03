import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Trophy, Medal, Award, Flame } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import api from '@/api/client';

const TIME_FILTERS = [
  { value: 'today', label: 'Today' },
  { value: 'week', label: 'This Week' },
  { value: 'month', label: 'This Month' },
  { value: 'all', label: 'All Time' },
];

export default function Leaderboard() {
  const { user } = useAuth();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRank, setUserRank] = useState(null);
  const [timeFilter, setTimeFilter] = useState('all');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        // Build query string based on filter if backend supports it (currently backend just does simple sort)
        const { data } = await api.get('/progress/leaderboard');

        // Map backend response { id, username, avatar, points } to frontend expectation
        const formattedData = data.map((entry, index) => ({
          user_id: entry.id,
          display_name: entry.username,
          avatar_url: entry.avatar ? `http://localhost:5000/${entry.avatar}` : null,
          total_xp: entry.points,
          rank: index + 1
        }));

        setLeaderboard(formattedData);

        // Find current user's rank
        if (user) {
          const userEntry = formattedData.find(entry => entry.user_id === user.id || entry.user_id === user._id);
          setUserRank(userEntry || null);
        } else {
          setUserRank(null);
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [user, timeFilter]);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground w-6 text-center">{rank}</span>;
    }
  };

  const getRankBg = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border-yellow-500/30';
      case 2:
        return 'bg-gradient-to-r from-gray-400/20 to-gray-500/10 border-gray-400/30';
      case 3:
        return 'bg-gradient-to-r from-amber-600/20 to-amber-700/10 border-amber-600/30';
      default:
        return 'bg-card hover:bg-muted/50';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
            <Trophy className="h-8 w-8 text-yellow-500" />
            Leaderboard
          </h1>
          <p className="text-muted-foreground mt-2">Top learners by total XP</p>
        </div>

        {/* Time filter tabs - Visual only for now as backend needs update for time filtering */}
        <Tabs value={timeFilter} onValueChange={setTimeFilter} className="mb-6">
          <TabsList className="grid w-full grid-cols-4">
            {TIME_FILTERS.map((filter) => (
              <TabsTrigger key={filter.value} value={filter.value}>
                {filter.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Current user's rank card */}
        {user && userRank && (
          <Card className="mb-6 border-primary/50 bg-primary/5">
            <CardContent className="py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10">
                  {getRankIcon(Number(userRank.rank))}
                </div>
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src={userRank.avatar_url} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {userRank.display_name?.charAt(0)?.toUpperCase() || '?'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">You</p>
                  <p className="text-sm text-muted-foreground">Rank #{userRank.rank}</p>
                </div>
                <div className="flex items-center gap-1 text-primary font-bold">
                  <Flame className="h-5 w-5" />
                  {userRank.total_xp} XP
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Top 50 Learners {timeFilter !== 'all' && `(${TIME_FILTERS.find(f => f.value === timeFilter)?.label})`}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {loading ? (
              Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-3">
                  <Skeleton className="h-6 w-6 rounded" />
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-32 mb-1" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                  <Skeleton className="h-5 w-16" />
                </div>
              ))
            ) : leaderboard.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No learners yet. Start learning to be the first!
              </p>
            ) : (
              leaderboard.map((entry) => (
                <div
                  key={entry.user_id}
                  className={`flex items-center gap-4 p-3 rounded-lg border transition-colors ${getRankBg(Number(entry.rank))} ${user?.id === entry.user_id || user?._id === entry.user_id ? 'ring-2 ring-primary' : ''
                    }`}
                >
                  <div className="flex items-center justify-center w-10">
                    {getRankIcon(Number(entry.rank))}
                  </div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={entry.avatar_url} />
                    <AvatarFallback className="bg-muted">
                      {entry.display_name?.charAt(0)?.toUpperCase() || '?'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">
                      {entry.display_name}
                      {user?.id === entry.user_id && (
                        <span className="ml-2 text-xs text-primary">(You)</span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold">
                    <Flame className="h-4 w-4 text-orange-500" />
                    {entry.total_xp} XP
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
