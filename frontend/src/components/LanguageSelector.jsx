import { cn } from '@/lib/utils';
import { ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

export const LanguageSelector = ({ languages, selectedLanguage, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
      >
        <span className="text-2xl">{selectedLanguage.flag}</span>
        <span className="font-semibold text-foreground">{selectedLanguage.name}</span>
        <ChevronDown className={cn(
          "w-4 h-4 text-muted-foreground transition-transform",
          isOpen && "rotate-180"
        )} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute top-full mt-2 left-0 right-0 min-w-[200px] bg-card border border-border rounded-xl shadow-lg z-20 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  onSelect(language);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors text-left",
                  selectedLanguage.code === language.code && "bg-primary/10"
                )}
              >
                <span className="text-2xl">{language.flag}</span>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{language.name}</p>
                  <p className="text-sm text-muted-foreground">{language.nativeName}</p>
                </div>
                {language.hasProgress && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
