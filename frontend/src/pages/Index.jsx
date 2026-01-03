import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProgress } from '@/hooks/useUserProgress';
import { Navbar } from '@/components/Navbar';
import { LessonPath } from '@/components/LessonPath';
import { QuizScreen } from '@/components/QuizScreen';
import { LessonComplete } from '@/components/LessonComplete';
import { LanguageSelector } from '@/components/LanguageSelector';
import { languages, lessonsByLanguage, calculateLevel } from '@/data/languages';
import { Flame, BookOpen, Mic, Loader2, Zap, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { xpProgress } from '@/data/languages';

const getDateString = (date) => {
  return date.toISOString().split('T')[0];
};

const LoadingScreen = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
);

// Important: keep auth gating separate so we don't run progress hooks when logged out.
const IndexAuthed = ({ user }) => {
  const navigate = useNavigate();
  const {
    getProgress,
    saveProgress,
    getLanguagesWithProgress,
    loading: progressLoading,
  } = useUserProgress();

  const [screen, setScreen] = useState('home');
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [lessons, setLessons] = useState(lessonsByLanguage[languages[0].code]);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [lastXpEarned, setLastXpEarned] = useState(0);
  const [progress, setProgress] = useState({
    xp: 0,
    streak: 0,
    level: 1,
    lessonsCompleted: 0,
    currentLessonId: null,
  });
  const [completedLessons, setCompletedLessons] = useState([]);
  const [lastActivityDate, setLastActivityDate] = useState(null);
  const [languagesWithProgress, setLanguagesWithProgress] = useState([]);

  useEffect(() => {
    if (!user || progressLoading) return;

    const saved = getProgress(selectedLanguage.code);
    const today = getDateString(new Date());
    const yesterday = getDateString(new Date(Date.now() - 86400000));

    let updatedStreak = saved.streak;

    if (saved.lastActivityDate) {
      if (saved.lastActivityDate !== today && saved.lastActivityDate !== yesterday) {
        updatedStreak = 0;
      }
    }

    setProgress({
      xp: saved.xp,
      streak: updatedStreak,
      level: saved.level,
      lessonsCompleted: saved.lessonsCompleted,
      currentLessonId: saved.currentLessonId,
    });
    setLastActivityDate(saved.lastActivityDate);
    setCompletedLessons(saved.completedLessons);

    const updatedLessons = lessonsByLanguage[selectedLanguage.code].map((lesson, index) => {
      const isCompleted = saved.completedLessons.includes(lesson.id);
      const previousCompleted =
        index === 0 ||
        saved.completedLessons.includes(lessonsByLanguage[selectedLanguage.code][index - 1].id);
      return {
        ...lesson,
        completed: isCompleted,
        locked: index > 0 && !previousCompleted,
      };
    });
    setLessons(updatedLessons);

    setLanguagesWithProgress(getLanguagesWithProgress());
  }, [user, selectedLanguage, progressLoading]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  useEffect(() => {
    const newLevel = calculateLevel(progress.xp);
    if (newLevel !== progress.level) {
      setProgress((prev) => ({ ...prev, level: newLevel }));
    }
  }, [progress.xp, progress.level]);

  const handleSelectLesson = (lesson) => {
    setCurrentLesson(lesson);
    setScreen('quiz');
  };

  const handleCompleteLesson = async (earnedXp) => {
    setLastXpEarned(earnedXp);
    const today = getDateString(new Date());
    const yesterday = getDateString(new Date(Date.now() - 86400000));

    let newStreak = progress.streak;

    if (lastActivityDate === today) {
      newStreak = progress.streak;
    } else if (lastActivityDate === yesterday || lastActivityDate === null) {
      newStreak = progress.streak + 1;
    } else {
      newStreak = 1;
    }

    const updatedLessons = lessons.map((l, index) => {
      if (l.id === currentLesson?.id) {
        return { ...l, completed: true };
      }
      if (index > 0 && lessons[index - 1].id === currentLesson?.id) {
        return { ...l, locked: false };
      }
      return l;
    });

    setLessons(updatedLessons);

    const newCompletedLessons =
      currentLesson && !completedLessons.includes(currentLesson.id)
        ? [...completedLessons, currentLesson.id]
        : completedLessons;

    const newProgress = {
      ...progress,
      xp: progress.xp + earnedXp,
      lessonsCompleted: newCompletedLessons.length,
      streak: newStreak,
    };

    setProgress(newProgress);
    setLastActivityDate(today);
    setCompletedLessons(newCompletedLessons);

    await saveProgress(selectedLanguage.code, newProgress, today, newCompletedLessons);

    setScreen('complete');
  };

  const handleExit = () => {
    setCurrentLesson(null);
    setScreen('home');
  };

  const handleContinue = () => {
    setCurrentLesson(null);
    setScreen('home');
  };

  if (progressLoading) {
    return <LoadingScreen />;
  }

  if (screen === 'quiz' && currentLesson) {
    return (
      <QuizScreen
        lesson={currentLesson}
        languageCode={selectedLanguage.code}
        onComplete={handleCompleteLesson}
        onExit={handleExit}
      />
    );
  }

  if (screen === 'complete' && currentLesson) {
    return (
      <LessonComplete
        xpEarned={lastXpEarned}
        lessonTitle={currentLesson.title}
        onContinue={handleContinue}
      />
    );
  }

  const greetings = {
    'en-us': 'Hello!',
    'en-gb': 'Hello!',
    es: '¡Hola!',
    fr: 'Bonjour!',
    de: 'Hallo!',
    it: 'Ciao!',
    pt: 'Olá!',
    ja: 'こんにちは!',
    ko: '안녕하세요!',
    zh: '你好!',
    ru: 'Привет!',
    ar: 'مرحبا!',
    hi: 'नमस्ते!',
    nl: 'Hallo!',
  };

  const level = calculateLevel(progress.xp);
  const levelProgress = xpProgress(progress.xp);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 py-8">
        {/* Language Selector with Progress Indicators */}
        <section className="mb-6">
          <LanguageSelector
            languages={languages.map((lang) => ({
              ...lang,
              hasProgress: languagesWithProgress.includes(lang.code),
            }))}
            selectedLanguage={selectedLanguage}
            onSelect={handleLanguageChange}
          />
        </section>

        {/* Welcome Section */}
        <section className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-2">
            {greetings[selectedLanguage.code]} 👋
          </h1>
          <p className="text-lg text-muted-foreground">Ready to continue learning {selectedLanguage.name}?</p>
        </section>

        {/* Stats Cards */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="bg-card rounded-2xl p-4 border border-border text-center">
            <Flame className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-foreground">{progress.streak}</p>
            <p className="text-xs text-muted-foreground font-medium">Day Streak</p>
          </div>

          <div className="bg-card rounded-2xl p-4 border border-border text-center">
            <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-foreground">{progress.xp}</p>
            <p className="text-xs text-muted-foreground font-medium">Total XP</p>
          </div>

          <div className="bg-card rounded-2xl p-4 border border-border text-center">
            <BookOpen className="w-6 h-6 text-secondary mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-foreground">{progress.lessonsCompleted}</p>
            <p className="text-xs text-muted-foreground font-medium">Lessons</p>
          </div>

          <div className="bg-card rounded-2xl p-4 border border-border text-center">
            <Trophy className="w-6 h-6 text-warning mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-foreground">{level}</p>
            <p className="text-xs text-muted-foreground font-medium">Level</p>
            <Progress value={levelProgress} className="h-1 mt-2" />
          </div>
        </section>

        {/* Speech Feature Banner */}
        <section className="mb-6 p-4 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mic className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Practice Speaking!</h3>
              <p className="text-sm text-muted-foreground">Lessons now include speech recognition exercises</p>
            </div>
          </div>
        </section>

        {/* Lesson Path */}
        <section className="pb-16">
          <h2 className="text-xl font-bold text-foreground mb-2 text-center">Your Learning Path</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">Tap a lesson to start learning!</p>
          <LessonPath lessons={lessons} onSelect={handleSelectLesson} />
        </section>
      </main>
    </div>
  );
};

const Index = () => {
  const { user, loading: authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    const hasRecoveryParams =
      location.search.includes('code=') ||
      location.search.includes('type=recovery') ||
      location.hash.includes('type=recovery') ||
      location.hash.includes('access_token=');

    const to = hasRecoveryParams ? `/auth${location.search}${location.hash}` : '/auth';
    return <Navigate to={to} replace />;
  }

  return <IndexAuthed user={user} />;
};

export default Index;
