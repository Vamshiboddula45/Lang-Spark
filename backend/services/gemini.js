const { GoogleGenAI } = require("@google/genai");
const dotenv = require('dotenv');
dotenv.config();

let ai = null;

const initGemini = () => {
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({ key: process.env.GEMINI_API_KEY });
  } else {
    console.error("[Gemini] API Key MISSING in process.env");
  }
};

const generateLessonContent = async (language, topic, level = 'Beginner', mode = 'learn') => {
  if (!ai) initGemini();
  if (!ai) throw new Error("Gemini API Key not configured");

  const baseInstruction = `
    You are an AI Language Tutor similar to Duolingo.
    Target Language: ${language}
    Topic: ${topic}
    Level: ${level}
    Mode: ${mode === 'situational' ? 'situation' : 'learn'}

    CRITICAL RULES (MUST FOLLOW):
    1. NEVER ask a question before teaching.
    2. ALWAYS explain meanings, pronunciation, and usage in SIMPLE ENGLISH first.
    3. Teaching must come before practice.
    4. Output MUST be valid JSON only. No extra text.
    5. ALL instructions and explanations must be in ENGLISH.
  `;

  const learnModeRules = `
    LESSON MODE: "learn" (Full language learning)
    - Explain alphabet / basic words / grammar concepts.
    - Introduce words one by one.
    - Explain: Meaning, Pronunciation, Usage.
    
    If Level is Beginner:
    - Assume user knows NOTHING.
    - Use VERY simple English.
    - Do NOT test early.
  `;

  const situationModeRules = `
    LESSON MODE: "situation" (Emergency / Real-life)
    - Provide ready-to-use phrases for: ${topic}
    - Show English meaning clearly.
    - Focus on speaking and listening.
    - Do NOT teach deep grammar. 
    - Be fast and practical.
  `;

  const outputFormat = `
    OUTPUT FORMAT (STRICT JSON):
    Respond ONLY with valid JSON.
    
    REQUIRED JSON STRUCTURE:
    {
      "language": "${language}",
      "level": "${level}",
      "lessonTitle": "Creative Title",
      "lessonObjective": "Goal of the lesson",
      "estimatedTimeMinutes": 5,
      "teachingContent": "Markdown text explaining the lesson clearly in English. MUST BE DETAILED.",
      "questions": [
        {
          "id": 1,
          "type": "multiple_choice",
          "prompt": "Question prompt in English",
          "options": ["Option A", "Option B", "Option C", "Option D"],
          "correctAnswer": "Correct Option Text",
          "xp": 10
        },
        {
        {
          "id": 2,
          "type": "translate_text",
          "prompt": "Translate this to English: 'Hola'",
          "correctAnswer": "Hello",
          "xp": 15
        },
        {
          "id": 3,
          "type": "speak_sentence",
          "prompt": "Say this phrase:",
          "expectedSpeech": "Phrase in ${language}",
          "textToSpeak": "Phrase in ${language}",
          "xp": 20
        }
      ]
    }
  `;

  const systemPrompt = `
    ${baseInstruction}
    ${mode === 'situational' ? situationModeRules : learnModeRules}
    ${outputFormat}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "models/gemini-2.5-flash",
      contents: systemPrompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    let text = typeof response.text === 'function' ? response.text() : response.text;

    if (text) {
      text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    }

    const lessonData = JSON.parse(text);

    if (!lessonData.questions || !Array.isArray(lessonData.questions) || lessonData.questions.length === 0) {
      throw new Error("Invalid format: 'questions' array is missing or empty.");
    }

    const minLength = mode === 'situational' ? 100 : 300;
    if (!lessonData.teachingContent || lessonData.teachingContent.length < minLength) {
      throw new Error(`Teaching content too short for ${mode} mode.`);
    }

    return lessonData;
  } catch (err) {
    console.error("FULL GEMINI ERROR:", JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    throw new Error(`Failed to generate lesson content: ${err.message}`);
  }
};

const chatWithAI = async (message, language, history = []) => {
  if (!ai) initGemini();
  if (!ai) throw new Error("Gemini API Key not configured");

  const prompt = `You are a helpful language tutor teaching ${language}. 
    The user says: "${message}". 
    Reply naturally in ${language} to help them practice, then provide a brief English translation in parentheses.
    Keep it encouraging and simple.`;

  try {
    const response = await ai.models.generateContent({
      model: "models/gemini-2.5-flash",
      contents: prompt
    });
    return typeof response.text === 'function' ? response.text() : response.text;
  } catch (err) {
    console.error("Gemini Chat Error:", err);
    throw new Error("Failed to get chat response");
  }
};

module.exports = { generateLessonContent, chatWithAI };
