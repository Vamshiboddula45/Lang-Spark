import { useEffect, useState } from 'react';
import { Star, Zap, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const LessonComplete = ({ xpEarned, lessonTitle, onContinue }) => {
  const [showContent, setShowContent] = useState(false);
  const [showXp, setShowXp] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 300);
    const timer2 = setTimeout(() => setShowXp(true), 800);
    const timer3 = setTimeout(() => setCelebrate(true), 1000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        {/* Trophy */}
        <div className={cn(
          "w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-streak flex items-center justify-center",
          showContent && "animate-bounce-in",
          celebrate && "animate-celebrate"
        )}>
          <Trophy className="w-16 h-16 text-accent-foreground" />
        </div>

        {/* Title */}
        <h1 className={cn(
          "text-3xl sm:text-4xl font-extrabold text-foreground mb-4 opacity-0 translate-y-4 transition-all duration-500",
          showContent && "opacity-100 translate-y-0"
        )}>
          Lesson Complete!
        </h1>

        <p className={cn(
          "text-lg text-muted-foreground mb-8 opacity-0 translate-y-4 transition-all duration-500 delay-100",
          showContent && "opacity-100 translate-y-0"
        )}>
          You finished <span className="font-bold text-foreground">{lessonTitle}</span>
        </p>

        {/* XP Card */}
        <div className={cn(
          "bg-card rounded-2xl p-6 card-shadow mb-8 opacity-0 scale-90 transition-all duration-500",
          showXp && "opacity-100 scale-100"
        )}>
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 rounded-xl bg-primary/10">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-muted-foreground">XP Earned</p>
              <p className="text-3xl font-extrabold text-gradient-xp">+{xpEarned}</p>
            </div>
          </div>
        </div>

        {/* Stars */}
        <div className={cn(
          "flex justify-center gap-2 mb-8 opacity-0 transition-all duration-500 delay-300",
          showXp && "opacity-100"
        )}>
          {Array.from({ length: 3 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-10 h-10 text-accent fill-accent",
                celebrate && "animate-float"
              )}
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>

        {/* Continue Button */}
        <Button
          onClick={onContinue}
          size="xl"
          className={cn(
            "w-full opacity-0 translate-y-4 transition-all duration-500 delay-500",
            showXp && "opacity-100 translate-y-0"
          )}
        >
          Continue Learning
        </Button>
      </div>
    </div>
  );
};
