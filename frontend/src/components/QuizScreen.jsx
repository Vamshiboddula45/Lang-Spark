import { useState, useEffect } from 'react';
import { X, Heart, Lightbulb, CheckCircle2, XCircle, Mic, Link2, PenLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SpeechRecognition } from '@/components/SpeechRecognition';
import { MatchPairsQuestion } from '@/components/MatchPairsQuestion';
import { FillBlankQuestion } from '@/components/FillBlankQuestion';
import { TextToSpeech } from '@/components/TextToSpeech';
import { cn } from '@/lib/utils';

export const QuizScreen = ({ lesson, languageCode = 'en-us', onComplete, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hearts, setHearts] = useState(3);
  const [showHint, setShowHint] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [animateResult, setAnimateResult] = useState(false);
  const [spokenText, setSpokenText] = useState('');

  const currentQuestion = lesson.questions[currentIndex];
  const progress = ((currentIndex) / lesson.questions.length) * 100;
  const isSpeakingQuestion = currentQuestion.type === 'speaking';
  const isMatchPairsQuestion = currentQuestion.type === 'match-pairs';
  const isFillBlankQuestion = currentQuestion.type === 'fill-blank';

  const getTextToSpeak = () => {
    if (currentQuestion.type === 'speaking') return currentQuestion.spokenText || currentQuestion.correctAnswer;
    if (currentQuestion.type === 'fill-blank' && currentQuestion.sentence) return currentQuestion.sentence.replace('___', currentQuestion.correctAnswer);
    return currentQuestion.correctAnswer;
  };

  const getQuestionTextToSpeak = () => {
    if (currentQuestion.type === 'speaking') return currentQuestion.spokenText || currentQuestion.correctAnswer;
    if (currentQuestion.type === 'fill-blank' && currentQuestion.sentence) return currentQuestion.sentence;
    return currentQuestion.question;
  };

  const getQuestionTypeLabel = () => {
    switch (currentQuestion.type) {
      case 'speaking': return 'Speak this word';
      case 'translation': return 'Translate this';
      case 'match-pairs': return 'Match the pairs';
      case 'fill-blank': return 'Fill in the blank';
      default: return 'Select the correct answer';
    }
  };

  const getQuestionTypeIcon = () => {
    switch (currentQuestion.type) {
      case 'speaking': return <Mic className="w-4 h-4" />;
      case 'match-pairs': return <Link2 className="w-4 h-4" />;
      case 'fill-blank': return <PenLine className="w-4 h-4" />;
      default: return null;
    }
  };

  const handleAnswer = (answer) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    const correct = answer.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim();
    setIsCorrect(correct);
    setAnimateResult(true);
    if (correct) setCorrectCount(prev => prev + 1);
    else setHearts(prev => Math.max(0, prev - 1));
  };

  const handleSpeechResult = (correct, transcript) => {
    setSpokenText(transcript);
    setIsAnswered(true);
    setIsCorrect(correct);
    setAnimateResult(true);
    if (correct) setCorrectCount(prev => prev + 1);
    else setHearts(prev => Math.max(0, prev - 1));
  };

  const handleMatchPairsComplete = (correct) => {
    setIsAnswered(true);
    setIsCorrect(correct);
    setAnimateResult(true);
    if (correct) setCorrectCount(prev => prev + 1);
  };

  const handleContinue = () => {
    if (hearts === 0) { onExit(); return; }
    if (currentIndex === lesson.questions.length - 1) {
      const earnedXp = Math.round((correctCount / lesson.questions.length) * lesson.xpReward);
      onComplete(earnedXp);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
      setAnimateResult(false);
      setSpokenText('');
    }
  };

  useEffect(() => {
    if (animateResult) {
      const timer = setTimeout(() => setAnimateResult(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animateResult]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-card border-b border-border p-4">
        <div className="container max-w-2xl mx-auto">
          <div className="flex items-center gap-4">
            <button onClick={onExit} className="p-2 rounded-lg hover:bg-muted transition-colors">
              <X className="w-6 h-6 text-muted-foreground" />
            </button>
            <div className="flex-1"><Progress value={progress} className="h-3" /></div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <Heart key={i} className={cn("w-6 h-6 transition-all duration-300", i < hearts ? "text-destructive fill-destructive" : "text-muted-foreground")} />
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container max-w-2xl mx-auto px-4 py-8 flex flex-col">
        <div className="flex-1">
          <div className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
            {getQuestionTypeIcon()}{getQuestionTypeLabel()}
          </div>
          <div className="flex items-start gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground flex-1">{currentQuestion.question}</h2>
            {getQuestionTextToSpeak() && !isMatchPairsQuestion && <TextToSpeech text={getQuestionTextToSpeak()} language={languageCode} size="lg" />}
          </div>
          <div className="flex items-center gap-4 mb-6">
            {currentQuestion.hint && !isAnswered && (
              <button onClick={() => setShowHint(true)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Lightbulb className="w-4 h-4" />{showHint ? currentQuestion.hint : 'Show hint'}
              </button>
            )}
          </div>
          {isSpeakingQuestion ? <SpeechRecognition targetText={currentQuestion.spokenText || currentQuestion.correctAnswer} onResult={handleSpeechResult} disabled={isAnswered} />
           : isMatchPairsQuestion && currentQuestion.pairs ? <MatchPairsQuestion pairs={currentQuestion.pairs} onComplete={handleMatchPairsComplete} disabled={isAnswered} />
           : isFillBlankQuestion && currentQuestion.sentence ? <FillBlankQuestion sentence={currentQuestion.sentence} correctAnswer={currentQuestion.correctAnswer} options={currentQuestion.options} onAnswer={handleAnswer} disabled={isAnswered} />
           : <div className="grid gap-3">
              {currentQuestion.options?.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrectAnswer = option === currentQuestion.correctAnswer;
                return (
                  <button key={index} onClick={() => handleAnswer(option)} disabled={isAnswered} className={cn("w-full p-4 rounded-xl border-2 text-left font-semibold text-lg transition-all duration-200", !isAnswered && "hover:border-primary/50 hover:bg-primary/5 active:scale-[0.98]", !isAnswered && isSelected && "border-primary bg-primary/10", !isAnswered && !isSelected && "border-border bg-card", isAnswered && isCorrectAnswer && "border-primary bg-primary/10 text-primary", isAnswered && isSelected && !isCorrectAnswer && "border-destructive bg-destructive/10 text-destructive", isAnswered && !isSelected && !isCorrectAnswer && "border-border bg-card opacity-50")}>
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {isAnswered && isCorrectAnswer && <CheckCircle2 className="w-6 h-6 text-primary animate-bounce-in" />}
                      {isAnswered && isSelected && !isCorrectAnswer && <XCircle className="w-6 h-6 text-destructive animate-shake" />}
                    </div>
                  </button>
                );
              })}
            </div>}
        </div>
        {isAnswered && (
          <div className={cn("mt-8 p-6 rounded-2xl", isCorrect ? "bg-primary/10" : "bg-destructive/10", animateResult && "animate-bounce-in")}>
            <div className="flex items-center gap-3 mb-4">
              {isCorrect ? <><CheckCircle2 className="w-8 h-8 text-primary" /><span className="text-xl font-extrabold text-primary">Excellent!</span></> : <><XCircle className="w-8 h-8 text-destructive" /><span className="text-xl font-extrabold text-destructive">Not quite</span></>}
            </div>
            {!isCorrect && !isMatchPairsQuestion && (
              <div className="flex items-center gap-3 mb-4">
                <p className="text-muted-foreground">{isSpeakingQuestion ? <>You said: <span className="font-bold text-foreground">{spokenText}</span></> : <>Correct answer: <span className="font-bold text-foreground">{currentQuestion.correctAnswer}</span></>}</p>
                {getTextToSpeak() && <TextToSpeech text={getTextToSpeak()} language={languageCode} size="sm" />}
              </div>
            )}
            <Button onClick={handleContinue} variant={isCorrect ? "default" : "destructive"} size="lg" className="w-full">
              {hearts === 0 ? 'Try Again Later' : currentIndex === lesson.questions.length - 1 ? 'Finish' : 'Continue'}
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};
