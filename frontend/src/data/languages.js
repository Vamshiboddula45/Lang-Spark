// JavaScript version - no type imports needed
import * as L2 from './level2-lessons';
import * as L3 from './level3-lessons';

export const languages = [
  { code: 'ar', name: 'Arabic', flag: '🇸🇦', nativeName: 'العربية' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳', nativeName: '中文' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱', nativeName: 'Nederlands' },
  { code: 'en-gb', name: 'English (UK)', flag: '🇬🇧', nativeName: 'English' },
  { code: 'en-us', name: 'English (US)', flag: '🇺🇸', nativeName: 'English' },
  { code: 'fr', name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'de', name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳', nativeName: 'हिन्दी' },
  { code: 'it', name: 'Italian', flag: '🇮🇹', nativeName: 'Italiano' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷', nativeName: '한국어' },
  { code: 'pt', name: 'Portuguese', flag: '🇧🇷', nativeName: 'Português' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺', nativeName: 'Русский' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
];

// ============ ENGLISH (US) LESSONS ============
const englishUSBasics = [
  { id: 'en-us-q1', type: 'multiple-choice', question: 'What is a common informal greeting?', options: ['Hey', 'Farewell', 'Thanks', 'Please'], correctAnswer: 'Hey', hint: 'Casual and friendly' },
  { id: 'en-us-q2', type: 'translation', question: 'Which phrase means "See you later"?', options: ['Hello', 'Catch you later', 'Good morning', 'Thank you'], correctAnswer: 'Catch you later' },
  { id: 'en-us-q3', type: 'speaking', question: 'Say "How are you doing?"', correctAnswer: 'how are you doing', spokenText: 'How are you doing?', hint: 'American casual greeting' },
  { id: 'en-us-q4', type: 'multiple-choice', question: 'What does "Awesome" mean?', options: ['Bad', 'Terrible', 'Great/Excellent', 'Okay'], correctAnswer: 'Great/Excellent' },
];

const englishUSNumbers = [
  { id: 'en-us-n1', type: 'multiple-choice', question: 'How do Americans say large numbers like 1,000,000?', options: ['A thousand thousand', 'One million', 'Ten hundred thousand', 'A big number'], correctAnswer: 'One million' },
  { id: 'en-us-n2', type: 'speaking', question: 'Say "Twenty-one"', correctAnswer: 'twenty one', spokenText: 'Twenty-one', hint: 'Two words combined' },
  { id: 'en-us-n3', type: 'translation', question: 'What is "a dozen"?', options: ['Ten', 'Twelve', 'Twenty', 'Hundred'], correctAnswer: 'Twelve' },
  { id: 'en-us-n4', type: 'speaking', question: 'Say "One hundred"', correctAnswer: 'one hundred', spokenText: 'One hundred', hint: 'Clear pronunciation' },
];

const englishUSFood = [
  { id: 'en-us-f1', type: 'multiple-choice', question: 'What are "fries" in American English?', options: ['Chips', 'French fries', 'Crisps', 'Wedges'], correctAnswer: 'French fries' },
  { id: 'en-us-f2', type: 'speaking', question: 'Say "Hamburger"', correctAnswer: 'hamburger', spokenText: 'Hamburger', hint: 'Popular American food' },
  { id: 'en-us-f3', type: 'multiple-choice', question: 'What is "soda" in American English?', options: ['Water', 'Juice', 'Soft drink/Pop', 'Milk'], correctAnswer: 'Soft drink/Pop' },
];

const englishUSSpeaking = [
  { id: 'en-us-sp1', type: 'speaking', question: 'Say "What\'s up?"', correctAnswer: 'whats up', spokenText: 'What\'s up?', hint: 'Very casual American greeting' },
  { id: 'en-us-sp2', type: 'speaking', question: 'Say "I\'m doing great"', correctAnswer: 'im doing great', spokenText: 'I\'m doing great', hint: 'Positive response' },
  { id: 'en-us-sp3', type: 'speaking', question: 'Say "Nice to meet you"', correctAnswer: 'nice to meet you', spokenText: 'Nice to meet you', hint: 'Formal introduction' },
  { id: 'en-us-sp4', type: 'speaking', question: 'Say "Have a nice day"', correctAnswer: 'have a nice day', spokenText: 'Have a nice day', hint: 'Friendly farewell' },
];

// ============ ENGLISH (UK) LESSONS ============
const englishUKBasics = [
  { id: 'en-gb-q1', type: 'multiple-choice', question: 'What is a common British greeting?', options: ['Hiya', 'Howdy', 'Aloha', 'Ciao'], correctAnswer: 'Hiya', hint: 'Informal British hello' },
  { id: 'en-gb-q2', type: 'translation', question: 'What does "Cheers" mean in British English?', options: ['Goodbye only', 'Thank you/Goodbye', 'Hello', 'Sorry'], correctAnswer: 'Thank you/Goodbye' },
  { id: 'en-gb-q3', type: 'speaking', question: 'Say "How do you do?"', correctAnswer: 'how do you do', spokenText: 'How do you do?', hint: 'Formal British greeting' },
  { id: 'en-gb-q4', type: 'multiple-choice', question: 'What does "Brilliant" mean?', options: ['Bad', 'Shiny', 'Excellent/Great', 'Okay'], correctAnswer: 'Excellent/Great' },
];

const englishUKNumbers = [
  { id: 'en-gb-n1', type: 'multiple-choice', question: 'How do British people say 0 in phone numbers?', options: ['Zero', 'Oh', 'Nil', 'Nought'], correctAnswer: 'Oh' },
  { id: 'en-gb-n2', type: 'speaking', question: 'Say "Fortnight" (14 days)', correctAnswer: 'fortnight', spokenText: 'Fortnight', hint: 'British term for two weeks' },
  { id: 'en-gb-n3', type: 'translation', question: 'What is "a quid"?', options: ['One dollar', 'One pound', 'One euro', 'One penny'], correctAnswer: 'One pound' },
  { id: 'en-gb-n4', type: 'speaking', question: 'Say "Half past three"', correctAnswer: 'half past three', spokenText: 'Half past three', hint: 'British way to tell time' },
];

const englishUKFood = [
  { id: 'en-gb-f1', type: 'multiple-choice', question: 'What are "chips" in British English?', options: ['Crisps', 'French fries', 'Cookies', 'Candy'], correctAnswer: 'French fries' },
  { id: 'en-gb-f2', type: 'speaking', question: 'Say "Biscuit"', correctAnswer: 'biscuit', spokenText: 'Biscuit', hint: 'British word for cookie' },
  { id: 'en-gb-f3', type: 'multiple-choice', question: 'What is a "cuppa" in British English?', options: ['Coffee', 'Cup of tea', 'Soda', 'Water'], correctAnswer: 'Cup of tea' },
];

const englishUKSpeaking = [
  { id: 'en-gb-sp1', type: 'speaking', question: 'Say "Lovely to meet you"', correctAnswer: 'lovely to meet you', spokenText: 'Lovely to meet you', hint: 'Polite British introduction' },
  { id: 'en-gb-sp2', type: 'speaking', question: 'Say "Sorry to bother you"', correctAnswer: 'sorry to bother you', spokenText: 'Sorry to bother you', hint: 'Polite British phrase' },
  { id: 'en-gb-sp3', type: 'speaking', question: 'Say "Cheerio"', correctAnswer: 'cheerio', spokenText: 'Cheerio', hint: 'British goodbye' },
  { id: 'en-gb-sp4', type: 'speaking', question: 'Say "Fancy a cuppa?"', correctAnswer: 'fancy a cuppa', spokenText: 'Fancy a cuppa?', hint: 'Would you like tea?' },
];

// ============ SPANISH LESSONS ============
const spanishBasics = [
  { id: 'es-q1', type: 'multiple-choice', question: 'How do you say "Hello" in Spanish?', options: ['Hola', 'Adiós', 'Gracias', 'Por favor'], correctAnswer: 'Hola', hint: 'A common greeting' },
  { id: 'es-q2', type: 'translation', question: 'Translate: "Good morning"', options: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hasta luego'], correctAnswer: 'Buenos días' },
  { id: 'es-q3', type: 'speaking', question: 'Say "Hola" (Hello)', correctAnswer: 'hola', spokenText: 'Hola', hint: 'Speak clearly into your microphone' },
  { id: 'es-q4', type: 'multiple-choice', question: 'What does "Gracias" mean?', options: ['Please', 'Sorry', 'Thank you', 'Goodbye'], correctAnswer: 'Thank you' },
];

const spanishNumbers = [
  { id: 'es-n1', type: 'multiple-choice', question: 'What is "one" in Spanish?', options: ['Dos', 'Uno', 'Tres', 'Cuatro'], correctAnswer: 'Uno' },
  { id: 'es-n2', type: 'speaking', question: 'Say "Cinco" (Five)', correctAnswer: 'cinco', spokenText: 'Cinco', hint: 'Pronounced "SEEN-koh"' },
  { id: 'es-n3', type: 'translation', question: 'Translate: "Ten"', options: ['Ocho', 'Nueve', 'Diez', 'Once'], correctAnswer: 'Diez' },
  { id: 'es-n4', type: 'multiple-choice', question: 'What is "seven" in Spanish?', options: ['Seis', 'Siete', 'Ocho', 'Nueve'], correctAnswer: 'Siete' },
];

const spanishFood = [
  { id: 'es-f1', type: 'multiple-choice', question: 'How do you say "water" in Spanish?', options: ['Leche', 'Agua', 'Jugo', 'Café'], correctAnswer: 'Agua' },
  { id: 'es-f2', type: 'speaking', question: 'Say "Manzana" (Apple)', correctAnswer: 'manzana', spokenText: 'Manzana', hint: 'Pronounced "man-SAH-nah"' },
  { id: 'es-f3', type: 'multiple-choice', question: 'What does "Pan" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const spanishSpeaking = [
  { id: 'es-sp1', type: 'speaking', question: 'Say "Buenos días" (Good morning)', correctAnswer: 'buenos dias', spokenText: 'Buenos días', hint: 'Pronounced "BWEH-nohs DEE-ahs"' },
  { id: 'es-sp2', type: 'speaking', question: 'Say "Por favor" (Please)', correctAnswer: 'por favor', spokenText: 'Por favor', hint: 'Pronounced "por fah-VOR"' },
  { id: 'es-sp3', type: 'speaking', question: 'Say "¿Cómo estás?" (How are you?)', correctAnswer: 'como estas', spokenText: '¿Cómo estás?', hint: 'Pronounced "KOH-moh ehs-TAHS"' },
  { id: 'es-sp4', type: 'speaking', question: 'Say "Me llamo" (My name is)', correctAnswer: 'me llamo', spokenText: 'Me llamo', hint: 'Pronounced "meh YAH-moh"' },
];

// ============ FRENCH LESSONS ============
const frenchBasics = [
  { id: 'fr-q1', type: 'multiple-choice', question: 'How do you say "Hello" in French?', options: ['Bonjour', 'Au revoir', 'Merci', 'S\'il vous plaît'], correctAnswer: 'Bonjour', hint: 'A common greeting' },
  { id: 'fr-q2', type: 'translation', question: 'Translate: "Good evening"', options: ['Bonjour', 'Bonsoir', 'Bonne nuit', 'Salut'], correctAnswer: 'Bonsoir' },
  { id: 'fr-q3', type: 'speaking', question: 'Say "Bonjour" (Hello)', correctAnswer: 'bonjour', spokenText: 'Bonjour', hint: 'Speak clearly into your microphone' },
  { id: 'fr-q4', type: 'multiple-choice', question: 'What does "Merci" mean?', options: ['Please', 'Sorry', 'Thank you', 'Goodbye'], correctAnswer: 'Thank you' },
];

const frenchNumbers = [
  { id: 'fr-n1', type: 'multiple-choice', question: 'What is "one" in French?', options: ['Deux', 'Un', 'Trois', 'Quatre'], correctAnswer: 'Un' },
  { id: 'fr-n2', type: 'speaking', question: 'Say "Cinq" (Five)', correctAnswer: 'cinq', spokenText: 'Cinq', hint: 'Pronounced "sank"' },
  { id: 'fr-n3', type: 'translation', question: 'Translate: "Ten"', options: ['Huit', 'Neuf', 'Dix', 'Onze'], correctAnswer: 'Dix' },
  { id: 'fr-n4', type: 'multiple-choice', question: 'What is "three" in French?', options: ['Un', 'Deux', 'Trois', 'Quatre'], correctAnswer: 'Trois' },
];

const frenchFood = [
  { id: 'fr-f1', type: 'multiple-choice', question: 'How do you say "water" in French?', options: ['Lait', 'Eau', 'Jus', 'Café'], correctAnswer: 'Eau' },
  { id: 'fr-f2', type: 'speaking', question: 'Say "Pomme" (Apple)', correctAnswer: 'pomme', spokenText: 'Pomme', hint: 'Pronounced "pom"' },
  { id: 'fr-f3', type: 'multiple-choice', question: 'What does "Pain" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const frenchSpeaking = [
  { id: 'fr-sp1', type: 'speaking', question: 'Say "Bonsoir" (Good evening)', correctAnswer: 'bonsoir', spokenText: 'Bonsoir', hint: 'Pronounced "bohn-SWAHR"' },
  { id: 'fr-sp2', type: 'speaking', question: 'Say "S\'il vous plaît" (Please)', correctAnswer: 'sil vous plait', spokenText: 'S\'il vous plaît', hint: 'Pronounced "seel voo PLEH"' },
  { id: 'fr-sp3', type: 'speaking', question: 'Say "Comment ça va?" (How are you?)', correctAnswer: 'comment ca va', spokenText: 'Comment ça va?', hint: 'Pronounced "koh-MAHN sah VAH"' },
  { id: 'fr-sp4', type: 'speaking', question: 'Say "Je m\'appelle" (My name is)', correctAnswer: 'je mappelle', spokenText: 'Je m\'appelle', hint: 'Pronounced "zhuh mah-PEL"' },
];

// ============ GERMAN LESSONS ============
const germanBasics = [
  { id: 'de-q1', type: 'multiple-choice', question: 'How do you say "Hello" in German?', options: ['Hallo', 'Tschüss', 'Danke', 'Bitte'], correctAnswer: 'Hallo', hint: 'Similar to English!' },
  { id: 'de-q2', type: 'translation', question: 'Translate: "Good morning"', options: ['Gute Nacht', 'Guten Morgen', 'Guten Abend', 'Auf Wiedersehen'], correctAnswer: 'Guten Morgen' },
  { id: 'de-q3', type: 'speaking', question: 'Say "Hallo" (Hello)', correctAnswer: 'hallo', spokenText: 'Hallo', hint: 'Speak clearly into your microphone' },
  { id: 'de-q4', type: 'multiple-choice', question: 'What does "Danke" mean?', options: ['Please', 'Sorry', 'Thank you', 'Goodbye'], correctAnswer: 'Thank you' },
];

const germanNumbers = [
  { id: 'de-n1', type: 'multiple-choice', question: 'What is "one" in German?', options: ['Zwei', 'Eins', 'Drei', 'Vier'], correctAnswer: 'Eins' },
  { id: 'de-n2', type: 'speaking', question: 'Say "Fünf" (Five)', correctAnswer: 'fünf', spokenText: 'Fünf', hint: 'Pronounced "foonf"' },
  { id: 'de-n3', type: 'translation', question: 'Translate: "Ten"', options: ['Acht', 'Neun', 'Zehn', 'Elf'], correctAnswer: 'Zehn' },
  { id: 'de-n4', type: 'multiple-choice', question: 'What is "four" in German?', options: ['Eins', 'Zwei', 'Drei', 'Vier'], correctAnswer: 'Vier' },
];

const germanFood = [
  { id: 'de-f1', type: 'multiple-choice', question: 'How do you say "water" in German?', options: ['Milch', 'Wasser', 'Saft', 'Kaffee'], correctAnswer: 'Wasser' },
  { id: 'de-f2', type: 'speaking', question: 'Say "Apfel" (Apple)', correctAnswer: 'apfel', spokenText: 'Apfel', hint: 'Pronounced "AHP-fel"' },
  { id: 'de-f3', type: 'multiple-choice', question: 'What does "Brot" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const germanSpeaking = [
  { id: 'de-sp1', type: 'speaking', question: 'Say "Guten Tag" (Good day)', correctAnswer: 'guten tag', spokenText: 'Guten Tag', hint: 'Pronounced "GOO-ten TAHK"' },
  { id: 'de-sp2', type: 'speaking', question: 'Say "Bitte" (Please)', correctAnswer: 'bitte', spokenText: 'Bitte', hint: 'Pronounced "BIT-teh"' },
  { id: 'de-sp3', type: 'speaking', question: 'Say "Wie geht es dir?" (How are you?)', correctAnswer: 'wie geht es dir', spokenText: 'Wie geht es dir?', hint: 'Pronounced "vee GAYT es deer"' },
  { id: 'de-sp4', type: 'speaking', question: 'Say "Ich heiße" (My name is)', correctAnswer: 'ich heisse', spokenText: 'Ich heiße', hint: 'Pronounced "ikh HY-seh"' },
];

// ============ ITALIAN LESSONS ============
const italianBasics = [
  { id: 'it-q1', type: 'multiple-choice', question: 'How do you say "Hello" in Italian?', options: ['Ciao', 'Arrivederci', 'Grazie', 'Prego'], correctAnswer: 'Ciao', hint: 'A casual greeting' },
  { id: 'it-q2', type: 'translation', question: 'Translate: "Good morning"', options: ['Buona notte', 'Buongiorno', 'Buona sera', 'Addio'], correctAnswer: 'Buongiorno' },
  { id: 'it-q3', type: 'speaking', question: 'Say "Ciao" (Hello)', correctAnswer: 'ciao', spokenText: 'Ciao', hint: 'Pronounced "chow"' },
  { id: 'it-q4', type: 'multiple-choice', question: 'What does "Grazie" mean?', options: ['Please', 'Sorry', 'Thank you', 'Goodbye'], correctAnswer: 'Thank you' },
];

const italianNumbers = [
  { id: 'it-n1', type: 'multiple-choice', question: 'What is "one" in Italian?', options: ['Due', 'Uno', 'Tre', 'Quattro'], correctAnswer: 'Uno' },
  { id: 'it-n2', type: 'speaking', question: 'Say "Cinque" (Five)', correctAnswer: 'cinque', spokenText: 'Cinque', hint: 'Pronounced "CHEEN-kweh"' },
  { id: 'it-n3', type: 'translation', question: 'Translate: "Ten"', options: ['Otto', 'Nove', 'Dieci', 'Undici'], correctAnswer: 'Dieci' },
  { id: 'it-n4', type: 'multiple-choice', question: 'What is "three" in Italian?', options: ['Uno', 'Due', 'Tre', 'Quattro'], correctAnswer: 'Tre' },
];

const italianFood = [
  { id: 'it-f1', type: 'multiple-choice', question: 'How do you say "water" in Italian?', options: ['Latte', 'Acqua', 'Succo', 'Caffè'], correctAnswer: 'Acqua' },
  { id: 'it-f2', type: 'speaking', question: 'Say "Mela" (Apple)', correctAnswer: 'mela', spokenText: 'Mela', hint: 'Pronounced "MEH-lah"' },
  { id: 'it-f3', type: 'multiple-choice', question: 'What does "Pane" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const italianSpeaking = [
  { id: 'it-sp1', type: 'speaking', question: 'Say "Buongiorno" (Good morning)', correctAnswer: 'buongiorno', spokenText: 'Buongiorno', hint: 'Pronounced "bwohn-JOHR-noh"' },
  { id: 'it-sp2', type: 'speaking', question: 'Say "Per favore" (Please)', correctAnswer: 'per favore', spokenText: 'Per favore', hint: 'Pronounced "pehr fah-VOH-reh"' },
  { id: 'it-sp3', type: 'speaking', question: 'Say "Come stai?" (How are you?)', correctAnswer: 'come stai', spokenText: 'Come stai?', hint: 'Pronounced "KOH-meh STAH-ee"' },
  { id: 'it-sp4', type: 'speaking', question: 'Say "Mi chiamo" (My name is)', correctAnswer: 'mi chiamo', spokenText: 'Mi chiamo', hint: 'Pronounced "mee KYAH-moh"' },
];

// ============ PORTUGUESE LESSONS ============
const portugueseBasics = [
  { id: 'pt-q1', type: 'multiple-choice', question: 'How do you say "Hello" in Portuguese?', options: ['Olá', 'Tchau', 'Obrigado', 'Por favor'], correctAnswer: 'Olá', hint: 'A common greeting' },
  { id: 'pt-q2', type: 'translation', question: 'Translate: "Good morning"', options: ['Boa noite', 'Bom dia', 'Boa tarde', 'Até logo'], correctAnswer: 'Bom dia' },
  { id: 'pt-q3', type: 'speaking', question: 'Say "Olá" (Hello)', correctAnswer: 'olá', spokenText: 'Olá', hint: 'Speak clearly into your microphone' },
  { id: 'pt-q4', type: 'multiple-choice', question: 'What does "Obrigado" mean?', options: ['Please', 'Sorry', 'Thank you', 'Goodbye'], correctAnswer: 'Thank you' },
];

const portugueseNumbers = [
  { id: 'pt-n1', type: 'multiple-choice', question: 'What is "one" in Portuguese?', options: ['Dois', 'Um', 'Três', 'Quatro'], correctAnswer: 'Um' },
  { id: 'pt-n2', type: 'speaking', question: 'Say "Cinco" (Five)', correctAnswer: 'cinco', spokenText: 'Cinco', hint: 'Pronounced "SEEN-koo"' },
  { id: 'pt-n3', type: 'translation', question: 'Translate: "Ten"', options: ['Oito', 'Nove', 'Dez', 'Onze'], correctAnswer: 'Dez' },
  { id: 'pt-n4', type: 'multiple-choice', question: 'What is "three" in Portuguese?', options: ['Um', 'Dois', 'Três', 'Quatro'], correctAnswer: 'Três' },
];

const portugueseFood = [
  { id: 'pt-f1', type: 'multiple-choice', question: 'How do you say "water" in Portuguese?', options: ['Leite', 'Água', 'Suco', 'Café'], correctAnswer: 'Água' },
  { id: 'pt-f2', type: 'speaking', question: 'Say "Maçã" (Apple)', correctAnswer: 'maçã', spokenText: 'Maçã', hint: 'Pronounced "mah-SAHN"' },
  { id: 'pt-f3', type: 'multiple-choice', question: 'What does "Pão" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const portugueseSpeaking = [
  { id: 'pt-sp1', type: 'speaking', question: 'Say "Bom dia" (Good morning)', correctAnswer: 'bom dia', spokenText: 'Bom dia', hint: 'Pronounced "bohn DEE-ah"' },
  { id: 'pt-sp2', type: 'speaking', question: 'Say "Por favor" (Please)', correctAnswer: 'por favor', spokenText: 'Por favor', hint: 'Pronounced "por fah-VOR"' },
  { id: 'pt-sp3', type: 'speaking', question: 'Say "Como vai você?" (How are you?)', correctAnswer: 'como vai voce', spokenText: 'Como vai você?', hint: 'Pronounced "KOH-moo vai voh-SAY"' },
  { id: 'pt-sp4', type: 'speaking', question: 'Say "Eu me chamo" (My name is)', correctAnswer: 'eu me chamo', spokenText: 'Eu me chamo', hint: 'Pronounced "eh-oo meh SHAH-moo"' },
];

// ============ JAPANESE LESSONS ============
const japaneseBasics = [
  { id: 'ja-q1', type: 'multiple-choice', question: 'How do you say "Hello" in Japanese?', options: ['こんにちは', 'さようなら', 'ありがとう', 'すみません'], correctAnswer: 'こんにちは', hint: 'Konnichiwa' },
  { id: 'ja-q2', type: 'translation', question: 'Translate: "Good morning"', options: ['こんばんは', 'おはようございます', 'おやすみなさい', 'さようなら'], correctAnswer: 'おはようございます' },
  { id: 'ja-q3', type: 'speaking', question: 'Say "Arigatou" (Thank you)', correctAnswer: 'arigatou', spokenText: 'ありがとう', hint: 'Pronounced "ah-ree-GAH-toh"' },
  { id: 'ja-q4', type: 'multiple-choice', question: 'What does "ありがとう" mean?', options: ['Please', 'Sorry', 'Thank you', 'Goodbye'], correctAnswer: 'Thank you' },
];

const japaneseNumbers = [
  { id: 'ja-n1', type: 'multiple-choice', question: 'What is "one" in Japanese?', options: ['に', 'いち', 'さん', 'よん'], correctAnswer: 'いち' },
  { id: 'ja-n2', type: 'speaking', question: 'Say "Ichi" (One)', correctAnswer: 'ichi', spokenText: 'いち', hint: 'Pronounced "ee-chee"' },
  { id: 'ja-n3', type: 'speaking', question: 'Say "Go" (Five)', correctAnswer: 'go', spokenText: 'ご', hint: 'Pronounced like English "go"' },
  { id: 'ja-n4', type: 'translation', question: 'Translate: "Ten"', options: ['はち', 'きゅう', 'じゅう', 'ろく'], correctAnswer: 'じゅう' },
];

const japaneseFood = [
  { id: 'ja-f1', type: 'multiple-choice', question: 'How do you say "water" in Japanese?', options: ['牛乳', '水', 'ジュース', 'コーヒー'], correctAnswer: '水' },
  { id: 'ja-f2', type: 'speaking', question: 'Say "Ringo" (Apple)', correctAnswer: 'ringo', spokenText: 'りんご', hint: 'Pronounced "reen-goh"' },
  { id: 'ja-f3', type: 'multiple-choice', question: 'What does "パン" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const japaneseSpeaking = [
  { id: 'ja-sp1', type: 'speaking', question: 'Say "Ohayou gozaimasu" (Good morning)', correctAnswer: 'ohayou gozaimasu', spokenText: 'おはようございます', hint: 'Pronounced "oh-hah-YOH goh-zah-ee-MAHS"' },
  { id: 'ja-sp2', type: 'speaking', question: 'Say "Sumimasen" (Excuse me)', correctAnswer: 'sumimasen', spokenText: 'すみません', hint: 'Pronounced "soo-mee-mah-SEN"' },
  { id: 'ja-sp3', type: 'speaking', question: 'Say "Sayounara" (Goodbye)', correctAnswer: 'sayounara', spokenText: 'さようなら', hint: 'Pronounced "sah-yoh-NAH-rah"' },
  { id: 'ja-sp4', type: 'speaking', question: 'Say "Watashi wa" (I am)', correctAnswer: 'watashi wa', spokenText: 'わたしは', hint: 'Pronounced "wah-TAH-shee wah"' },
];

// ============ KOREAN LESSONS ============
const koreanBasics = [
  { id: 'ko-q1', type: 'multiple-choice', question: 'How do you say "Hello" in Korean?', options: ['안녕하세요', '감사합니다', '미안합니다', '잘가요'], correctAnswer: '안녕하세요', hint: 'Annyeonghaseyo' },
  { id: 'ko-q2', type: 'speaking', question: 'Say "Annyeong" (Hi, informal)', correctAnswer: 'annyeong', spokenText: '안녕', hint: 'Pronounced "ahn-nyeong"' },
  { id: 'ko-q3', type: 'translation', question: 'Translate: "Thank you"', options: ['미안해요', '감사합니다', '안녕히 계세요', '네'], correctAnswer: '감사합니다' },
  { id: 'ko-q4', type: 'multiple-choice', question: 'What does "네" mean?', options: ['No', 'Yes', 'Maybe', 'Hello'], correctAnswer: 'Yes' },
];

const koreanNumbers = [
  { id: 'ko-n1', type: 'multiple-choice', question: 'What is "one" in Korean (Sino-Korean)?', options: ['이', '일', '삼', '사'], correctAnswer: '일' },
  { id: 'ko-n2', type: 'speaking', question: 'Say "Hana" (One, native Korean)', correctAnswer: 'hana', spokenText: '하나', hint: 'Pronounced "hah-nah"' },
  { id: 'ko-n3', type: 'speaking', question: 'Say "O" (Five)', correctAnswer: 'o', spokenText: '오', hint: 'Pronounced like "oh"' },
  { id: 'ko-n4', type: 'translation', question: 'Translate: "Ten"', options: ['팔', '구', '십', '육'], correctAnswer: '십' },
];

const koreanFood = [
  { id: 'ko-f1', type: 'multiple-choice', question: 'How do you say "water" in Korean?', options: ['우유', '물', '주스', '커피'], correctAnswer: '물' },
  { id: 'ko-f2', type: 'speaking', question: 'Say "Sagwa" (Apple)', correctAnswer: 'sagwa', spokenText: '사과', hint: 'Pronounced "sah-gwah"' },
  { id: 'ko-f3', type: 'multiple-choice', question: 'What does "빵" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const koreanSpeaking = [
  { id: 'ko-sp1', type: 'speaking', question: 'Say "Annyeonghaseyo" (Hello, formal)', correctAnswer: 'annyeonghaseyo', spokenText: '안녕하세요', hint: 'Pronounced "ahn-nyeong-hah-SAY-yo"' },
  { id: 'ko-sp2', type: 'speaking', question: 'Say "Kamsahamnida" (Thank you)', correctAnswer: 'kamsahamnida', spokenText: '감사합니다', hint: 'Pronounced "kahm-sah-hahm-nee-da"' },
  { id: 'ko-sp3', type: 'speaking', question: 'Say "Annyeonghi gaseyo" (Goodbye)', correctAnswer: 'annyeonghi gaseyo', spokenText: '안녕히 가세요', hint: 'Pronounced "ahn-nyeong-hee gah-SAY-yo"' },
  { id: 'ko-sp4', type: 'speaking', question: 'Say "Jeoneun" (I am...)', correctAnswer: 'jeoneun', spokenText: '저는', hint: 'Pronounced "juh-NOON"' },
];

// ============ CHINESE LESSONS ============
const chineseBasics = [
  { id: 'zh-q1', type: 'multiple-choice', question: 'How do you say "Hello" in Chinese?', options: ['你好', '再见', '谢谢', '对不起'], correctAnswer: '你好', hint: 'Nǐ hǎo' },
  { id: 'zh-q2', type: 'speaking', question: 'Say "Ni hao" (Hello)', correctAnswer: 'ni hao', spokenText: '你好', hint: 'Pronounced "nee how"' },
  { id: 'zh-q3', type: 'translation', question: 'Translate: "Thank you"', options: ['对不起', '谢谢', '再见', '你好'], correctAnswer: '谢谢' },
  { id: 'zh-q4', type: 'multiple-choice', question: 'What does "再见" mean?', options: ['Hello', 'Please', 'Sorry', 'Goodbye'], correctAnswer: 'Goodbye' },
];

const chineseNumbers = [
  { id: 'zh-n1', type: 'multiple-choice', question: 'What is "one" in Chinese?', options: ['二', '一', '三', '四'], correctAnswer: '一' },
  { id: 'zh-n2', type: 'speaking', question: 'Say "Yi" (One)', correctAnswer: 'yi', spokenText: '一', hint: 'Pronounced "ee"' },
  { id: 'zh-n3', type: 'speaking', question: 'Say "Wu" (Five)', correctAnswer: 'wu', spokenText: '五', hint: 'Pronounced "woo"' },
  { id: 'zh-n4', type: 'translation', question: 'Translate: "Ten"', options: ['八', '九', '十', '六'], correctAnswer: '十' },
];

const chineseFood = [
  { id: 'zh-f1', type: 'multiple-choice', question: 'How do you say "water" in Chinese?', options: ['牛奶', '水', '果汁', '咖啡'], correctAnswer: '水' },
  { id: 'zh-f2', type: 'speaking', question: 'Say "Pingguo" (Apple)', correctAnswer: 'pingguo', spokenText: '苹果', hint: 'Pronounced "ping-gwoh"' },
  { id: 'zh-f3', type: 'multiple-choice', question: 'What does "面包" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const chineseSpeaking = [
  { id: 'zh-sp1', type: 'speaking', question: 'Say "Zao shang hao" (Good morning)', correctAnswer: 'zao shang hao', spokenText: '早上好', hint: 'Pronounced "zow shahng how"' },
  { id: 'zh-sp2', type: 'speaking', question: 'Say "Xie xie" (Thank you)', correctAnswer: 'xie xie', spokenText: '谢谢', hint: 'Pronounced "shyeh shyeh"' },
  { id: 'zh-sp3', type: 'speaking', question: 'Say "Qing" (Please)', correctAnswer: 'qing', spokenText: '请', hint: 'Pronounced "ching"' },
  { id: 'zh-sp4', type: 'speaking', question: 'Say "Wo jiao" (My name is)', correctAnswer: 'wo jiao', spokenText: '我叫', hint: 'Pronounced "woh jee-ow"' },
];

// ============ RUSSIAN LESSONS ============
const russianBasics = [
  { id: 'ru-q1', type: 'multiple-choice', question: 'How do you say "Hello" in Russian?', options: ['Привет', 'Пока', 'Спасибо', 'Извините'], correctAnswer: 'Привет', hint: 'Privet' },
  { id: 'ru-q2', type: 'speaking', question: 'Say "Privet" (Hi)', correctAnswer: 'privet', spokenText: 'Привет', hint: 'Pronounced "pree-vyet"' },
  { id: 'ru-q3', type: 'translation', question: 'Translate: "Thank you"', options: ['Пожалуйста', 'Спасибо', 'До свидания', 'Да'], correctAnswer: 'Спасибо' },
  { id: 'ru-q4', type: 'multiple-choice', question: 'What does "Да" mean?', options: ['No', 'Yes', 'Maybe', 'Please'], correctAnswer: 'Yes' },
];

const russianNumbers = [
  { id: 'ru-n1', type: 'multiple-choice', question: 'What is "one" in Russian?', options: ['Два', 'Один', 'Три', 'Четыре'], correctAnswer: 'Один' },
  { id: 'ru-n2', type: 'speaking', question: 'Say "Odin" (One)', correctAnswer: 'odin', spokenText: 'Один', hint: 'Pronounced "ah-DEEN"' },
  { id: 'ru-n3', type: 'speaking', question: 'Say "Pyat" (Five)', correctAnswer: 'pyat', spokenText: 'Пять', hint: 'Pronounced "pyaht"' },
  { id: 'ru-n4', type: 'translation', question: 'Translate: "Ten"', options: ['Восемь', 'Девять', 'Десять', 'Шесть'], correctAnswer: 'Десять' },
];

const russianFood = [
  { id: 'ru-f1', type: 'multiple-choice', question: 'How do you say "water" in Russian?', options: ['Молоко', 'Вода', 'Сок', 'Кофе'], correctAnswer: 'Вода' },
  { id: 'ru-f2', type: 'speaking', question: 'Say "Yabloko" (Apple)', correctAnswer: 'yabloko', spokenText: 'Яблоко', hint: 'Pronounced "YAH-bluh-kuh"' },
  { id: 'ru-f3', type: 'multiple-choice', question: 'What does "Хлеб" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const russianSpeaking = [
  { id: 'ru-sp1', type: 'speaking', question: 'Say "Dobroye utro" (Good morning)', correctAnswer: 'dobroye utro', spokenText: 'Доброе утро', hint: 'Pronounced "DOHB-ruh-yeh OO-truh"' },
  { id: 'ru-sp2', type: 'speaking', question: 'Say "Spasibo" (Thank you)', correctAnswer: 'spasibo', spokenText: 'Спасибо', hint: 'Pronounced "spah-SEE-bah"' },
  { id: 'ru-sp3', type: 'speaking', question: 'Say "Pozhaluysta" (Please)', correctAnswer: 'pozhaluysta', spokenText: 'Пожалуйста', hint: 'Pronounced "pah-ZHAH-loo-stah"' },
  { id: 'ru-sp4', type: 'speaking', question: 'Say "Menya zovut" (My name is)', correctAnswer: 'menya zovut', spokenText: 'Меня зовут', hint: 'Pronounced "meen-YAH zah-VOOT"' },
];

// ============ ARABIC LESSONS ============
const arabicBasics = [
  { id: 'ar-q1', type: 'multiple-choice', question: 'How do you say "Hello" in Arabic?', options: ['مرحبا', 'شكرا', 'مع السلامة', 'من فضلك'], correctAnswer: 'مرحبا', hint: 'Marhaba' },
  { id: 'ar-q2', type: 'speaking', question: 'Say "Marhaba" (Hello)', correctAnswer: 'marhaba', spokenText: 'مرحبا', hint: 'Pronounced "mar-HAH-bah"' },
  { id: 'ar-q3', type: 'translation', question: 'Translate: "Thank you"', options: ['مع السلامة', 'شكرا', 'أهلا', 'نعم'], correctAnswer: 'شكرا' },
  { id: 'ar-q4', type: 'multiple-choice', question: 'What does "نعم" mean?', options: ['No', 'Yes', 'Please', 'Sorry'], correctAnswer: 'Yes' },
];

const arabicNumbers = [
  { id: 'ar-n1', type: 'multiple-choice', question: 'What is "one" in Arabic?', options: ['اثنان', 'واحد', 'ثلاثة', 'أربعة'], correctAnswer: 'واحد' },
  { id: 'ar-n2', type: 'speaking', question: 'Say "Wahid" (One)', correctAnswer: 'wahid', spokenText: 'واحد', hint: 'Pronounced "WAH-hid"' },
  { id: 'ar-n3', type: 'speaking', question: 'Say "Khamsa" (Five)', correctAnswer: 'khamsa', spokenText: 'خمسة', hint: 'Pronounced "KHAM-sah"' },
  { id: 'ar-n4', type: 'translation', question: 'Translate: "Ten"', options: ['ثمانية', 'تسعة', 'عشرة', 'ستة'], correctAnswer: 'عشرة' },
];

const arabicFood = [
  { id: 'ar-f1', type: 'multiple-choice', question: 'How do you say "water" in Arabic?', options: ['حليب', 'ماء', 'عصير', 'قهوة'], correctAnswer: 'ماء' },
  { id: 'ar-f2', type: 'speaking', question: 'Say "Tuffaha" (Apple)', correctAnswer: 'tuffaha', spokenText: 'تفاحة', hint: 'Pronounced "tuf-FAH-hah"' },
  { id: 'ar-f3', type: 'multiple-choice', question: 'What does "خبز" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const arabicSpeaking = [
  { id: 'ar-sp1', type: 'speaking', question: 'Say "Sabah al-khayr" (Good morning)', correctAnswer: 'sabah al khayr', spokenText: 'صباح الخير', hint: 'Pronounced "sah-BAH al-KHAYR"' },
  { id: 'ar-sp2', type: 'speaking', question: 'Say "Shukran" (Thank you)', correctAnswer: 'shukran', spokenText: 'شكرا', hint: 'Pronounced "SHOOK-rahn"' },
  { id: 'ar-sp3', type: 'speaking', question: 'Say "Min fadlak" (Please, to male)', correctAnswer: 'min fadlak', spokenText: 'من فضلك', hint: 'Pronounced "min FAD-lak"' },
  { id: 'ar-sp4', type: 'speaking', question: 'Say "Ismi" (My name is)', correctAnswer: 'ismi', spokenText: 'اسمي', hint: 'Pronounced "IS-mee"' },
];

// ============ HINDI LESSONS ============
const hindiBasics = [
  { id: 'hi-q1', type: 'multiple-choice', question: 'How do you say "Hello" in Hindi?', options: ['नमस्ते', 'धन्यवाद', 'अलविदा', 'कृपया'], correctAnswer: 'नमस्ते', hint: 'Namaste' },
  { id: 'hi-q2', type: 'speaking', question: 'Say "Namaste" (Hello)', correctAnswer: 'namaste', spokenText: 'नमस्ते', hint: 'Pronounced "nah-mah-STAY"' },
  { id: 'hi-q3', type: 'translation', question: 'Translate: "Thank you"', options: ['कृपया', 'धन्यवाद', 'अलविदा', 'हाँ'], correctAnswer: 'धन्यवाद' },
  { id: 'hi-q4', type: 'multiple-choice', question: 'What does "हाँ" mean?', options: ['No', 'Yes', 'Maybe', 'Please'], correctAnswer: 'Yes' },
];

const hindiNumbers = [
  { id: 'hi-n1', type: 'multiple-choice', question: 'What is "one" in Hindi?', options: ['दो', 'एक', 'तीन', 'चार'], correctAnswer: 'एक' },
  { id: 'hi-n2', type: 'speaking', question: 'Say "Ek" (One)', correctAnswer: 'ek', spokenText: 'एक', hint: 'Pronounced "ehk"' },
  { id: 'hi-n3', type: 'speaking', question: 'Say "Paanch" (Five)', correctAnswer: 'paanch', spokenText: 'पाँच', hint: 'Pronounced "pahnch"' },
  { id: 'hi-n4', type: 'translation', question: 'Translate: "Ten"', options: ['आठ', 'नौ', 'दस', 'छह'], correctAnswer: 'दस' },
];

const hindiFood = [
  { id: 'hi-f1', type: 'multiple-choice', question: 'How do you say "water" in Hindi?', options: ['दूध', 'पानी', 'जूस', 'चाय'], correctAnswer: 'पानी' },
  { id: 'hi-f2', type: 'speaking', question: 'Say "Seb" (Apple)', correctAnswer: 'seb', spokenText: 'सेब', hint: 'Pronounced "sehb"' },
  { id: 'hi-f3', type: 'multiple-choice', question: 'What does "रोटी" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const hindiSpeaking = [
  { id: 'hi-sp1', type: 'speaking', question: 'Say "Suprabhat" (Good morning)', correctAnswer: 'suprabhat', spokenText: 'सुप्रभात', hint: 'Pronounced "soo-prah-BHAHT"' },
  { id: 'hi-sp2', type: 'speaking', question: 'Say "Dhanyavaad" (Thank you)', correctAnswer: 'dhanyavaad', spokenText: 'धन्यवाद', hint: 'Pronounced "dhun-yuh-VAHD"' },
  { id: 'hi-sp3', type: 'speaking', question: 'Say "Kripaya" (Please)', correctAnswer: 'kripaya', spokenText: 'कृपया', hint: 'Pronounced "kree-PAH-yah"' },
  { id: 'hi-sp4', type: 'speaking', question: 'Say "Mera naam" (My name is)', correctAnswer: 'mera naam', spokenText: 'मेरा नाम', hint: 'Pronounced "MEH-rah nahm"' },
];

// ============ DUTCH LESSONS ============
const dutchBasics = [
  { id: 'nl-q1', type: 'multiple-choice', question: 'How do you say "Hello" in Dutch?', options: ['Hallo', 'Tot ziens', 'Dank je', 'Alsjeblieft'], correctAnswer: 'Hallo', hint: 'Similar to English and German!' },
  { id: 'nl-q2', type: 'speaking', question: 'Say "Hallo" (Hello)', correctAnswer: 'hallo', spokenText: 'Hallo', hint: 'Pronounced like English "hello"' },
  { id: 'nl-q3', type: 'translation', question: 'Translate: "Good morning"', options: ['Goedenavond', 'Goedemorgen', 'Goedenacht', 'Tot ziens'], correctAnswer: 'Goedemorgen' },
  { id: 'nl-q4', type: 'multiple-choice', question: 'What does "Ja" mean?', options: ['No', 'Yes', 'Maybe', 'Please'], correctAnswer: 'Yes' },
];

const dutchNumbers = [
  { id: 'nl-n1', type: 'multiple-choice', question: 'What is "one" in Dutch?', options: ['Twee', 'Een', 'Drie', 'Vier'], correctAnswer: 'Een' },
  { id: 'nl-n2', type: 'speaking', question: 'Say "Vijf" (Five)', correctAnswer: 'vijf', spokenText: 'Vijf', hint: 'Pronounced "vayf"' },
  { id: 'nl-n3', type: 'speaking', question: 'Say "Tien" (Ten)', correctAnswer: 'tien', spokenText: 'Tien', hint: 'Pronounced "teen"' },
  { id: 'nl-n4', type: 'translation', question: 'Translate: "Three"', options: ['Een', 'Twee', 'Drie', 'Vier'], correctAnswer: 'Drie' },
];

const dutchFood = [
  { id: 'nl-f1', type: 'multiple-choice', question: 'How do you say "water" in Dutch?', options: ['Melk', 'Water', 'Sap', 'Koffie'], correctAnswer: 'Water' },
  { id: 'nl-f2', type: 'speaking', question: 'Say "Appel" (Apple)', correctAnswer: 'appel', spokenText: 'Appel', hint: 'Pronounced "AH-pel"' },
  { id: 'nl-f3', type: 'multiple-choice', question: 'What does "Brood" mean?', options: ['Rice', 'Bread', 'Cheese', 'Meat'], correctAnswer: 'Bread' },
];

const dutchSpeaking = [
  { id: 'nl-sp1', type: 'speaking', question: 'Say "Goedemorgen" (Good morning)', correctAnswer: 'goedemorgen', spokenText: 'Goedemorgen', hint: 'Pronounced "KHOO-duh-MOR-khun"' },
  { id: 'nl-sp2', type: 'speaking', question: 'Say "Dank je wel" (Thank you)', correctAnswer: 'dank je wel', spokenText: 'Dank je wel', hint: 'Pronounced "dahnk yuh vel"' },
  { id: 'nl-sp3', type: 'speaking', question: 'Say "Alsjeblieft" (Please)', correctAnswer: 'alsjeblieft', spokenText: 'Alsjeblieft', hint: 'Pronounced "ALS-yuh-bleeft"' },
  { id: 'nl-sp4', type: 'speaking', question: 'Say "Ik heet" (My name is)', correctAnswer: 'ik heet', spokenText: 'Ik heet', hint: 'Pronounced "ik hayt"' },
];

// ============ PRACTICE LESSONS (Match Pairs & Fill Blank) ============
const englishUSPractice = [
  { id: 'en-us-pr1', type: 'match-pairs', question: 'Match the American phrases with their meanings', correctAnswer: 'matched', pairs: [
    { left: 'Hey', right: 'Hello' },
    { left: 'Awesome', right: 'Great' },
    { left: 'What\'s up?', right: 'How are you?' },
    { left: 'Catch you later', right: 'Goodbye' },
  ]},
  { id: 'en-us-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Nice to ___ you!', correctAnswer: 'meet', options: ['meet', 'see', 'have', 'get'] },
  { id: 'en-us-pr3', type: 'speaking', question: 'Say "See you tomorrow"', correctAnswer: 'see you tomorrow', spokenText: 'See you tomorrow', hint: 'Casual farewell' },
];

const englishUKPractice = [
  { id: 'en-gb-pr1', type: 'match-pairs', question: 'Match British words with meanings', correctAnswer: 'matched', pairs: [
    { left: 'Cheers', right: 'Thank you' },
    { left: 'Cuppa', right: 'Tea' },
    { left: 'Biscuit', right: 'Cookie' },
    { left: 'Brilliant', right: 'Great' },
  ]},
  { id: 'en-gb-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Fancy a ___ of tea?', correctAnswer: 'cup', options: ['cup', 'glass', 'bowl', 'pot'] },
  { id: 'en-gb-pr3', type: 'speaking', question: 'Say "Lovely weather today"', correctAnswer: 'lovely weather today', spokenText: 'Lovely weather today', hint: 'Common British small talk' },
];

const spanishPractice = [
  { id: 'es-pr1', type: 'match-pairs', question: 'Match Spanish words with their meanings', correctAnswer: 'matched', pairs: [
    { left: 'Hola', right: 'Hello' },
    { left: 'Gracias', right: 'Thank you' },
    { left: 'Adiós', right: 'Goodbye' },
    { left: 'Por favor', right: 'Please' },
  ]},
  { id: 'es-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Buenos ___, ¿cómo estás?', correctAnswer: 'días', options: ['días', 'noches', 'tardes', 'horas'] },
  { id: 'es-pr3', type: 'speaking', question: 'Say "Mucho gusto" (Nice to meet you)', correctAnswer: 'mucho gusto', spokenText: 'Mucho gusto', hint: 'Pronounced "MOO-cho GOO-stoh"' },
];

const frenchPractice = [
  { id: 'fr-pr1', type: 'match-pairs', question: 'Match French words with their meanings', correctAnswer: 'matched', pairs: [
    { left: 'Bonjour', right: 'Hello' },
    { left: 'Merci', right: 'Thank you' },
    { left: 'Au revoir', right: 'Goodbye' },
    { left: 'S\'il vous plaît', right: 'Please' },
  ]},
  { id: 'fr-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Comment ___ va?', correctAnswer: 'ça', options: ['ça', 'tu', 'il', 'je'] },
  { id: 'fr-pr3', type: 'speaking', question: 'Say "Enchanté" (Nice to meet you)', correctAnswer: 'enchante', spokenText: 'Enchanté', hint: 'Pronounced "ahn-shahn-TAY"' },
];

const germanPractice = [
  { id: 'de-pr1', type: 'match-pairs', question: 'Match German words with their meanings', correctAnswer: 'matched', pairs: [
    { left: 'Hallo', right: 'Hello' },
    { left: 'Danke', right: 'Thank you' },
    { left: 'Tschüss', right: 'Goodbye' },
    { left: 'Bitte', right: 'Please' },
  ]},
  { id: 'de-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Guten ___, wie geht es dir?', correctAnswer: 'Tag', options: ['Tag', 'Morgen', 'Abend', 'Nacht'] },
  { id: 'de-pr3', type: 'speaking', question: 'Say "Freut mich" (Nice to meet you)', correctAnswer: 'freut mich', spokenText: 'Freut mich', hint: 'Pronounced "froyt mikh"' },
];

const italianPractice = [
  { id: 'it-pr1', type: 'match-pairs', question: 'Match Italian words with their meanings', correctAnswer: 'matched', pairs: [
    { left: 'Ciao', right: 'Hello/Bye' },
    { left: 'Grazie', right: 'Thank you' },
    { left: 'Arrivederci', right: 'Goodbye' },
    { left: 'Per favore', right: 'Please' },
  ]},
  { id: 'it-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Buon___, come stai?', correctAnswer: 'giorno', options: ['giorno', 'sera', 'notte', 'anno'] },
  { id: 'it-pr3', type: 'speaking', question: 'Say "Piacere" (Nice to meet you)', correctAnswer: 'piacere', spokenText: 'Piacere', hint: 'Pronounced "pyah-CHEH-reh"' },
];

const portuguesePractice = [
  { id: 'pt-pr1', type: 'match-pairs', question: 'Match Portuguese words with their meanings', correctAnswer: 'matched', pairs: [
    { left: 'Olá', right: 'Hello' },
    { left: 'Obrigado', right: 'Thank you' },
    { left: 'Tchau', right: 'Goodbye' },
    { left: 'Por favor', right: 'Please' },
  ]},
  { id: 'pt-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Bom ___, como vai?', correctAnswer: 'dia', options: ['dia', 'noite', 'tarde', 'ano'] },
  { id: 'pt-pr3', type: 'speaking', question: 'Say "Prazer em conhecer" (Nice to meet you)', correctAnswer: 'prazer em conhecer', spokenText: 'Prazer em conhecer', hint: 'Pronounced "prah-ZEHR ehm koh-nyeh-SEHR"' },
];

const japanesePractice = [
  { id: 'ja-pr1', type: 'match-pairs', question: 'Match Japanese words with their meanings', correctAnswer: 'matched', pairs: [
    { left: 'こんにちは', right: 'Hello' },
    { left: 'ありがとう', right: 'Thank you' },
    { left: 'さようなら', right: 'Goodbye' },
    { left: 'すみません', right: 'Excuse me' },
  ]},
  { id: 'ja-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'お___ございます (Good morning)', correctAnswer: 'はよう', options: ['はよう', 'やすみ', 'げんき', 'ねがい'] },
  { id: 'ja-pr3', type: 'speaking', question: 'Say "Hajimemashite" (Nice to meet you)', correctAnswer: 'hajimemashite', spokenText: 'はじめまして', hint: 'Pronounced "hah-jee-meh-MAHSH-teh"' },
];

const koreanPractice = [
  { id: 'ko-pr1', type: 'match-pairs', question: 'Match Korean words with their meanings', correctAnswer: 'matched', pairs: [
    { left: '안녕하세요', right: 'Hello' },
    { left: '감사합니다', right: 'Thank you' },
    { left: '안녕히 가세요', right: 'Goodbye' },
    { left: '네', right: 'Yes' },
  ]},
  { id: 'ko-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: '___합니다 (Thank you)', correctAnswer: '감사', options: ['감사', '안녕', '미안', '부탁'] },
  { id: 'ko-pr3', type: 'speaking', question: 'Say "Mannaseo bangapseumnida" (Nice to meet you)', correctAnswer: 'mannaseo bangapseumnida', spokenText: '만나서 반갑습니다', hint: 'Pronounced "mahn-nah-suh bahng-ahp-SOOM-nee-dah"' },
];

const chinesePractice = [
  { id: 'zh-pr1', type: 'match-pairs', question: 'Match Chinese words with their meanings', correctAnswer: 'matched', pairs: [
    { left: '你好', right: 'Hello' },
    { left: '谢谢', right: 'Thank you' },
    { left: '再见', right: 'Goodbye' },
    { left: '请', right: 'Please' },
  ]},
  { id: 'zh-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: '早上___ (Good morning)', correctAnswer: '好', options: ['好', '吗', '是', '很'] },
  { id: 'zh-pr3', type: 'speaking', question: 'Say "Hen gao xing ren shi ni" (Nice to meet you)', correctAnswer: 'hen gao xing ren shi ni', spokenText: '很高兴认识你', hint: 'Pronounced "hun gow shing run shur nee"' },
];

const russianPractice = [
  { id: 'ru-pr1', type: 'match-pairs', question: 'Match Russian words with their meanings', correctAnswer: 'matched', pairs: [
    { left: 'Привет', right: 'Hello' },
    { left: 'Спасибо', right: 'Thank you' },
    { left: 'До свидания', right: 'Goodbye' },
    { left: 'Пожалуйста', right: 'Please' },
  ]},
  { id: 'ru-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Доброе ___ (Good morning)', correctAnswer: 'утро', options: ['утро', 'день', 'вечер', 'ночь'] },
  { id: 'ru-pr3', type: 'speaking', question: 'Say "Ochen priyatno" (Nice to meet you)', correctAnswer: 'ochen priyatno', spokenText: 'Очень приятно', hint: 'Pronounced "OH-chen pree-YAHT-noh"' },
];

const arabicPractice = [
  { id: 'ar-pr1', type: 'match-pairs', question: 'Match Arabic words with their meanings', correctAnswer: 'matched', pairs: [
    { left: 'مرحبا', right: 'Hello' },
    { left: 'شكرا', right: 'Thank you' },
    { left: 'مع السلامة', right: 'Goodbye' },
    { left: 'من فضلك', right: 'Please' },
  ]},
  { id: 'ar-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'صباح ___ (Good morning)', correctAnswer: 'الخير', options: ['الخير', 'النور', 'الليل', 'السلام'] },
  { id: 'ar-pr3', type: 'speaking', question: 'Say "Tasharrafna" (Nice to meet you)', correctAnswer: 'tasharrafna', spokenText: 'تشرفنا', hint: 'Pronounced "tah-shah-RAHF-nah"' },
];

const hindiPractice = [
  { id: 'hi-pr1', type: 'match-pairs', question: 'Match Hindi words with their meanings', correctAnswer: 'matched', pairs: [
    { left: 'नमस्ते', right: 'Hello' },
    { left: 'धन्यवाद', right: 'Thank you' },
    { left: 'अलविदा', right: 'Goodbye' },
    { left: 'कृपया', right: 'Please' },
  ]},
  { id: 'hi-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'सु___ (Good morning)', correctAnswer: 'प्रभात', options: ['प्रभात', 'रात्रि', 'संध्या', 'दोपहर'] },
  { id: 'hi-pr3', type: 'speaking', question: 'Say "Aap se milkar khushi hui" (Nice to meet you)', correctAnswer: 'aap se milkar khushi hui', spokenText: 'आप से मिलकर खुशी हुई', hint: 'Pronounced "aahp say mil-kar khoo-shee hoo-ee"' },
];

const dutchPractice = [
  { id: 'nl-pr1', type: 'match-pairs', question: 'Match Dutch words with their meanings', correctAnswer: 'matched', pairs: [
    { left: 'Hallo', right: 'Hello' },
    { left: 'Dank je', right: 'Thank you' },
    { left: 'Tot ziens', right: 'Goodbye' },
    { left: 'Alsjeblieft', right: 'Please' },
  ]},
  { id: 'nl-pr2', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Goede___ (Good morning)', correctAnswer: 'morgen', options: ['morgen', 'avond', 'nacht', 'dag'] },
  { id: 'nl-pr3', type: 'speaking', question: 'Say "Aangenaam kennis te maken" (Nice to meet you)', correctAnswer: 'aangenaam kennis te maken', spokenText: 'Aangenaam kennis te maken', hint: 'Pronounced "AHN-kheh-nahm KEN-is tuh MAH-kun"' },
];

// ============ LESSONS BY LANGUAGE ============
export const lessonsByLanguage = {
  'en-us': [
    { id: 'en-us-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: englishUSBasics, completed: false, locked: false },
    { id: 'en-us-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: englishUSSpeaking, completed: false, locked: true },
    { id: 'en-us-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: englishUSNumbers, completed: false, locked: true },
    { id: 'en-us-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: englishUSFood, completed: false, locked: true },
    { id: 'en-us-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: englishUSPractice, completed: false, locked: true },
    // Level 2
    { id: 'en-us-animals-2', title: 'Animals', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.englishUSAnimals, completed: false, locked: true },
    { id: 'en-us-clothes-2', title: 'Clothes', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.englishUSClothes, completed: false, locked: true },
    { id: 'en-us-weather-2', title: 'Weather', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.englishUSWeather, completed: false, locked: true },
    { id: 'en-us-family-2', title: 'Family', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.englishUSFamily, completed: false, locked: true },
    // Level 3 - Advanced
    { id: 'en-us-travel-3', title: 'Travel', category: 'Level 3', icon: '✈️', difficulty: 'advanced', xpReward: 40, questions: L3.englishUSTravel, completed: false, locked: true },
    { id: 'en-us-time-3', title: 'Time', category: 'Level 3', icon: '⏰', difficulty: 'advanced', xpReward: 40, questions: L3.englishUSTime, completed: false, locked: true },
    { id: 'en-us-colors-3', title: 'Colors', category: 'Level 3', icon: '🎨', difficulty: 'advanced', xpReward: 40, questions: L3.englishUSColors, completed: false, locked: true },
    { id: 'en-us-hobbies-3', title: 'Hobbies', category: 'Level 3', icon: '🎯', difficulty: 'advanced', xpReward: 45, questions: L3.englishUSHobbies, completed: false, locked: true },
  ],
  'en-gb': [
    { id: 'en-gb-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: englishUKBasics, completed: false, locked: false },
    { id: 'en-gb-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: englishUKSpeaking, completed: false, locked: true },
    { id: 'en-gb-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: englishUKNumbers, completed: false, locked: true },
    { id: 'en-gb-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: englishUKFood, completed: false, locked: true },
    { id: 'en-gb-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: englishUKPractice, completed: false, locked: true },
    // Level 2
    { id: 'en-gb-animals-2', title: 'Animals', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.englishUKAnimals, completed: false, locked: true },
    { id: 'en-gb-clothes-2', title: 'Clothes', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.englishUKClothes, completed: false, locked: true },
    { id: 'en-gb-weather-2', title: 'Weather', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.englishUKWeather, completed: false, locked: true },
    { id: 'en-gb-family-2', title: 'Family', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.englishUKFamily, completed: false, locked: true },
    // Level 3 - Advanced
    { id: 'en-gb-travel-3', title: 'Travel', category: 'Level 3', icon: '✈️', difficulty: 'advanced', xpReward: 40, questions: L3.englishUSTravel, completed: false, locked: true },
    { id: 'en-gb-time-3', title: 'Time', category: 'Level 3', icon: '⏰', difficulty: 'advanced', xpReward: 40, questions: L3.englishUSTime, completed: false, locked: true },
    { id: 'en-gb-colors-3', title: 'Colours', category: 'Level 3', icon: '🎨', difficulty: 'advanced', xpReward: 40, questions: L3.englishUSColors, completed: false, locked: true },
    { id: 'en-gb-hobbies-3', title: 'Hobbies', category: 'Level 3', icon: '🎯', difficulty: 'advanced', xpReward: 45, questions: L3.englishUSHobbies, completed: false, locked: true },
  ],
  es: [
    { id: 'es-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: spanishBasics, completed: false, locked: false },
    { id: 'es-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: spanishSpeaking, completed: false, locked: true },
    { id: 'es-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: spanishNumbers, completed: false, locked: true },
    { id: 'es-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: spanishFood, completed: false, locked: true },
    { id: 'es-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: spanishPractice, completed: false, locked: true },
    // Level 2
    { id: 'es-animals-2', title: 'Animales', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.spanishAnimals, completed: false, locked: true },
    { id: 'es-clothes-2', title: 'Ropa', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.spanishClothes, completed: false, locked: true },
    { id: 'es-weather-2', title: 'El Tiempo', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.spanishWeather, completed: false, locked: true },
    { id: 'es-family-2', title: 'Familia', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.spanishFamily, completed: false, locked: true },
    // Level 3 - Advanced
    { id: 'es-travel-3', title: 'Viajes', category: 'Level 3', icon: '✈️', difficulty: 'advanced', xpReward: 40, questions: L3.spanishTravel, completed: false, locked: true },
    { id: 'es-time-3', title: 'La Hora', category: 'Level 3', icon: '⏰', difficulty: 'advanced', xpReward: 40, questions: L3.spanishTime, completed: false, locked: true },
    { id: 'es-colors-3', title: 'Colores', category: 'Level 3', icon: '🎨', difficulty: 'advanced', xpReward: 40, questions: L3.spanishColors, completed: false, locked: true },
    { id: 'es-hobbies-3', title: 'Pasatiempos', category: 'Level 3', icon: '🎯', difficulty: 'advanced', xpReward: 45, questions: L3.spanishHobbies, completed: false, locked: true },
  ],
  fr: [
    { id: 'fr-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: frenchBasics, completed: false, locked: false },
    { id: 'fr-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: frenchSpeaking, completed: false, locked: true },
    { id: 'fr-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: frenchNumbers, completed: false, locked: true },
    { id: 'fr-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: frenchFood, completed: false, locked: true },
    { id: 'fr-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: frenchPractice, completed: false, locked: true },
    // Level 2
    { id: 'fr-animals-2', title: 'Animaux', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.frenchAnimals, completed: false, locked: true },
    { id: 'fr-clothes-2', title: 'Vêtements', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.frenchClothes, completed: false, locked: true },
    { id: 'fr-weather-2', title: 'La Météo', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.frenchWeather, completed: false, locked: true },
    { id: 'fr-family-2', title: 'Famille', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.frenchFamily, completed: false, locked: true },
    // Level 3 - Advanced
    { id: 'fr-travel-3', title: 'Voyages', category: 'Level 3', icon: '✈️', difficulty: 'advanced', xpReward: 40, questions: L3.frenchTravel, completed: false, locked: true },
    { id: 'fr-time-3', title: "L'Heure", category: 'Level 3', icon: '⏰', difficulty: 'advanced', xpReward: 40, questions: L3.frenchTime, completed: false, locked: true },
    { id: 'fr-colors-3', title: 'Couleurs', category: 'Level 3', icon: '🎨', difficulty: 'advanced', xpReward: 40, questions: L3.frenchColors, completed: false, locked: true },
    { id: 'fr-hobbies-3', title: 'Loisirs', category: 'Level 3', icon: '🎯', difficulty: 'advanced', xpReward: 45, questions: L3.frenchHobbies, completed: false, locked: true },
  ],
  de: [
    { id: 'de-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: germanBasics, completed: false, locked: false },
    { id: 'de-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: germanSpeaking, completed: false, locked: true },
    { id: 'de-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: germanNumbers, completed: false, locked: true },
    { id: 'de-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: germanFood, completed: false, locked: true },
    { id: 'de-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: germanPractice, completed: false, locked: true },
    // Level 2
    { id: 'de-animals-2', title: 'Tiere', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.germanAnimals, completed: false, locked: true },
    { id: 'de-clothes-2', title: 'Kleidung', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.germanClothes, completed: false, locked: true },
    { id: 'de-weather-2', title: 'Wetter', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.germanWeather, completed: false, locked: true },
    { id: 'de-family-2', title: 'Familie', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.germanFamily, completed: false, locked: true },
    // Level 3 - Advanced
    { id: 'de-travel-3', title: 'Reisen', category: 'Level 3', icon: '✈️', difficulty: 'advanced', xpReward: 40, questions: L3.germanTravel, completed: false, locked: true },
    { id: 'de-time-3', title: 'Uhrzeit', category: 'Level 3', icon: '⏰', difficulty: 'advanced', xpReward: 40, questions: L3.germanTime, completed: false, locked: true },
    { id: 'de-colors-3', title: 'Farben', category: 'Level 3', icon: '🎨', difficulty: 'advanced', xpReward: 40, questions: L3.germanColors, completed: false, locked: true },
    { id: 'de-hobbies-3', title: 'Hobbys', category: 'Level 3', icon: '🎯', difficulty: 'advanced', xpReward: 45, questions: L3.germanHobbies, completed: false, locked: true },
  ],
  it: [
    { id: 'it-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: italianBasics, completed: false, locked: false },
    { id: 'it-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: italianSpeaking, completed: false, locked: true },
    { id: 'it-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: italianNumbers, completed: false, locked: true },
    { id: 'it-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: italianFood, completed: false, locked: true },
    { id: 'it-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: italianPractice, completed: false, locked: true },
    // Level 2
    { id: 'it-animals-2', title: 'Animali', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.italianAnimals, completed: false, locked: true },
    { id: 'it-clothes-2', title: 'Vestiti', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.italianClothes, completed: false, locked: true },
    { id: 'it-weather-2', title: 'Il Tempo', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.italianWeather, completed: false, locked: true },
    { id: 'it-family-2', title: 'Famiglia', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.italianFamily, completed: false, locked: true },
    // Level 3 - Advanced
    { id: 'it-travel-3', title: 'Viaggi', category: 'Level 3', icon: '✈️', difficulty: 'advanced', xpReward: 40, questions: L3.italianTravel, completed: false, locked: true },
    { id: 'it-time-3', title: "L'Ora", category: 'Level 3', icon: '⏰', difficulty: 'advanced', xpReward: 40, questions: L3.italianTime, completed: false, locked: true },
    { id: 'it-colors-3', title: 'Colori', category: 'Level 3', icon: '🎨', difficulty: 'advanced', xpReward: 40, questions: L3.italianColors, completed: false, locked: true },
    { id: 'it-hobbies-3', title: 'Hobby', category: 'Level 3', icon: '🎯', difficulty: 'advanced', xpReward: 45, questions: L3.italianHobbies, completed: false, locked: true },
  ],
  pt: [
    { id: 'pt-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: portugueseBasics, completed: false, locked: false },
    { id: 'pt-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: portugueseSpeaking, completed: false, locked: true },
    { id: 'pt-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: portugueseNumbers, completed: false, locked: true },
    { id: 'pt-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: portugueseFood, completed: false, locked: true },
    { id: 'pt-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: portuguesePractice, completed: false, locked: true },
    // Level 2
    { id: 'pt-animals-2', title: 'Animais', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.portugueseAnimals, completed: false, locked: true },
    { id: 'pt-clothes-2', title: 'Roupas', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.portugueseClothes, completed: false, locked: true },
    { id: 'pt-weather-2', title: 'Clima', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.portugueseWeather, completed: false, locked: true },
    { id: 'pt-family-2', title: 'Família', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.portugueseFamily, completed: false, locked: true },
    // Level 3 - Advanced
    { id: 'pt-travel-3', title: 'Viagem', category: 'Level 3', icon: '✈️', difficulty: 'advanced', xpReward: 40, questions: L3.portugueseTravel, completed: false, locked: true },
    { id: 'pt-time-3', title: 'Horas', category: 'Level 3', icon: '⏰', difficulty: 'advanced', xpReward: 40, questions: L3.portugueseTime, completed: false, locked: true },
    { id: 'pt-colors-3', title: 'Cores', category: 'Level 3', icon: '🎨', difficulty: 'advanced', xpReward: 40, questions: L3.portugueseColors, completed: false, locked: true },
    { id: 'pt-hobbies-3', title: 'Hobbies', category: 'Level 3', icon: '🎯', difficulty: 'advanced', xpReward: 45, questions: L3.portugueseHobbies, completed: false, locked: true },
  ],
  ja: [
    { id: 'ja-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: japaneseBasics, completed: false, locked: false },
    { id: 'ja-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: japaneseSpeaking, completed: false, locked: true },
    { id: 'ja-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: japaneseNumbers, completed: false, locked: true },
    { id: 'ja-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: japaneseFood, completed: false, locked: true },
    { id: 'ja-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: japanesePractice, completed: false, locked: true },
    // Level 2
    { id: 'ja-animals-2', title: '動物', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.japaneseAnimals, completed: false, locked: true },
    { id: 'ja-clothes-2', title: '服', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.japaneseClothes, completed: false, locked: true },
    { id: 'ja-weather-2', title: '天気', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.japaneseWeather, completed: false, locked: true },
    { id: 'ja-family-2', title: '家族', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.japaneseFamily, completed: false, locked: true },
    // Level 3 - Advanced
    { id: 'ja-travel-3', title: '旅行', category: 'Level 3', icon: '✈️', difficulty: 'advanced', xpReward: 40, questions: L3.japaneseTravel, completed: false, locked: true },
    { id: 'ja-time-3', title: '時間', category: 'Level 3', icon: '⏰', difficulty: 'advanced', xpReward: 40, questions: L3.japaneseTime, completed: false, locked: true },
    { id: 'ja-colors-3', title: '色', category: 'Level 3', icon: '🎨', difficulty: 'advanced', xpReward: 40, questions: L3.japaneseColors, completed: false, locked: true },
    { id: 'ja-hobbies-3', title: '趣味', category: 'Level 3', icon: '🎯', difficulty: 'advanced', xpReward: 45, questions: L3.japaneseHobbies, completed: false, locked: true },
  ],
  ko: [
    { id: 'ko-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: koreanBasics, completed: false, locked: false },
    { id: 'ko-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: koreanSpeaking, completed: false, locked: true },
    { id: 'ko-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: koreanNumbers, completed: false, locked: true },
    { id: 'ko-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: koreanFood, completed: false, locked: true },
    { id: 'ko-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: koreanPractice, completed: false, locked: true },
    // Level 2
    { id: 'ko-animals-2', title: '동물', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.koreanAnimals, completed: false, locked: true },
    { id: 'ko-clothes-2', title: '옷', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.koreanClothes, completed: false, locked: true },
    { id: 'ko-weather-2', title: '날씨', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.koreanWeather, completed: false, locked: true },
    { id: 'ko-family-2', title: '가족', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.koreanFamily, completed: false, locked: true },
    // Level 3 - Advanced
    { id: 'ko-travel-3', title: '여행', category: 'Level 3', icon: '✈️', difficulty: 'advanced', xpReward: 40, questions: L3.koreanTravel, completed: false, locked: true },
    { id: 'ko-time-3', title: '시간', category: 'Level 3', icon: '⏰', difficulty: 'advanced', xpReward: 40, questions: L3.koreanTime, completed: false, locked: true },
    { id: 'ko-colors-3', title: '색', category: 'Level 3', icon: '🎨', difficulty: 'advanced', xpReward: 40, questions: L3.koreanColors, completed: false, locked: true },
    { id: 'ko-hobbies-3', title: '취미', category: 'Level 3', icon: '🎯', difficulty: 'advanced', xpReward: 45, questions: L3.koreanHobbies, completed: false, locked: true },
  ],
  zh: [
    { id: 'zh-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: chineseBasics, completed: false, locked: false },
    { id: 'zh-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: chineseSpeaking, completed: false, locked: true },
    { id: 'zh-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: chineseNumbers, completed: false, locked: true },
    { id: 'zh-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: chineseFood, completed: false, locked: true },
    { id: 'zh-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: chinesePractice, completed: false, locked: true },
    // Level 2
    { id: 'zh-animals-2', title: '动物', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.chineseAnimals, completed: false, locked: true },
    { id: 'zh-clothes-2', title: '衣服', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.chineseClothes, completed: false, locked: true },
    { id: 'zh-weather-2', title: '天气', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.chineseWeather, completed: false, locked: true },
    { id: 'zh-family-2', title: '家人', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.chineseFamily, completed: false, locked: true },
    // Level 3 - Advanced
    { id: 'zh-travel-3', title: '旅行', category: 'Level 3', icon: '✈️', difficulty: 'advanced', xpReward: 40, questions: L3.chineseTravel, completed: false, locked: true },
    { id: 'zh-time-3', title: '时间', category: 'Level 3', icon: '⏰', difficulty: 'advanced', xpReward: 40, questions: L3.chineseTime, completed: false, locked: true },
    { id: 'zh-colors-3', title: '颜色', category: 'Level 3', icon: '🎨', difficulty: 'advanced', xpReward: 40, questions: L3.chineseColors, completed: false, locked: true },
    { id: 'zh-hobbies-3', title: '爱好', category: 'Level 3', icon: '🎯', difficulty: 'advanced', xpReward: 45, questions: L3.chineseHobbies, completed: false, locked: true },
  ],
  ru: [
    { id: 'ru-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: russianBasics, completed: false, locked: false },
    { id: 'ru-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: russianSpeaking, completed: false, locked: true },
    { id: 'ru-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: russianNumbers, completed: false, locked: true },
    { id: 'ru-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: russianFood, completed: false, locked: true },
    { id: 'ru-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: russianPractice, completed: false, locked: true },
    // Level 2
    { id: 'ru-animals-2', title: 'Животные', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.russianAnimals, completed: false, locked: true },
    { id: 'ru-clothes-2', title: 'Одежда', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.russianClothes, completed: false, locked: true },
    { id: 'ru-weather-2', title: 'Погода', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.russianWeather, completed: false, locked: true },
    { id: 'ru-family-2', title: 'Семья', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.russianFamily, completed: false, locked: true },
  ],
  ar: [
    { id: 'ar-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: arabicBasics, completed: false, locked: false },
    { id: 'ar-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: arabicSpeaking, completed: false, locked: true },
    { id: 'ar-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: arabicNumbers, completed: false, locked: true },
    { id: 'ar-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: arabicFood, completed: false, locked: true },
    { id: 'ar-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: arabicPractice, completed: false, locked: true },
    // Level 2
    { id: 'ar-animals-2', title: 'حيوانات', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.arabicAnimals, completed: false, locked: true },
    { id: 'ar-clothes-2', title: 'ملابس', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.arabicClothes, completed: false, locked: true },
    { id: 'ar-weather-2', title: 'الطقس', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.arabicWeather, completed: false, locked: true },
    { id: 'ar-family-2', title: 'عائلة', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.arabicFamily, completed: false, locked: true },
  ],
  hi: [
    { id: 'hi-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: hindiBasics, completed: false, locked: false },
    { id: 'hi-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: hindiSpeaking, completed: false, locked: true },
    { id: 'hi-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: hindiNumbers, completed: false, locked: true },
    { id: 'hi-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: hindiFood, completed: false, locked: true },
    { id: 'hi-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: hindiPractice, completed: false, locked: true },
    // Level 2
    { id: 'hi-animals-2', title: 'जानवर', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.hindiAnimals, completed: false, locked: true },
    { id: 'hi-clothes-2', title: 'कपड़े', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.hindiClothes, completed: false, locked: true },
    { id: 'hi-weather-2', title: 'मौसम', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.hindiWeather, completed: false, locked: true },
    { id: 'hi-family-2', title: 'परिवार', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.hindiFamily, completed: false, locked: true },
  ],
  nl: [
    { id: 'nl-basics-1', title: 'Basics 1', category: 'Greetings', icon: '👋', difficulty: 'beginner', xpReward: 10, questions: dutchBasics, completed: false, locked: false },
    { id: 'nl-speaking-1', title: 'Speaking Practice', category: 'Pronunciation', icon: '🎤', difficulty: 'beginner', xpReward: 20, questions: dutchSpeaking, completed: false, locked: true },
    { id: 'nl-numbers-1', title: 'Numbers', category: 'Counting', icon: '🔢', difficulty: 'beginner', xpReward: 15, questions: dutchNumbers, completed: false, locked: true },
    { id: 'nl-food-1', title: 'Food & Drinks', category: 'Vocabulary', icon: '🍎', difficulty: 'intermediate', xpReward: 15, questions: dutchFood, completed: false, locked: true },
    { id: 'nl-practice-1', title: 'Practice', category: 'Review', icon: '🧩', difficulty: 'intermediate', xpReward: 25, questions: dutchPractice, completed: false, locked: true },
    // Level 2
    { id: 'nl-animals-2', title: 'Dieren', category: 'Level 2', icon: '🐕', difficulty: 'intermediate', xpReward: 30, questions: L2.dutchAnimals, completed: false, locked: true },
    { id: 'nl-clothes-2', title: 'Kleding', category: 'Level 2', icon: '👕', difficulty: 'intermediate', xpReward: 30, questions: L2.dutchClothes, completed: false, locked: true },
    { id: 'nl-weather-2', title: 'Weer', category: 'Level 2', icon: '☀️', difficulty: 'intermediate', xpReward: 30, questions: L2.dutchWeather, completed: false, locked: true },
    { id: 'nl-family-2', title: 'Familie', category: 'Level 2', icon: '👨‍👩‍👧', difficulty: 'advanced', xpReward: 35, questions: L2.dutchFamily, completed: false, locked: true },
  ],
};

export const calculateLevel = (xp) => {
  return Math.floor(xp / 50) + 1;
};

export const xpForNextLevel = (level) => {
  return level * 50;
};

export const xpProgress = (xp) => {
  const level = calculateLevel(xp);
  const previousLevelXp = (level - 1) * 50;
  const nextLevelXp = level * 50;
  return ((xp - previousLevelXp) / (nextLevelXp - previousLevelXp)) * 100;
};
