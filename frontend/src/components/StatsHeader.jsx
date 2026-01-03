import { Flame, Zap, Trophy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { xpProgress, xpForNextLevel, calculateLevel } from '@/data/languages';

export const StatsHeader = ({ xp, streak }) => {
  const level = calculateLevel(xp);
  const progress = xpProgress(xp);
  const nextLevelXp = xpForNextLevel(level);

  return (
    <header className="bg-card card-shadow sticky top-0 z-50 border-b border-border animate-slide-down">
      <div className="container max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-xp flex items-center justify-center group-hover:animate-wiggle transition-smooth">
              <span className="text-2xl">🦉</span>
            </div>
            <span className="font-extrabold text-xl text-foreground hidden sm:block">Lingo</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Streak */}
            <div className="flex items-center gap-1.5 group hover-scale cursor-default">
              <div className="p-1.5 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-smooth">
                <Flame className="w-5 h-5 text-accent group-hover:animate-wiggle" />
              </div>
              <span className="font-bold text-foreground">{streak}</span>
            </div>

            {/* XP */}
            <div className="flex items-center gap-1.5 group hover-scale cursor-default">
              <div className="p-1.5 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-smooth">
                <Zap className="w-5 h-5 text-primary group-hover:animate-wiggle" />
              </div>
              <span className="font-bold text-foreground">{xp}</span>
            </div>

            {/* Level Progress */}
            <div className="hidden sm:flex items-center gap-2 group hover-scale cursor-default">
              <div className="p-1.5 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-smooth">
                <Trophy className="w-5 h-5 text-secondary group-hover:animate-wiggle" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-muted-foreground">Level {level}</span>
                <div className="w-24">
                  <Progress value={progress} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
