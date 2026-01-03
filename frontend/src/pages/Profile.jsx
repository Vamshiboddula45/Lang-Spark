import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProgress } from '@/hooks/useUserProgress';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { languages } from '@/data/languages';
import { ArrowLeft, Flame, Zap, BookOpen, Trophy } from 'lucide-react';
import { useEffect } from 'react';

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { getLanguagesWithProgress, getProgress, loading: progressLoading } = useUserProgress();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  if (authLoading || progressLoading || !user) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  const languagesWithProgress = getLanguagesWithProgress();

  // Calculate total stats
  let totalXp = 0;
  let totalLessons = 0;
  let maxStreak = 0;

  languagesWithProgress.forEach(code => {
    const progress = getProgress(code);
    totalXp += progress.xp;
    totalLessons += progress.lessonsCompleted;
    maxStreak = Math.max(maxStreak, progress.streak);
  });

  const getInitials = (name) => {
    if (!name) return user.email?.charAt(0).toUpperCase() || 'U';
    return name.split(' ').map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Learning
        </Button>

        {/* User Profile Header */}
        <div className="flex items-center gap-6 mb-10 bg-card p-8 rounded-2xl border border-border shadow-sm">
          <div className="relative">
            <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-background shadow-md">
              {/* Force image reload with timestamp if needed, but usually src update is enough */}
              <img
                src={user.avatar_url || ''}
                alt={user.username}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/20 text-primary text-2xl font-bold" style={{ display: user.avatar_url ? 'none' : 'flex' }}>
                {getInitials(user.username)}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full border-4 border-background" onClick={() => navigate('/settings')}>
              <Zap className="w-4 h-4" />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-foreground mb-1">{user.username}</h1>
            <p className="text-muted-foreground flex items-center gap-2 mb-4">
              {user.email}
              {user.phone && <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>}
              {user.phone}
            </p>
            <div className="flex gap-3">
              <Button onClick={() => navigate('/settings')} variant="outline" size="sm">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{totalXp}</p>
              <p className="text-sm text-muted-foreground">Total XP</p>
            </CardContent>
          </Card>
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="p-4 text-center">
              <Flame className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold">{maxStreak}</p>
              <p className="text-sm text-muted-foreground">Best Streak</p>
            </CardContent>
          </Card>
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="p-4 text-center">
              <BookOpen className="w-8 h-8 text-secondary mx-auto mb-2" />
              <p className="text-2xl font-bold">{totalLessons}</p>
              <p className="text-sm text-muted-foreground">Lessons Done</p>
            </CardContent>
          </Card>
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 text-warning mx-auto mb-2" />
              <p className="text-2xl font-bold">{languagesWithProgress.length}</p>
              <p className="text-sm text-muted-foreground">Languages</p>
            </CardContent>
          </Card>
        </div>

        {/* Language Progress */}
        <h2 className="text-xl font-bold text-foreground mb-4">Language Progress</h2>

        {languagesWithProgress.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">No progress yet. Start learning to see your stats!</p>
              <Button onClick={() => navigate('/')} className="mt-4">
                Start Learning
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {languagesWithProgress.map(code => {
              const lang = languages.find(l => l.code === code);
              const progress = getProgress(code);

              if (!lang) return null;

              return (
                <Card key={code} className="overflow-hidden">
                  <div className="bg-muted/30 p-4 flex items-center gap-4">
                    <span className="text-4xl">{lang.flag}</span>
                    <div>
                      <h3 className="font-bold text-lg">{lang.name}</h3>
                      <p className="text-sm text-muted-foreground">{progress.lessonsCompleted} lessons completed</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-background rounded-lg p-3 border border-border">
                        <p className="text-2xl font-bold text-primary">{progress.xp}</p>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">XP Earned</p>
                      </div>
                      <div className="bg-background rounded-lg p-3 border border-border">
                        <p className="text-2xl font-bold text-accent">{progress.streak}</p>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Day Streak</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default Profile;
