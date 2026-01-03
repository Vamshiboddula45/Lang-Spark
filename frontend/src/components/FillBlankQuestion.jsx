import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const FillBlankQuestion = ({ 
  sentence, 
  correctAnswer, 
  options, 
  onAnswer, 
  disabled 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Split sentence by blank marker
  const parts = sentence.split('___');

  const handleOptionClick = (option) => {
    if (disabled) return;
    setSelectedAnswer(option);
    onAnswer(option);
  };

  const handleInputSubmit = () => {
    if (disabled || !inputValue.trim()) return;
    onAnswer(inputValue.trim());
  };

  return (
    <div className="space-y-6">
      {/* Sentence with blank */}
      <div className="p-6 bg-card rounded-2xl border-2 border-border">
        <p className="text-xl font-semibold text-foreground leading-relaxed">
          {parts[0]}
          <span className={cn(
            "inline-block min-w-[100px] mx-2 px-3 py-1 rounded-lg border-2 border-dashed",
            selectedAnswer || inputValue 
              ? "border-primary bg-primary/10 text-primary" 
              : "border-muted-foreground"
          )}>
            {selectedAnswer || inputValue || '______'}
          </span>
          {parts[1]}
        </p>
      </div>

      {/* Options or Input */}
      {options && options.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              disabled={disabled}
              className={cn(
                "p-4 rounded-xl border-2 font-semibold transition-all duration-200",
                selectedAnswer === option 
                  ? "border-primary bg-primary/10 text-primary" 
                  : "border-border bg-card hover:border-primary/50"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex gap-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your answer..."
            disabled={disabled}
            className="text-lg"
            onKeyDown={(e) => e.key === 'Enter' && handleInputSubmit()}
          />
          <Button 
            onClick={handleInputSubmit} 
            disabled={disabled || !inputValue.trim()}
          >
            Check
          </Button>
        </div>
      )}
    </div>
  );
};
