import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Navbar } from '@/components/Navbar';
import { LanguageSelector } from '@/components/LanguageSelector';
import { languages } from '@/data/languages';
import { alphabets } from '@/data/alphabets';
import { Volume2, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

// Map app language codes to speech synthesis locale codes
const langMap = {
  'en-us': 'en-US',
  'en-gb': 'en-GB',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
  it: 'it-IT',
  pt: 'pt-PT',
  ja: 'ja-JP',
  ko: 'ko-KR',
  zh: 'zh-CN',
  ru: 'ru-RU',
  ar: 'ar-SA',
  hi: 'hi-IN',
  nl: 'nl-NL',
};

let voicesPromise = null;

// In many browsers, speechSynthesis.getVoices() returns an empty array until "voiceschanged" fires.
const getVoicesAsync = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return Promise.resolve([]);

  if (voicesPromise) return voicesPromise;

  voicesPromise = new Promise((resolve) => {
    const immediate = window.speechSynthesis.getVoices();
    if (immediate.length) {
      resolve(immediate);
      return;
    }

    const handle = () => {
      const v = window.speechSynthesis.getVoices();
      window.speechSynthesis.removeEventListener('voiceschanged', handle);
      resolve(v);
    };

    window.speechSynthesis.addEventListener('voiceschanged', handle);

    // Fallback: resolve after a short delay even if the event never fires.
    setTimeout(() => {
      const v = window.speechSynthesis.getVoices();
      window.speechSynthesis.removeEventListener('voiceschanged', handle);
      resolve(v);
    }, 1000);
  });

  return voicesPromise;
};

const pickBestVoice = (voices, langCode) => {
  const targetLang = langMap[langCode] || 'en-US';

  // Prefer exact locale match
  let voice = voices.find((v) => v.lang === targetLang);

  // Fallback: match language (e.g. "de" for "de-DE")
  if (!voice) {
    const shortLang = targetLang.split('-')[0];
    voice = voices.find((v) => v.lang?.toLowerCase().startsWith(shortLang.toLowerCase()));
  }

  // Prefer local voices when possible (often clearer/less laggy)
  if (voice) return voice;
  const targetShort = targetLang.split('-')[0].toLowerCase();
  const localMatch = voices.find(
    (v) => v.localService && v.lang?.toLowerCase().startsWith(targetShort)
  );
  return localMatch || null;
};

const LetterCard = ({ letter, languageCode }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = async () => {
    if (!('speechSynthesis' in window)) return;

    // Cancels can leave UI in "playing" state in some browsers if onend doesn't fire.
    setIsPlaying(false);
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(letter.upper);
    utterance.lang = langMap[languageCode] || 'en-US';

    // Clearer pronunciation for single letters
    utterance.rate = 0.75;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onstart = () => setIsPlaying(true);
    const stop = () => setIsPlaying(false);
    utterance.onend = stop;
    utterance.onerror = stop;

    const voices = await getVoicesAsync();
    const voice = pickBestVoice(voices, languageCode);
    if (voice) utterance.voice = voice;

    // Small delay after cancel() makes playback more reliable on Chrome/Edge.
    setTimeout(() => {
      try {
        window.speechSynthesis.speak(utterance);
        window.speechSynthesis.resume();
      } catch (e) {
        stop();
      }
    }, 60);
  };

  return (
    <Card 
      className="p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-accent/50 transition-colors group"
      onClick={playSound}
    >
      <div className="flex items-center gap-1 text-2xl font-bold text-foreground">
        <span>{letter.upper}</span>
        <span className="text-muted-foreground">{letter.lower}</span>
      </div>
      <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
        {letter.pronunciation}
      </span>
      <Volume2 
        className={`w-4 h-4 mt-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ${
          isPlaying ? 'text-primary opacity-100' : ''
        }`}
      />
    </Card>
  );
};

const LoadingScreen = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
);

const Letters = () => {
  const { user, loading: authLoading } = useAuth();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  if (authLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const alphabet = alphabets[selectedLanguage.code] || alphabets['en-us'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 py-8">
        {/* Language Selector */}
        <section className="mb-6">
          <LanguageSelector
            languages={languages}
            selectedLanguage={selectedLanguage}
            onSelect={setSelectedLanguage}
          />
        </section>

        {/* Header */}
        <section className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
            {alphabet.name}
          </h1>
          <p className="text-muted-foreground">
            Master the sounds of {alphabet.name}
          </p>
        </section>

        {/* Letters Grid */}
        <section className="grid grid-cols-4 gap-3">
          {alphabet.letters.map((letter, index) => (
            <LetterCard 
              key={index} 
              letter={letter} 
              languageCode={selectedLanguage.code}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Letters;
