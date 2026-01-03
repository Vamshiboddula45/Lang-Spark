import { useState, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Map language codes to speech synthesis language codes
const languageMap = {
  'en-us': 'en-US',
  'en-gb': 'en-GB',
  'es': 'es-ES',
  'fr': 'fr-FR',
  'de': 'de-DE',
  'it': 'it-IT',
  'pt': 'pt-BR',
  'ja': 'ja-JP',
  'ko': 'ko-KR',
  'zh': 'zh-CN',
  'ru': 'ru-RU',
  'ar': 'ar-SA',
  'hi': 'hi-IN',
  'nl': 'nl-NL',
};

export const TextToSpeech = ({ text, language = 'en-us', className, size = 'default' }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const speak = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageMap[language] || 'en-US';
    utterance.rate = 0.9; // Slightly slower for learning
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to find a voice for the language
    const voices = window.speechSynthesis.getVoices();
    const targetLang = languageMap[language] || 'en-US';
    const voice = voices.find(v => v.lang.startsWith(targetLang.split('-')[0])) || 
                  voices.find(v => v.lang.includes(targetLang.split('-')[0]));
    
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [text, language]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  if (!isSupported) {
    return null;
  }

  const sizeClasses = {
    sm: 'h-8 w-8',
    default: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    default: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={isSpeaking ? stop : speak}
      className={cn(
        sizeClasses[size],
        "rounded-full transition-all duration-200",
        isSpeaking && "bg-primary text-primary-foreground border-primary",
        className
      )}
      title={isSpeaking ? "Stop" : "Listen"}
    >
      {isSpeaking ? (
        <VolumeX className={cn(iconSizes[size], "animate-pulse")} />
      ) : (
        <Volume2 className={iconSizes[size]} />
      )}
    </Button>
  );
};
