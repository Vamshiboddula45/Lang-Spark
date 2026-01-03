import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Volume2, Mic, Check, X, ArrowRight, Loader2 } from 'lucide-react';
import api from '../../../api/client';
import { useAuth } from '../../../contexts/AuthContext';

const LessonPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { user, refreshProfile } = useAuth();

    const [lesson, setLesson] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [textInput, setTextInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [isCorrect, setIsCorrect] = useState(null); // null, true, false
    const [completed, setCompleted] = useState(false);
    const [nextLessonId, setNextLessonId] = useState(null);

    const recognitionRef = useRef(null);

    // Initial Load
    useEffect(() => {
        const loadLesson = async () => {
            // 1. Priority: Check state
            if (location.state?.lesson) {
                setLesson(location.state.lesson);
                if (location.state.lesson.teachingContent) setCurrentQuestionIndex(-1);
            } else {
                // 2. Fetch
                try {
                    const { data } = await api.get(`/lessons/${id}`);
                    setLesson(data);
                    if (data.teachingContent) setCurrentQuestionIndex(-1);
                } catch (err) {
                    console.error("Failed to load lesson", err);
                }
            }
        };
        loadLesson();
    }, [id, location.state]);

    // Speech Setup
    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = true;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event) => {
                const current = event.resultIndex;
                const transcriptText = event.results[current][0].transcript;
                setTranscript(transcriptText);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }
    }, []);

    // Helper: Language Code Mapping
    const getLangCode = (langName) => {
        const map = { 'Spanish': 'es-ES', 'German': 'de-DE', 'French': 'fr-FR', 'Japanese': 'ja-JP', 'Italian': 'it-IT', 'English': 'en-US' };
        return map[langName] || 'en-US';
    };

    const toggleListening = () => {
        if (!recognitionRef.current) {
            alert("Speech recognition not supported in this browser.");
            return;
        }
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            setTranscript('');
            if (lesson) recognitionRef.current.lang = getLangCode(lesson.language);
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

    const speakText = (text, lang = null) => {
        if (!lesson) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang ? getLangCode(lang) : getLangCode(lesson.language);
        window.speechSynthesis.speak(utterance);
    };

    // Validation Logic
    const normalize = (str) => str?.toString().trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ") || "";

    // Simple Levenshtein for fuzzy match
    const levenshtein = (a, b) => {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) matrix[i] = [i];
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
                }
            }
        }
        return matrix[b.length][a.length];
    };
    const calculateSimilarity = (str1, str2) => {
        const s1 = normalize(str1);
        const s2 = normalize(str2);
        if (!s1 || !s2) return 0;
        const distance = levenshtein(s1, s2);
        const maxLength = Math.max(s1.length, s2.length);
        return ((maxLength - distance) / maxLength) * 100;
    };

    const handleCheck = () => {
        const currentQ = lesson.questions[currentQuestionIndex];
        let correct = false;

        switch (currentQ.type) {
            case 'multiple_choice':
            case 'multiple-choice':
                if (selectedOption === null) return;
                if (typeof currentQ.correctAnswer === 'number') {
                    correct = selectedOption === currentQ.correctAnswer;
                } else {
                    correct = normalize(String(currentQ.options[selectedOption])) === normalize(String(currentQ.correctAnswer));
                }
                break;
            case 'translate_text':
                correct = calculateSimilarity(textInput, currentQ.correctAnswer) >= 85;
                break;
            case 'speak_sentence':
            case 'listen_and_repeat':
                correct = calculateSimilarity(transcript, currentQ.expectedSpeech) >= 70;
                break;
            default: correct = false;
        }
        setIsCorrect(correct);
    };

    const handleNext = () => {
        if (currentQuestionIndex + 1 < lesson.questions.length) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setTextInput('');
            setTranscript('');
            setIsCorrect(null);
        } else {
            setCompleted(true);
            saveProgress();
        }
    };

    const saveProgress = async () => {
        const totalXp = lesson.questions.reduce((acc, q) => acc + (q.xp || 10), 0);
        try {
            const { data } = await api.post('/complete-lesson', {
                lessonId: lesson._id,
                xp: totalXp
            });
            // Update local context
            if (data.success) {
                refreshProfile({
                    xp: data.xp,
                    gems: data.gems
                });
            }
        } catch (err) {
            console.error("Failed to save progress", err);
        }
    };

    if (!lesson) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;

    if (completed) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4 animate-pop">
                <div className="mb-8 text-8xl animate-bounce">🎉</div>
                <h1 className="text-4xl font-extrabold text-warning mb-6 tracking-wide">Lesson Complete!</h1>
                <div className="flex gap-4 mb-10 text-xl font-bold text-muted-foreground">
                    <div className="bg-warning/10 px-6 py-4 rounded-2xl border-2 border-warning/20 flex flex-col items-center w-32">
                        <span className="text-warning text-sm uppercase font-extrabold mb-1">Total XP</span>
                        <span>+{lesson.questions.reduce((acc, q) => acc + (q.xp || 10), 0)}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-sm">
                    <button onClick={() => navigate('/ai-tutor')} className="w-full bg-card text-muted-foreground text-lg px-8 py-4 rounded-2xl font-extrabold uppercase tracking-widest border-2 border-border hover:bg-muted transition-all">
                        Back to AI Tutor
                    </button>
                    <button onClick={() => navigate('/')} className="w-full bg-primary text-primary-foreground text-lg px-8 py-4 rounded-2xl font-extrabold uppercase tracking-widest border-b-4 border-primary-hover hover:bg-primary-hover transition-all">
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    // Teaching Content Validation
    if (currentQuestionIndex === -1) {
        return (
            <div className="max-w-4xl mx-auto min-h-screen flex flex-col bg-background font-sans animate-slide-up">
                <div className="px-6 py-8 flex items-center gap-6">
                    <button onClick={() => navigate('/ai-tutor')} className="text-muted-foreground hover:text-foreground"><X size={24} /></button>
                    <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                        <div className="bg-primary h-4 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                </div>
                <div className="flex-1 px-6 md:px-20 lg:px-40 flex flex-col justify-start pb-32 pt-4">
                    <h2 className="text-3xl font-extrabold text-foreground mb-6 flex items-center gap-3">
                        <span className="text-4xl">🎓</span> Let's Learn First
                    </h2>
                    <div className="bg-primary/5 border-2 border-primary/20 rounded-3xl p-8 shadow-sm">
                        <div className="prose prose-lg max-w-none text-foreground whitespace-pre-wrap font-medium leading-relaxed">
                            {lesson.teachingContent}
                        </div>
                    </div>
                    <div className="flex justify-center mt-12 mb-12">
                        <button
                            onClick={() => setCurrentQuestionIndex(0)}
                            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-5 px-12 rounded-2xl text-xl shadow-xl border-b-4 border-primary-hover active:border-b-0 active:translate-y-1 transform transition flex items-center gap-3"
                        >
                            <span>I Understand, Start Practice</span> <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQ = lesson.questions[currentQuestionIndex];
    console.log('Rendering LessonPage. Index:', currentQuestionIndex, 'Lesson Questions:', lesson.questions);

    if (!lesson.questions || lesson.questions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h2 className="text-xl font-bold text-destructive mb-4">Error: No questions generated.</h2>
                <button onClick={() => navigate('/ai-tutor')} className="btn-primary">Go Back</button>
            </div>
        );
    }

    if (!currentQ) {
        console.error('Question not found at index:', currentQuestionIndex);
        return <div className="flex h-screen items-center justify-center gap-2"><Loader2 className="animate-spin" /> <span>Loading Question... (Index: {currentQuestionIndex})</span></div>;
    }

    const progress = ((currentQuestionIndex) / lesson.questions.length) * 100;
    const canCheck = (currentQ.type.includes('multiple') && selectedOption !== null) ||
        (currentQ.type === 'translate_text' && textInput.trim().length > 0) ||
        (currentQ.type.includes('speak') && transcript.length > 0);

    return (
        <div className="max-w-4xl mx-auto min-h-screen flex flex-col bg-background font-sans">
            <div className="px-6 py-8 flex items-center gap-6">
                <button onClick={() => navigate('/ai-tutor')} className="text-muted-foreground hover:text-foreground"><X size={24} /></button>
                <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                    <div className="bg-primary h-4 rounded-full transition-all duration-500 ease-out" style={{ width: `${Math.max(5, progress)}%` }}></div>
                </div>
            </div>

            <div className="flex-1 px-6 md:px-20 lg:px-40 flex flex-col justify-center pb-32">
                <div className="flex items-start gap-4 mb-10">
                    <button
                        onClick={() => speakText(currentQ.prompt || currentQ.question, 'English')}
                        className="mt-1 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        title="Read Question"
                    >
                        <Volume2 size={24} />
                    </button>
                    <h2 className="text-3xl font-extrabold text-foreground leading-normal">{currentQ.prompt || currentQ.question}</h2>
                </div>

                {/* Multiple Choice */}
                {(currentQ.type === 'multiple_choice' || currentQ.type === 'multiple-choice') && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentQ.options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => !isCorrect && setSelectedOption(idx)}
                                disabled={isCorrect !== null}
                                className={`p-6 rounded-2xl border-2 border-b-4 text-left font-bold text-lg transition-all
                                    ${selectedOption === idx
                                        ? isCorrect === null ? 'border-secondary/50 bg-secondary/10 text-secondary'
                                            : isCorrect && (currentQ.correctAnswer === option || currentQ.correctAnswer === idx)
                                                ? 'border-success bg-success/10 text-success'
                                                : 'border-destructive bg-destructive/10 text-destructive'
                                        : 'border-border hover:bg-muted text-foreground'
                                    }`}
                            >
                                <span className="mr-3 border-2 w-8 h-8 inline-flex items-center justify-center rounded-lg border-border/50">{idx + 1}</span>
                                {option}
                            </button>
                        ))}
                    </div>
                )}

                {/* Translate Text */}
                {currentQ.type === 'translate_text' && (
                    <textarea
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        disabled={isCorrect !== null}
                        placeholder={`Type in ${lesson.language}...`}
                        className="w-full p-6 text-xl border-2 border-border rounded-2xl focus:border-primary focus:outline-none resize-none bg-muted h-40 text-foreground"
                    />
                )}

                {/* Speak */}
                {(currentQ.type === 'speak_sentence' || currentQ.type === 'listen_and_repeat') && (
                    <div className="flex flex-col items-center">
                        {currentQ.type === 'listen_and_repeat' && (
                            <button onClick={() => speakText(currentQ.textToSpeak)} className="mb-8 bg-secondary p-4 rounded-2xl text-secondary-foreground shadow-lg border-b-4 border-secondary-foreground/20 active:border-b-0 active:translate-y-1">
                                <Volume2 size={32} />
                            </button>
                        )}
                        <button
                            onClick={toggleListening}
                            disabled={isCorrect !== null}
                            className={`w-32 h-32 rounded-full flex items-center justify-center border-b-8 transition-all
                                ${isListening ? 'bg-destructive border-destructive-foreground/20 animate-pulse text-destructive-foreground' : 'bg-card border-border text-primary hover:bg-muted active:border-b-0 active:translate-y-2'}`}
                        >
                            <Mic size={48} />
                        </button>
                        <div className="mt-8 min-h-[60px] text-2xl font-bold text-foreground text-center border-b-2 border-border pb-2 w-full">
                            {transcript || <span className="text-muted-foreground">Tap to speak...</span>}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className={`fixed bottom-0 left-0 w-full border-t-2 z-50 transition-colors duration-300 bg-background border-border`}>
                <div className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
                    {isCorrect !== null ? (
                        <div className="flex items-center gap-4 animate-slide-in-left">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-3xl ${isCorrect ? 'bg-success' : 'bg-destructive'}`}>
                                {isCorrect ? <Check /> : <X />}
                            </div>
                            <div>
                                <h3 className={`font-extrabold text-2xl ${isCorrect ? 'text-success' : 'text-destructive'}`}>{isCorrect ? 'Excellent!' : 'Correct Solution:'}</h3>
                                {!isCorrect && <p className="text-destructive font-bold">{currentQ.correctAnswer || currentQ.expectedSpeech}</p>}
                            </div>
                        </div>
                    ) : <div />}

                    <button
                        onClick={isCorrect !== null ? handleNext : handleCheck}
                        disabled={!canCheck}
                        className={`px-10 py-4 rounded-2xl font-extrabold text-white text-lg border-b-4 uppercase tracking-widest transition-all
                            ${!canCheck ? 'bg-muted text-muted-foreground border-border cursor-not-allowed'
                                : isCorrect !== null
                                    ? (isCorrect ? 'bg-success border-success-foreground/20' : 'bg-destructive border-destructive-foreground/20')
                                    : 'bg-success border-success-foreground/20 hover:bg-success/90 active:border-b-0 active:translate-y-1'
                            }`}
                    >
                        {isCorrect !== null ? 'Continue' : 'Check'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LessonPage;
