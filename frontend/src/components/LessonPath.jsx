import { useRef, useEffect } from 'react';
import { Lock, CheckCircle2, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export const LessonPath = ({ lessons, onSelect }) => {
  const currentLessonRef = useRef(null);
  const containerRef = useRef(null);

  // Find current lesson (first unlocked, not completed)
  const currentLessonIndex = lessons.findIndex(
    (lesson) => !lesson.locked && !lesson.completed
  );

  // Scroll to current lesson on mount
  useEffect(() => {
    if (currentLessonRef.current && containerRef.current) {
      setTimeout(() => {
        currentLessonRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 300);
    }
  }, [currentLessonIndex]);

  // Calculate zigzag pattern offset
  const getNodeOffset = (index) => {
    const pattern = index % 4;
    switch (pattern) {
      case 0: return 'translate-x-0';
      case 1: return 'translate-x-12';
      case 2: return 'translate-x-0';
      case 3: return '-translate-x-12';
      default: return 'translate-x-0';
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative py-8 overflow-visible"
    >
      {/* Timeline connector line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full" />

      {/* Lesson nodes */}
      <div className="relative flex flex-col items-center gap-6">
        {lessons.map((lesson, index) => {
          const isLocked = lesson.locked;
          const isCompleted = lesson.completed;
          const isCurrent = index === currentLessonIndex;
          const isPast = isCompleted;
          const isFuture = isLocked;

          return (
            <div
              key={lesson.id}
              className={cn(
                "relative flex flex-col items-center transition-all duration-300",
                getNodeOffset(index)
              )}
            >
              {/* Connector dots between nodes */}
              {index > 0 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col gap-1">
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    isPast || isCurrent ? "bg-primary" : "bg-border"
                  )} />
                </div>
              )}

              {/* Main node button */}
              <button
                ref={isCurrent ? currentLessonRef : undefined}
                onClick={() => !isLocked && onSelect(lesson)}
                disabled={isLocked}
                className={cn(
                  "relative group flex flex-col items-center",
                  "transition-all duration-300 ease-out",
                  !isLocked && "hover:scale-105 active:scale-95"
                )}
              >
                {/* Glow effect for current lesson */}
                {isCurrent && (
                  <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full bg-primary/20 animate-pulse-glow" />
                )}

                {/* Node circle */}
                <div
                  className={cn(
                    "relative w-16 h-16 rounded-full flex items-center justify-center text-2xl",
                    "border-4 transition-all duration-300",
                    "shadow-lg",
                    isLocked && "bg-muted border-border cursor-not-allowed",
                    isCompleted && "bg-primary border-primary text-primary-foreground",
                    isCurrent && "bg-card border-primary ring-4 ring-primary/30 animate-bounce",
                    !isLocked && !isCompleted && !isCurrent && "bg-card border-border hover:border-primary/50"
                  )}
                >
                  {isLocked ? (
                    <Lock className="w-6 h-6 text-muted-foreground" />
                  ) : isCompleted ? (
                    <CheckCircle2 className="w-7 h-7" />
                  ) : (
                    <span className="text-2xl">{lesson.icon}</span>
                  )}

                  {/* Star badge for completed */}
                  {isCompleted && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center shadow-md">
                      <Star className="w-3.5 h-3.5 text-accent-foreground fill-current" />
                    </div>
                  )}

                  {/* Current indicator */}
                  {isCurrent && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary" />
                    </div>
                  )}
                </div>

                {/* Lesson info card */}
                <div
                  className={cn(
                    "mt-3 px-4 py-2 rounded-xl text-center transition-all duration-300",
                    "min-w-[140px] max-w-[180px]",
                    isLocked && "opacity-50",
                    isCurrent && "bg-primary/10 border border-primary/30",
                    !isCurrent && !isLocked && "bg-card/80 backdrop-blur-sm border border-border",
                    isLocked && "bg-muted/50"
                  )}
                >
                  <h3
                    className={cn(
                      "font-bold text-sm truncate",
                      isLocked ? "text-muted-foreground" : "text-foreground"
                    )}
                  >
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">
                    {lesson.category}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-1.5">
                    <span
                      className={cn(
                        "text-[10px] font-semibold px-2 py-0.5 rounded-full",
                        lesson.difficulty === 'beginner' && "bg-primary/10 text-primary",
                        lesson.difficulty === 'intermediate' && "bg-secondary/10 text-secondary",
                        lesson.difficulty === 'advanced' && "bg-accent/10 text-accent"
                      )}
                    >
                      {lesson.difficulty}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-medium">
                      +{lesson.xpReward} XP
                    </span>
                  </div>
                </div>
              </button>
            </div>
          );
        })}

        {/* End marker */}
        <div className="relative flex flex-col items-center mt-4">
          <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
            <Star className="w-5 h-5 text-accent" />
          </div>
          <p className="mt-2 text-xs font-medium text-muted-foreground">Complete All!</p>
        </div>
      </div>
    </div>
  );
};
