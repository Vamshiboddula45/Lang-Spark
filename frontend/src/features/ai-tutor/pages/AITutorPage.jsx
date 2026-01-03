import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/client';
import { useAuth } from '../../../contexts/AuthContext';
import { Loader2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LANG_CODES = {
    'Spanish': 'es',
    'French': 'fr',
    'German': 'de',
    'Italian': 'it',
    'Japanese': 'jp',
    'Chinese': 'zh'
};

const AITutorPage = () => {
    const navigate = useNavigate();
    const { user, refreshProfile } = useAuth();
    const [input, setInput] = useState('');
    const [level, setLevel] = useState('Beginner');
    const [mode, setMode] = useState('learn');
    const [languageCode, setLanguageCode] = useState('es');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user && user.learningLanguage) {
            setLanguageCode(user.learningLanguage);
        }
    }, [user]);

    const handleCreateLesson = async () => {
        if (!input.trim()) return;
        setLoading(true);
        try {
            const res = await api.post('/ai/lesson', {
                language: Object.keys(LANG_CODES).find(k => LANG_CODES[k] === languageCode) ||
                    (languageCode.length === 2 ? languageCode.toUpperCase() : languageCode),
                topic: input,
                level,
                mode
            });

            // Navigate to the NEW persisted lesson using its ID
            navigate(`/lesson/${res.data._id}`, { state: { lesson: res.data } });

        } catch (err) {
            console.error(err);
            alert("Failed to create lesson. Please try again.");
        }
        setLoading(false);
    };

    const handleLanguageChange = async (code) => {
        setLanguageCode(code);
        if (user) {
            // Optimistically update
            try {
                await api.post(`/user/${user.username}/language`, { language: code });
                refreshProfile({ learningLanguage: code });
            } catch (e) {
                console.error("Failed to sync language", e);
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen w-full max-w-4xl mx-auto pt-6 px-6 pb-20 font-sans animate-slide-in-right">
            <div className="flex items-center gap-4 mb-6">
                <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="hover:bg-muted">
                    <ArrowLeft className="w-6 h-6 text-muted-foreground" />
                </Button>
                <h1 className="text-3xl font-black text-foreground flex items-center gap-3">
                    <span className="text-4xl animate-pulse">✨</span> AI Tutor
                </h1>
            </div>

            <p className="text-lg text-muted-foreground font-bold mb-8 tracking-tight pl-14 -mt-4">
                Design your personalized language journey with AI.
            </p>

            <div className="bg-card rounded-[32px] p-8 border border-border card-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>

                {/* Language Selector */}
                <div className="mb-8">
                    <label className="block text-foreground font-black text-lg mb-4 uppercase tracking-widest pl-2">I want to learn...</label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {(user?.startedLanguages?.length ? user.startedLanguages : ['es', 'fr', 'de', 'it', 'jp']).map((code) => {
                            return code;
                        }).filter((v, i, a) => a.indexOf(v) === i).map((code) => {
                            const langNames = {
                                'es': 'Spanish', 'fr': 'French', 'de': 'German', 'it': 'Italian',
                                'jp': 'Japanese', 'zh': 'Chinese', 'ru': 'Russian', 'pt': 'Portuguese',
                                'ko': 'Korean', 'ar': 'Arabic'
                            };
                            const name = langNames[code] || code.toUpperCase();
                            const isActive = languageCode === code;
                            return (
                                <button
                                    key={code}
                                    onClick={() => handleLanguageChange(code)}
                                    className={`py-3 rounded-xl font-black transition-all border-b-4 uppercase tracking-widest text-[10px] md:text-xs
                                        ${isActive
                                            ? 'bg-primary text-primary-foreground border-primary-hover shadow-md scale-105 z-10'
                                            : 'bg-muted text-muted-foreground border-border hover:bg-muted/80'
                                        }`}
                                >
                                    {name}
                                </button>
                            );
                        })}
                        {!user?.startedLanguages?.includes('es') && <button onClick={() => handleLanguageChange('es')} className="py-3 rounded-xl font-black transition-all border-b-4 uppercase tracking-widest text-[10px] md:text-xs bg-muted text-muted-foreground border-border hover:bg-muted/80">Spanish</button>}
                    </div>
                </div>

                {/* Mode Selector */}
                <div className="mb-8">
                    <label className="block text-foreground font-black text-lg mb-4 uppercase tracking-widest pl-2">Choose your Path</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                            onClick={() => setMode('learn')}
                            className={`p-6 rounded-2xl border-2 text-left transition-all relative group/mode ${mode === 'learn' ? 'border-primary bg-primary/5 shadow-md' : 'border-border bg-card hover:border-primary/30'}`}
                        >
                            <span className="text-3xl block mb-3 group-hover/mode:scale-110 transition-transform">🧠</span>
                            <span className={`font-black text-lg block mb-1 ${mode === 'learn' ? 'text-primary' : 'text-foreground'}`}>Deep Learning</span>
                            <span className="text-muted-foreground text-xs font-bold leading-relaxed">Systematic mastery of grammar and vocabulary.</span>
                        </button>
                        <button
                            onClick={() => setMode('situational')}
                            className={`p-6 rounded-2xl border-2 text-left transition-all relative group/mode ${mode === 'situational' ? 'border-secondary bg-secondary/5 shadow-md' : 'border-border bg-card hover:border-secondary/30'}`}
                        >
                            <span className="text-3xl block mb-3 group-hover/mode:scale-110 transition-transform">✈️</span>
                            <span className={`font-black text-lg block mb-1 ${mode === 'situational' ? 'text-secondary' : 'text-foreground'}`}>Survival Mode</span>
                            <span className="text-muted-foreground text-xs font-bold leading-relaxed">Essential phrases for specific situations.</span>
                        </button>
                    </div>
                </div>

                <div className="mb-8">
                    <label className="block text-foreground font-black text-lg mb-4 uppercase tracking-widest pl-2">What's the focus?</label>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={mode === 'situational' ? "e.g. Asking for directions..." : "e.g. Past Tense, Food..."}
                        className="w-full bg-muted border-2 border-border rounded-2xl px-6 py-4 text-lg text-foreground focus:outline-none focus:border-primary/50 focus:bg-card transition-all font-bold placeholder:text-muted-foreground/70"
                    />
                </div>

                <div className="mb-10">
                    <label className="block text-foreground font-black text-lg mb-4 uppercase tracking-widest pl-2">Difficulty</label>
                    <div className="grid grid-cols-3 gap-4">
                        {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                            <button
                                key={lvl}
                                onClick={() => setLevel(lvl)}
                                className={`py-4 rounded-xl font-black text-xs uppercase tracking-widest border-b-4 transition-all
                                    ${level === lvl
                                        ? 'bg-accent text-accent-foreground border-yellow-600 shadow-md'
                                        : 'bg-muted text-muted-foreground border-border hover:bg-muted/80'
                                    }`}
                            >
                                {lvl}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleCreateLesson}
                    disabled={loading || !input.trim()}
                    className={`w-full py-6 rounded-2xl font-black text-xl tracking-widest uppercase border-b-8 transition-all relative overflow-hidden
                        ${loading || !input.trim()
                            ? 'bg-muted text-muted-foreground border-border cursor-not-allowed'
                            : 'bg-primary text-primary-foreground border-primary-hover hover:bg-primary-hover active:translate-y-2 active:border-b-0 shadow-xl hover-scale'
                        }`}
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-4 animate-pulse">
                            <Loader2 className="animate-spin w-6 h-6" /> Constructing...
                        </span>
                    ) : 'Initialize Lesson'}
                </button>
            </div>
        </div>
    );
};

export default AITutorPage;
