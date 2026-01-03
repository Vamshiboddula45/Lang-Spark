import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

export const MatchPairsQuestion = ({ pairs, onComplete, disabled }) => {
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(new Set());
  const [wrongMatch, setWrongMatch] = useState(null);
  const [shuffledRight, setShuffledRight] = useState([]);

  useEffect(() => {
    // Shuffle the right side options
    const rightOptions = pairs.map(p => p.right);
    setShuffledRight(rightOptions.sort(() => Math.random() - 0.5));
  }, [pairs]);

  const handleLeftClick = (left) => {
    if (disabled || matchedPairs.has(left)) return;
    setSelectedLeft(left);
    setWrongMatch(null);
  };

  const handleRightClick = (right) => {
    if (disabled || !selectedLeft) return;
    
    // Check if right is already matched
    const isRightMatched = pairs.some(p => matchedPairs.has(p.left) && p.right === right);
    if (isRightMatched) return;

    const correctPair = pairs.find(p => p.left === selectedLeft);
    
    if (correctPair?.right === right) {
      // Correct match
      const newMatched = new Set(matchedPairs);
      newMatched.add(selectedLeft);
      setMatchedPairs(newMatched);
      setSelectedLeft(null);
      
      // Check if all pairs matched
      if (newMatched.size === pairs.length) {
        onComplete(true);
      }
    } else {
      // Wrong match
      setWrongMatch({ left: selectedLeft, right });
      setTimeout(() => {
        setWrongMatch(null);
        setSelectedLeft(null);
      }, 800);
    }
  };

  const getLeftItemMatched = (left) => matchedPairs.has(left);
  const getRightItemMatched = (right) => {
    return pairs.some(p => matchedPairs.has(p.left) && p.right === right);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Left column */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-muted-foreground mb-2">Word</p>
        {pairs.map((pair) => {
          const isMatched = getLeftItemMatched(pair.left);
          const isSelected = selectedLeft === pair.left;
          const isWrong = wrongMatch?.left === pair.left;

          return (
            <button
              key={pair.left}
              onClick={() => handleLeftClick(pair.left)}
              disabled={disabled || isMatched}
              className={cn(
                "w-full p-3 rounded-xl border-2 text-left font-semibold transition-all duration-200",
                isMatched && "border-primary bg-primary/10 text-primary",
                isSelected && !isMatched && "border-accent bg-accent/10",
                isWrong && "border-destructive bg-destructive/10 animate-shake",
                !isMatched && !isSelected && !isWrong && "border-border bg-card hover:border-primary/50"
              )}
            >
              <div className="flex items-center justify-between">
                <span>{pair.left}</span>
                {isMatched && <CheckCircle2 className="w-5 h-5 text-primary" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Right column */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-muted-foreground mb-2">Translation</p>
        {shuffledRight.map((right) => {
          const isMatched = getRightItemMatched(right);
          const isWrong = wrongMatch?.right === right;

          return (
            <button
              key={right}
              onClick={() => handleRightClick(right)}
              disabled={disabled || isMatched || !selectedLeft}
              className={cn(
                "w-full p-3 rounded-xl border-2 text-left font-semibold transition-all duration-200",
                isMatched && "border-primary bg-primary/10 text-primary",
                isWrong && "border-destructive bg-destructive/10 animate-shake",
                !isMatched && !isWrong && selectedLeft && "border-border bg-card hover:border-accent/50",
                !isMatched && !isWrong && !selectedLeft && "border-border bg-card opacity-60"
              )}
            >
              <div className="flex items-center justify-between">
                <span>{right}</span>
                {isMatched && <CheckCircle2 className="w-5 h-5 text-primary" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
