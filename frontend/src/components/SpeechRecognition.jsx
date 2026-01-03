import { useState, useEffect, useCallback } from 'react';
import { Mic, MicOff, Volume2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const SpeechRecognition = ({ targetText, onResult, disabled }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Check for browser support
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setIsSupported(false);
      setError('Speech recognition is not supported in your browser. Try Chrome or Edge.');
    }
  }, []);

  // Number words to digits mapping
  const numberWordsToDigits = {
    'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
    'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9',
    'ten': '10', 'eleven': '11', 'twelve': '12', 'thirteen': '13', 'fourteen': '14',
    'fifteen': '15', 'sixteen': '16', 'seventeen': '17', 'eighteen': '18', 'nineteen': '19',
    'twenty': '20', 'thirty': '30', 'forty': '40', 'fifty': '50',
    'sixty': '60', 'seventy': '70', 'eighty': '80', 'ninety': '90',
    'hundred': '100', 'thousand': '1000', 'million': '1000000',
  };

  // Digits to number words mapping
  const digitsToWords = {
    '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
    '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine',
    '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen',
    '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen',
    '20': 'twenty', '21': 'twenty one', '30': 'thirty', '40': 'forty', '50': 'fifty',
    '60': 'sixty', '70': 'seventy', '80': 'eighty', '90': 'ninety',
    '100': 'one hundred', '1000': 'one thousand',
  };

  // Normalize text by converting numbers to words and vice versa
  const normalizeText = (text) => {
    let normalized = text.toLowerCase().trim();

    // Remove special characters except spaces and numbers
    normalized = normalized.replace(/[^a-z0-9\s]/g, '');

    // First, convert any digit sequences to words
    normalized = normalized.replace(/\d+/g, (match) => {
      if (digitsToWords[match]) {
        return digitsToWords[match];
      }
      // For compound numbers like 21, 45, etc.
      const num = parseInt(match);
      if (num >= 21 && num <= 99) {
        const tens = Math.floor(num / 10) * 10;
        const ones = num % 10;
        const tensWord = digitsToWords[tens.toString()] || '';
        const onesWord = ones > 0 ? ' ' + (digitsToWords[ones.toString()] || '') : '';
        return tensWord + onesWord;
      }
      if (num >= 100 && num < 1000) {
        const hundreds = Math.floor(num / 100);
        const remainder = num % 100;
        let result = digitsToWords[hundreds.toString()] + ' hundred';
        if (remainder > 0) {
          if (remainder < 20) {
            result += ' ' + digitsToWords[remainder.toString()];
          } else {
            const tens = Math.floor(remainder / 10) * 10;
            const ones = remainder % 10;
            result += ' ' + digitsToWords[tens.toString()];
            if (ones > 0) result += ' ' + digitsToWords[ones.toString()];
          }
        }
        return result;
      }
      return match;
    });

    // Clean up multiple spaces
    normalized = normalized.replace(/\s+/g, ' ').trim();

    return normalized;
  };

  // Simple Levenshtein distance for fuzzy matching
  const levenshteinDistance = (a, b) => {
    const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + indicator
        );
      }
    }

    return matrix[b.length][a.length];
  };

  const startListening = useCallback(() => {
    if (!isSupported || disabled) return;

    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionAPI();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
      setTranscript('');
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase().trim();
      setTranscript(spokenText);

      // Normalize both texts for comparison (handle numbers)
      const normalizedSpoken = normalizeText(spokenText);
      const normalizedTarget = normalizeText(targetText.toLowerCase().trim());

      // Calculate Levenshtein distance
      const distance = levenshteinDistance(normalizedSpoken, normalizedTarget);

      // Calculate allowable errors based on word length
      // 20% tolerance, but stricter for short words
      let allowedDistance = 0;
      if (normalizedTarget.length > 3) {
        allowedDistance = Math.max(1, Math.floor(normalizedTarget.length * 0.2));
      }

      const isCorrect = distance <= allowedDistance;

      onResult(isCorrect, spokenText);
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      if (event.error === 'no-speech') {
        setError('No speech detected. Please try again.');
      } else if (event.error === 'not-allowed') {
        setError('Microphone access denied. Please enable it in your browser settings.');
      } else {
        setError(`Error: ${event.error}`);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  }, [isSupported, disabled, targetText, onResult]);

  if (!isSupported) {
    return (
      <div className="text-center p-6 rounded-xl bg-destructive/10 border border-destructive/20">
        <MicOff className="w-12 h-12 mx-auto mb-3 text-destructive" />
        <p className="text-destructive font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="mb-6">
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
          <Volume2 className="w-5 h-5" />
          <span className="font-medium">Say this word:</span>
        </div>
        <p className="text-3xl font-bold text-foreground">{targetText}</p>
      </div>

      <button
        onClick={startListening}
        disabled={isListening || disabled}
        className={cn(
          "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 mx-auto mb-4",
          isListening
            ? "bg-destructive text-destructive-foreground animate-pulse scale-110"
            : "bg-primary text-primary-foreground hover:scale-105 hover:shadow-lg",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {isListening ? (
          <div className="relative">
            <Mic className="w-10 h-10" />
            <div className="absolute -inset-4 rounded-full border-4 border-destructive/30 animate-ping" />
          </div>
        ) : (
          <Mic className="w-10 h-10" />
        )}
      </button>

      <p className={cn(
        "text-sm font-medium transition-colors",
        isListening ? "text-destructive" : "text-muted-foreground"
      )}>
        {isListening ? "Listening..." : "Tap to speak"}
      </p>

      {transcript && (
        <div className="mt-4 p-3 rounded-lg bg-muted">
          <p className="text-sm text-muted-foreground">You said:</p>
          <p className="font-semibold text-foreground">{transcript}</p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          {error}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setError(null)}
            className="ml-2"
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
