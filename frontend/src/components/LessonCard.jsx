import { Lock, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export const LessonCard = ({ lesson, onSelect }) => {
  const isLocked = lesson.locked;
  const isCompleted = lesson.completed;

  return (
    <button
      onClick={() => !isLocked && onSelect(lesson)}
      disabled={isLocked}
      className={cn(
        "w-full p-4 rounded-2xl border-2 transition-all duration-200 text-left group",
        isLocked
          ? "bg-muted border-border cursor-not-allowed opacity-60"
          : isCompleted
          ? "bg-card border-primary/30 hover:border-primary"
          : "bg-card border-border hover:border-primary/50"
      )}
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center text-2xl",
            isLocked ? "bg-muted" : "bg-primary/10"
          )}
        >
          {isLocked ? <Lock className="w-6 h-6 text-muted-foreground" /> : lesson.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className={cn(
              "font-bold text-lg truncate",
              isLocked ? "text-muted-foreground" : "text-foreground"
            )}>
              {lesson.title}
            </h3>
            {isCompleted && (
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-muted-foreground truncate">{lesson.category}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className={cn(
              "text-xs font-semibold px-2 py-0.5 rounded-full",
              lesson.difficulty === 'beginner' && "bg-primary/10 text-primary",
              lesson.difficulty === 'intermediate' && "bg-secondary/10 text-secondary",
              lesson.difficulty === 'advanced' && "bg-accent/10 text-accent"
            )}>
              {lesson.difficulty}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Zap className="w-3 h-3" />
              +{lesson.xpReward} XP
            </span>
          </div>
        </div>

        {/* Arrow */}
        {!isLocked && (
          <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
        )}
      </div>
    </button>
  );
};
