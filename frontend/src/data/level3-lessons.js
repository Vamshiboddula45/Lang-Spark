// Level 3 Lessons - Travel, Time, Colors, Hobbies

// ============ ENGLISH (US) LEVEL 3 ============

export const englishUSTravel = [
  { id: 'en-us-tr1', type: 'multiple-choice', question: 'Where do you go to catch a plane?', options: ['Train station', 'Airport', 'Bus stop', 'Harbor'], correctAnswer: 'Airport' },
  { id: 'en-us-tr2', type: 'speaking', question: 'Say "Where is the hotel?"', correctAnswer: 'where is the hotel', spokenText: 'Where is the hotel?', hint: 'Common travel question' },
  { id: 'en-us-tr3', type: 'match-pairs', question: 'Match travel vocabulary', correctAnswer: 'matched', pairs: [
    { left: 'Passport', right: 'ID for travel' },
    { left: 'Luggage', right: 'Bags & suitcases' },
    { left: 'Ticket', right: 'Travel pass' },
    { left: 'Map', right: 'Navigation tool' },
  ]},
  { id: 'en-us-tr4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'I need to book a ___ for my trip', correctAnswer: 'flight', options: ['flight', 'chair', 'book', 'pen'] },
  { id: 'en-us-tr5', type: 'speaking', question: 'Say "Can you help me find the station?"', correctAnswer: 'can you help me find the station', spokenText: 'Can you help me find the station?', hint: 'Asking for directions' },
];

export const englishUSTime = [
  { id: 'en-us-tm1', type: 'multiple-choice', question: 'What comes after 11:59 AM?', options: ['12:00 AM', '12:00 PM', '11:60 AM', '1:00 AM'], correctAnswer: '12:00 PM' },
  { id: 'en-us-tm2', type: 'speaking', question: 'Say "What time is it?"', correctAnswer: 'what time is it', spokenText: 'What time is it?', hint: 'Asking about time' },
  { id: 'en-us-tm3', type: 'match-pairs', question: 'Match time expressions', correctAnswer: 'matched', pairs: [
    { left: 'Morning', right: '6 AM - 12 PM' },
    { left: 'Afternoon', right: '12 PM - 6 PM' },
    { left: 'Evening', right: '6 PM - 9 PM' },
    { left: 'Night', right: '9 PM - 6 AM' },
  ]},
  { id: 'en-us-tm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'The meeting is at ___ o\'clock', correctAnswer: 'three', options: ['three', 'blue', 'fast', 'big'] },
];

export const englishUSColors = [
  { id: 'en-us-cl1', type: 'multiple-choice', question: 'What color is the sky on a clear day?', options: ['Red', 'Green', 'Blue', 'Yellow'], correctAnswer: 'Blue' },
  { id: 'en-us-cl2', type: 'speaking', question: 'Say "My favorite color is purple"', correctAnswer: 'my favorite color is purple', spokenText: 'My favorite color is purple', hint: 'Expressing preference' },
  { id: 'en-us-cl3', type: 'match-pairs', question: 'Match colors with objects', correctAnswer: 'matched', pairs: [
    { left: 'Yellow', right: 'Banana' },
    { left: 'Red', right: 'Apple' },
    { left: 'Green', right: 'Grass' },
    { left: 'Orange', right: 'Carrot' },
  ]},
  { id: 'en-us-cl4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'The ___ is white', correctAnswer: 'snow', options: ['snow', 'fire', 'night', 'sun'] },
];

export const englishUSHobbies = [
  { id: 'en-us-hb1', type: 'multiple-choice', question: 'What hobby involves using a camera?', options: ['Cooking', 'Photography', 'Swimming', 'Reading'], correctAnswer: 'Photography' },
  { id: 'en-us-hb2', type: 'speaking', question: 'Say "I enjoy playing music"', correctAnswer: 'i enjoy playing music', spokenText: 'I enjoy playing music', hint: 'Talking about hobbies' },
  { id: 'en-us-hb3', type: 'match-pairs', question: 'Match hobbies with equipment', correctAnswer: 'matched', pairs: [
    { left: 'Painting', right: 'Brush' },
    { left: 'Tennis', right: 'Racket' },
    { left: 'Cooking', right: 'Pan' },
    { left: 'Reading', right: 'Book' },
  ]},
  { id: 'en-us-hb4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'She likes to ___ in her free time', correctAnswer: 'dance', options: ['dance', 'sleep', 'work', 'study'] },
];

// ============ SPANISH LEVEL 3 ============

export const spanishTravel = [
  { id: 'es-tr1', type: 'multiple-choice', question: 'How do you say "airport" in Spanish?', options: ['Estación', 'Aeropuerto', 'Hotel', 'Puerto'], correctAnswer: 'Aeropuerto' },
  { id: 'es-tr2', type: 'speaking', question: 'Say "¿Dónde está el hotel?"', correctAnswer: 'donde esta el hotel', spokenText: '¿Dónde está el hotel?', hint: 'Where is the hotel?' },
  { id: 'es-tr3', type: 'match-pairs', question: 'Match Spanish travel words', correctAnswer: 'matched', pairs: [
    { left: 'Pasaporte', right: 'Passport' },
    { left: 'Maleta', right: 'Suitcase' },
    { left: 'Boleto', right: 'Ticket' },
    { left: 'Mapa', right: 'Map' },
  ]},
  { id: 'es-tr4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Necesito un ___ para el viaje', correctAnswer: 'boleto', options: ['boleto', 'libro', 'agua', 'casa'] },
];

export const spanishTime = [
  { id: 'es-tm1', type: 'multiple-choice', question: 'How do you say "What time is it?" in Spanish?', options: ['¿Cómo estás?', '¿Qué hora es?', '¿Dónde estás?', '¿Cuántos años tienes?'], correctAnswer: '¿Qué hora es?' },
  { id: 'es-tm2', type: 'speaking', question: 'Say "Son las tres"', correctAnswer: 'son las tres', spokenText: 'Son las tres', hint: 'It\'s three o\'clock' },
  { id: 'es-tm3', type: 'match-pairs', question: 'Match time expressions', correctAnswer: 'matched', pairs: [
    { left: 'Mañana', right: 'Morning' },
    { left: 'Tarde', right: 'Afternoon' },
    { left: 'Noche', right: 'Night' },
    { left: 'Mediodía', right: 'Noon' },
  ]},
  { id: 'es-tm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'La reunión es a las ___', correctAnswer: 'cinco', options: ['cinco', 'azul', 'grande', 'rápido'] },
];

export const spanishColors = [
  { id: 'es-cl1', type: 'multiple-choice', question: 'How do you say "red" in Spanish?', options: ['Azul', 'Verde', 'Rojo', 'Amarillo'], correctAnswer: 'Rojo' },
  { id: 'es-cl2', type: 'speaking', question: 'Say "Mi color favorito es azul"', correctAnswer: 'mi color favorito es azul', spokenText: 'Mi color favorito es azul', hint: 'My favorite color is blue' },
  { id: 'es-cl3', type: 'match-pairs', question: 'Match colors in Spanish', correctAnswer: 'matched', pairs: [
    { left: 'Amarillo', right: 'Yellow' },
    { left: 'Verde', right: 'Green' },
    { left: 'Blanco', right: 'White' },
    { left: 'Negro', right: 'Black' },
  ]},
  { id: 'es-cl4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'El cielo es ___', correctAnswer: 'azul', options: ['azul', 'rojo', 'verde', 'negro'] },
];

export const spanishHobbies = [
  { id: 'es-hb1', type: 'multiple-choice', question: 'How do you say "to read" in Spanish?', options: ['Escribir', 'Leer', 'Correr', 'Nadar'], correctAnswer: 'Leer' },
  { id: 'es-hb2', type: 'speaking', question: 'Say "Me gusta bailar"', correctAnswer: 'me gusta bailar', spokenText: 'Me gusta bailar', hint: 'I like to dance' },
  { id: 'es-hb3', type: 'match-pairs', question: 'Match hobbies in Spanish', correctAnswer: 'matched', pairs: [
    { left: 'Nadar', right: 'To swim' },
    { left: 'Cocinar', right: 'To cook' },
    { left: 'Pintar', right: 'To paint' },
    { left: 'Cantar', right: 'To sing' },
  ]},
  { id: 'es-hb4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Me gusta ___ en mi tiempo libre', correctAnswer: 'leer', options: ['leer', 'trabajar', 'dormir', 'llorar'] },
];

// ============ FRENCH LEVEL 3 ============

export const frenchTravel = [
  { id: 'fr-tr1', type: 'multiple-choice', question: 'How do you say "train station" in French?', options: ['Aéroport', 'Gare', 'Hôtel', 'Port'], correctAnswer: 'Gare' },
  { id: 'fr-tr2', type: 'speaking', question: 'Say "Où est l\'hôtel?"', correctAnswer: 'ou est l hotel', spokenText: 'Où est l\'hôtel?', hint: 'Where is the hotel?' },
  { id: 'fr-tr3', type: 'match-pairs', question: 'Match French travel words', correctAnswer: 'matched', pairs: [
    { left: 'Passeport', right: 'Passport' },
    { left: 'Valise', right: 'Suitcase' },
    { left: 'Billet', right: 'Ticket' },
    { left: 'Carte', right: 'Map' },
  ]},
  { id: 'fr-tr4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'J\'ai besoin d\'un ___ pour le voyage', correctAnswer: 'billet', options: ['billet', 'livre', 'eau', 'maison'] },
];

export const frenchTime = [
  { id: 'fr-tm1', type: 'multiple-choice', question: 'How do you say "What time is it?" in French?', options: ['Comment ça va?', 'Quelle heure est-il?', 'Où es-tu?', 'Quel âge as-tu?'], correctAnswer: 'Quelle heure est-il?' },
  { id: 'fr-tm2', type: 'speaking', question: 'Say "Il est trois heures"', correctAnswer: 'il est trois heures', spokenText: 'Il est trois heures', hint: 'It\'s three o\'clock' },
  { id: 'fr-tm3', type: 'match-pairs', question: 'Match time expressions', correctAnswer: 'matched', pairs: [
    { left: 'Matin', right: 'Morning' },
    { left: 'Après-midi', right: 'Afternoon' },
    { left: 'Soir', right: 'Evening' },
    { left: 'Minuit', right: 'Midnight' },
  ]},
  { id: 'fr-tm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'La réunion est à ___ heures', correctAnswer: 'cinq', options: ['cinq', 'bleu', 'grand', 'vite'] },
];

export const frenchColors = [
  { id: 'fr-cl1', type: 'multiple-choice', question: 'How do you say "blue" in French?', options: ['Rouge', 'Vert', 'Bleu', 'Jaune'], correctAnswer: 'Bleu' },
  { id: 'fr-cl2', type: 'speaking', question: 'Say "Ma couleur préférée est le rouge"', correctAnswer: 'ma couleur preferee est le rouge', spokenText: 'Ma couleur préférée est le rouge', hint: 'My favorite color is red' },
  { id: 'fr-cl3', type: 'match-pairs', question: 'Match colors in French', correctAnswer: 'matched', pairs: [
    { left: 'Jaune', right: 'Yellow' },
    { left: 'Vert', right: 'Green' },
    { left: 'Blanc', right: 'White' },
    { left: 'Noir', right: 'Black' },
  ]},
  { id: 'fr-cl4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Le ciel est ___', correctAnswer: 'bleu', options: ['bleu', 'rouge', 'vert', 'noir'] },
];

export const frenchHobbies = [
  { id: 'fr-hb1', type: 'multiple-choice', question: 'How do you say "to dance" in French?', options: ['Chanter', 'Danser', 'Nager', 'Lire'], correctAnswer: 'Danser' },
  { id: 'fr-hb2', type: 'speaking', question: 'Say "J\'aime jouer de la musique"', correctAnswer: 'j aime jouer de la musique', spokenText: 'J\'aime jouer de la musique', hint: 'I like to play music' },
  { id: 'fr-hb3', type: 'match-pairs', question: 'Match hobbies in French', correctAnswer: 'matched', pairs: [
    { left: 'Nager', right: 'To swim' },
    { left: 'Cuisiner', right: 'To cook' },
    { left: 'Peindre', right: 'To paint' },
    { left: 'Chanter', right: 'To sing' },
  ]},
  { id: 'fr-hb4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'J\'aime ___ pendant mon temps libre', correctAnswer: 'lire', options: ['lire', 'travailler', 'dormir', 'pleurer'] },
];

// ============ GERMAN LEVEL 3 ============

export const germanTravel = [
  { id: 'de-tr1', type: 'multiple-choice', question: 'How do you say "airport" in German?', options: ['Bahnhof', 'Flughafen', 'Hotel', 'Hafen'], correctAnswer: 'Flughafen' },
  { id: 'de-tr2', type: 'speaking', question: 'Say "Wo ist das Hotel?"', correctAnswer: 'wo ist das hotel', spokenText: 'Wo ist das Hotel?', hint: 'Where is the hotel?' },
  { id: 'de-tr3', type: 'match-pairs', question: 'Match German travel words', correctAnswer: 'matched', pairs: [
    { left: 'Reisepass', right: 'Passport' },
    { left: 'Koffer', right: 'Suitcase' },
    { left: 'Fahrkarte', right: 'Ticket' },
    { left: 'Karte', right: 'Map' },
  ]},
  { id: 'de-tr4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Ich brauche eine ___ für die Reise', correctAnswer: 'Fahrkarte', options: ['Fahrkarte', 'Buch', 'Wasser', 'Haus'] },
];

export const germanTime = [
  { id: 'de-tm1', type: 'multiple-choice', question: 'How do you say "What time is it?" in German?', options: ['Wie geht es dir?', 'Wie spät ist es?', 'Wo bist du?', 'Wie alt bist du?'], correctAnswer: 'Wie spät ist es?' },
  { id: 'de-tm2', type: 'speaking', question: 'Say "Es ist drei Uhr"', correctAnswer: 'es ist drei uhr', spokenText: 'Es ist drei Uhr', hint: 'It\'s three o\'clock' },
  { id: 'de-tm3', type: 'match-pairs', question: 'Match time expressions', correctAnswer: 'matched', pairs: [
    { left: 'Morgen', right: 'Morning' },
    { left: 'Nachmittag', right: 'Afternoon' },
    { left: 'Abend', right: 'Evening' },
    { left: 'Mitternacht', right: 'Midnight' },
  ]},
  { id: 'de-tm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Das Treffen ist um ___ Uhr', correctAnswer: 'fünf', options: ['fünf', 'blau', 'groß', 'schnell'] },
];

export const germanColors = [
  { id: 'de-cl1', type: 'multiple-choice', question: 'How do you say "green" in German?', options: ['Rot', 'Grün', 'Blau', 'Gelb'], correctAnswer: 'Grün' },
  { id: 'de-cl2', type: 'speaking', question: 'Say "Meine Lieblingsfarbe ist blau"', correctAnswer: 'meine lieblingsfarbe ist blau', spokenText: 'Meine Lieblingsfarbe ist blau', hint: 'My favorite color is blue' },
  { id: 'de-cl3', type: 'match-pairs', question: 'Match colors in German', correctAnswer: 'matched', pairs: [
    { left: 'Gelb', right: 'Yellow' },
    { left: 'Grün', right: 'Green' },
    { left: 'Weiß', right: 'White' },
    { left: 'Schwarz', right: 'Black' },
  ]},
  { id: 'de-cl4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Der Himmel ist ___', correctAnswer: 'blau', options: ['blau', 'rot', 'grün', 'schwarz'] },
];

export const germanHobbies = [
  { id: 'de-hb1', type: 'multiple-choice', question: 'How do you say "to swim" in German?', options: ['Lesen', 'Schwimmen', 'Tanzen', 'Singen'], correctAnswer: 'Schwimmen' },
  { id: 'de-hb2', type: 'speaking', question: 'Say "Ich spiele gern Musik"', correctAnswer: 'ich spiele gern musik', spokenText: 'Ich spiele gern Musik', hint: 'I like to play music' },
  { id: 'de-hb3', type: 'match-pairs', question: 'Match hobbies in German', correctAnswer: 'matched', pairs: [
    { left: 'Schwimmen', right: 'To swim' },
    { left: 'Kochen', right: 'To cook' },
    { left: 'Malen', right: 'To paint' },
    { left: 'Singen', right: 'To sing' },
  ]},
  { id: 'de-hb4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Ich ___ gern in meiner Freizeit', correctAnswer: 'lese', options: ['lese', 'arbeite', 'schlafe', 'weine'] },
];

// ============ ITALIAN LEVEL 3 ============

export const italianTravel = [
  { id: 'it-tr1', type: 'multiple-choice', question: 'How do you say "airport" in Italian?', options: ['Stazione', 'Aeroporto', 'Albergo', 'Porto'], correctAnswer: 'Aeroporto' },
  { id: 'it-tr2', type: 'speaking', question: 'Say "Dov\'è l\'albergo?"', correctAnswer: 'dov e l albergo', spokenText: 'Dov\'è l\'albergo?', hint: 'Where is the hotel?' },
  { id: 'it-tr3', type: 'match-pairs', question: 'Match Italian travel words', correctAnswer: 'matched', pairs: [
    { left: 'Passaporto', right: 'Passport' },
    { left: 'Valigia', right: 'Suitcase' },
    { left: 'Biglietto', right: 'Ticket' },
    { left: 'Mappa', right: 'Map' },
  ]},
  { id: 'it-tr4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Ho bisogno di un ___ per il viaggio', correctAnswer: 'biglietto', options: ['biglietto', 'libro', 'acqua', 'casa'] },
];

export const italianTime = [
  { id: 'it-tm1', type: 'multiple-choice', question: 'How do you say "What time is it?" in Italian?', options: ['Come stai?', 'Che ore sono?', 'Dove sei?', 'Quanti anni hai?'], correctAnswer: 'Che ore sono?' },
  { id: 'it-tm2', type: 'speaking', question: 'Say "Sono le tre"', correctAnswer: 'sono le tre', spokenText: 'Sono le tre', hint: 'It\'s three o\'clock' },
  { id: 'it-tm3', type: 'match-pairs', question: 'Match time expressions', correctAnswer: 'matched', pairs: [
    { left: 'Mattina', right: 'Morning' },
    { left: 'Pomeriggio', right: 'Afternoon' },
    { left: 'Sera', right: 'Evening' },
    { left: 'Mezzanotte', right: 'Midnight' },
  ]},
  { id: 'it-tm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'La riunione è alle ___', correctAnswer: 'cinque', options: ['cinque', 'blu', 'grande', 'veloce'] },
];

export const italianColors = [
  { id: 'it-cl1', type: 'multiple-choice', question: 'How do you say "yellow" in Italian?', options: ['Rosso', 'Verde', 'Blu', 'Giallo'], correctAnswer: 'Giallo' },
  { id: 'it-cl2', type: 'speaking', question: 'Say "Il mio colore preferito è il verde"', correctAnswer: 'il mio colore preferito e il verde', spokenText: 'Il mio colore preferito è il verde', hint: 'My favorite color is green' },
  { id: 'it-cl3', type: 'match-pairs', question: 'Match colors in Italian', correctAnswer: 'matched', pairs: [
    { left: 'Giallo', right: 'Yellow' },
    { left: 'Verde', right: 'Green' },
    { left: 'Bianco', right: 'White' },
    { left: 'Nero', right: 'Black' },
  ]},
  { id: 'it-cl4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Il cielo è ___', correctAnswer: 'blu', options: ['blu', 'rosso', 'verde', 'nero'] },
];

export const italianHobbies = [
  { id: 'it-hb1', type: 'multiple-choice', question: 'How do you say "to sing" in Italian?', options: ['Leggere', 'Cantare', 'Nuotare', 'Ballare'], correctAnswer: 'Cantare' },
  { id: 'it-hb2', type: 'speaking', question: 'Say "Mi piace cucinare"', correctAnswer: 'mi piace cucinare', spokenText: 'Mi piace cucinare', hint: 'I like to cook' },
  { id: 'it-hb3', type: 'match-pairs', question: 'Match hobbies in Italian', correctAnswer: 'matched', pairs: [
    { left: 'Nuotare', right: 'To swim' },
    { left: 'Cucinare', right: 'To cook' },
    { left: 'Dipingere', right: 'To paint' },
    { left: 'Cantare', right: 'To sing' },
  ]},
  { id: 'it-hb4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Mi piace ___ nel tempo libero', correctAnswer: 'leggere', options: ['leggere', 'lavorare', 'dormire', 'piangere'] },
];

// ============ PORTUGUESE LEVEL 3 ============

export const portugueseTravel = [
  { id: 'pt-tr1', type: 'multiple-choice', question: 'How do you say "airport" in Portuguese?', options: ['Estação', 'Aeroporto', 'Hotel', 'Porto'], correctAnswer: 'Aeroporto' },
  { id: 'pt-tr2', type: 'speaking', question: 'Say "Onde fica o hotel?"', correctAnswer: 'onde fica o hotel', spokenText: 'Onde fica o hotel?', hint: 'Where is the hotel?' },
  { id: 'pt-tr3', type: 'match-pairs', question: 'Match Portuguese travel words', correctAnswer: 'matched', pairs: [
    { left: 'Passaporte', right: 'Passport' },
    { left: 'Mala', right: 'Suitcase' },
    { left: 'Bilhete', right: 'Ticket' },
    { left: 'Mapa', right: 'Map' },
  ]},
  { id: 'pt-tr4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Preciso de um ___ para a viagem', correctAnswer: 'bilhete', options: ['bilhete', 'livro', 'água', 'casa'] },
];

export const portugueseTime = [
  { id: 'pt-tm1', type: 'multiple-choice', question: 'How do you say "What time is it?" in Portuguese?', options: ['Como vai?', 'Que horas são?', 'Onde está?', 'Quantos anos tem?'], correctAnswer: 'Que horas são?' },
  { id: 'pt-tm2', type: 'speaking', question: 'Say "São três horas"', correctAnswer: 'sao tres horas', spokenText: 'São três horas', hint: 'It\'s three o\'clock' },
  { id: 'pt-tm3', type: 'match-pairs', question: 'Match time expressions', correctAnswer: 'matched', pairs: [
    { left: 'Manhã', right: 'Morning' },
    { left: 'Tarde', right: 'Afternoon' },
    { left: 'Noite', right: 'Night' },
    { left: 'Meio-dia', right: 'Noon' },
  ]},
  { id: 'pt-tm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'A reunião é às ___', correctAnswer: 'cinco', options: ['cinco', 'azul', 'grande', 'rápido'] },
];

export const portugueseColors = [
  { id: 'pt-cl1', type: 'multiple-choice', question: 'How do you say "white" in Portuguese?', options: ['Vermelho', 'Verde', 'Branco', 'Preto'], correctAnswer: 'Branco' },
  { id: 'pt-cl2', type: 'speaking', question: 'Say "Minha cor favorita é azul"', correctAnswer: 'minha cor favorita e azul', spokenText: 'Minha cor favorita é azul', hint: 'My favorite color is blue' },
  { id: 'pt-cl3', type: 'match-pairs', question: 'Match colors in Portuguese', correctAnswer: 'matched', pairs: [
    { left: 'Amarelo', right: 'Yellow' },
    { left: 'Verde', right: 'Green' },
    { left: 'Branco', right: 'White' },
    { left: 'Preto', right: 'Black' },
  ]},
  { id: 'pt-cl4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'O céu é ___', correctAnswer: 'azul', options: ['azul', 'vermelho', 'verde', 'preto'] },
];

export const portugueseHobbies = [
  { id: 'pt-hb1', type: 'multiple-choice', question: 'How do you say "to cook" in Portuguese?', options: ['Ler', 'Cozinhar', 'Nadar', 'Dançar'], correctAnswer: 'Cozinhar' },
  { id: 'pt-hb2', type: 'speaking', question: 'Say "Eu gosto de dançar"', correctAnswer: 'eu gosto de dancar', spokenText: 'Eu gosto de dançar', hint: 'I like to dance' },
  { id: 'pt-hb3', type: 'match-pairs', question: 'Match hobbies in Portuguese', correctAnswer: 'matched', pairs: [
    { left: 'Nadar', right: 'To swim' },
    { left: 'Cozinhar', right: 'To cook' },
    { left: 'Pintar', right: 'To paint' },
    { left: 'Cantar', right: 'To sing' },
  ]},
  { id: 'pt-hb4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Gosto de ___ no meu tempo livre', correctAnswer: 'ler', options: ['ler', 'trabalhar', 'dormir', 'chorar'] },
];

// ============ JAPANESE LEVEL 3 ============

export const japaneseTravel = [
  { id: 'ja-tr1', type: 'multiple-choice', question: 'How do you say "airport" in Japanese?', options: ['駅 (Eki)', '空港 (Kūkō)', 'ホテル (Hoteru)', '港 (Minato)'], correctAnswer: '空港 (Kūkō)' },
  { id: 'ja-tr2', type: 'speaking', question: 'Say "ホテルはどこですか?"', correctAnswer: 'hoteru wa doko desu ka', spokenText: 'ホテルはどこですか?', hint: 'Where is the hotel?' },
  { id: 'ja-tr3', type: 'match-pairs', question: 'Match Japanese travel words', correctAnswer: 'matched', pairs: [
    { left: 'パスポート', right: 'Passport' },
    { left: 'スーツケース', right: 'Suitcase' },
    { left: '切符', right: 'Ticket' },
    { left: '地図', right: 'Map' },
  ]},
  { id: 'ja-tr4', type: 'fill-blank', question: 'Complete the sentence', sentence: '旅行に___が必要です', correctAnswer: '切符', options: ['切符', '本', '水', '家'] },
];

export const japaneseTime = [
  { id: 'ja-tm1', type: 'multiple-choice', question: 'How do you say "What time is it?" in Japanese?', options: ['お元気ですか?', '今何時ですか?', 'どこにいますか?', '何歳ですか?'], correctAnswer: '今何時ですか?' },
  { id: 'ja-tm2', type: 'speaking', question: 'Say "三時です"', correctAnswer: 'sanji desu', spokenText: '三時です', hint: 'It\'s three o\'clock' },
  { id: 'ja-tm3', type: 'match-pairs', question: 'Match time expressions', correctAnswer: 'matched', pairs: [
    { left: '朝', right: 'Morning' },
    { left: '午後', right: 'Afternoon' },
    { left: '夜', right: 'Night' },
    { left: '正午', right: 'Noon' },
  ]},
  { id: 'ja-tm4', type: 'fill-blank', question: 'Complete the sentence', sentence: '会議は___時です', correctAnswer: '五', options: ['五', '青', '大きい', '速い'] },
];

export const japaneseColors = [
  { id: 'ja-cl1', type: 'multiple-choice', question: 'How do you say "red" in Japanese?', options: ['青 (Ao)', '緑 (Midori)', '赤 (Aka)', '黄色 (Kiiro)'], correctAnswer: '赤 (Aka)' },
  { id: 'ja-cl2', type: 'speaking', question: 'Say "私の好きな色は青です"', correctAnswer: 'watashi no sukina iro wa ao desu', spokenText: '私の好きな色は青です', hint: 'My favorite color is blue' },
  { id: 'ja-cl3', type: 'match-pairs', question: 'Match colors in Japanese', correctAnswer: 'matched', pairs: [
    { left: '黄色', right: 'Yellow' },
    { left: '緑', right: 'Green' },
    { left: '白', right: 'White' },
    { left: '黒', right: 'Black' },
  ]},
  { id: 'ja-cl4', type: 'fill-blank', question: 'Complete the sentence', sentence: '空は___です', correctAnswer: '青', options: ['青', '赤', '緑', '黒'] },
];

export const japaneseHobbies = [
  { id: 'ja-hb1', type: 'multiple-choice', question: 'How do you say "to read" in Japanese?', options: ['書く', '読む', '泳ぐ', '踊る'], correctAnswer: '読む' },
  { id: 'ja-hb2', type: 'speaking', question: 'Say "音楽を聴くのが好きです"', correctAnswer: 'ongaku wo kiku no ga suki desu', spokenText: '音楽を聴くのが好きです', hint: 'I like listening to music' },
  { id: 'ja-hb3', type: 'match-pairs', question: 'Match hobbies in Japanese', correctAnswer: 'matched', pairs: [
    { left: '泳ぐ', right: 'To swim' },
    { left: '料理する', right: 'To cook' },
    { left: '絵を描く', right: 'To paint' },
    { left: '歌う', right: 'To sing' },
  ]},
  { id: 'ja-hb4', type: 'fill-blank', question: 'Complete the sentence', sentence: '暇な時間に___のが好きです', correctAnswer: '読む', options: ['読む', '働く', '寝る', '泣く'] },
];

// ============ KOREAN LEVEL 3 ============

export const koreanTravel = [
  { id: 'ko-tr1', type: 'multiple-choice', question: 'How do you say "airport" in Korean?', options: ['역', '공항', '호텔', '항구'], correctAnswer: '공항' },
  { id: 'ko-tr2', type: 'speaking', question: 'Say "호텔이 어디에 있어요?"', correctAnswer: 'hotel i eodie isseoyo', spokenText: '호텔이 어디에 있어요?', hint: 'Where is the hotel?' },
  { id: 'ko-tr3', type: 'match-pairs', question: 'Match Korean travel words', correctAnswer: 'matched', pairs: [
    { left: '여권', right: 'Passport' },
    { left: '여행 가방', right: 'Suitcase' },
    { left: '표', right: 'Ticket' },
    { left: '지도', right: 'Map' },
  ]},
  { id: 'ko-tr4', type: 'fill-blank', question: 'Complete the sentence', sentence: '여행에 ___이 필요해요', correctAnswer: '표', options: ['표', '책', '물', '집'] },
];

export const koreanTime = [
  { id: 'ko-tm1', type: 'multiple-choice', question: 'How do you say "What time is it?" in Korean?', options: ['어떻게 지내세요?', '지금 몇 시예요?', '어디에 있어요?', '몇 살이에요?'], correctAnswer: '지금 몇 시예요?' },
  { id: 'ko-tm2', type: 'speaking', question: 'Say "세 시예요"', correctAnswer: 'se si yeyo', spokenText: '세 시예요', hint: 'It\'s three o\'clock' },
  { id: 'ko-tm3', type: 'match-pairs', question: 'Match time expressions', correctAnswer: 'matched', pairs: [
    { left: '아침', right: 'Morning' },
    { left: '오후', right: 'Afternoon' },
    { left: '밤', right: 'Night' },
    { left: '정오', right: 'Noon' },
  ]},
  { id: 'ko-tm4', type: 'fill-blank', question: 'Complete the sentence', sentence: '회의는 ___ 시에 있어요', correctAnswer: '다섯', options: ['다섯', '파란', '큰', '빠른'] },
];

export const koreanColors = [
  { id: 'ko-cl1', type: 'multiple-choice', question: 'How do you say "blue" in Korean?', options: ['빨간색', '초록색', '파란색', '노란색'], correctAnswer: '파란색' },
  { id: 'ko-cl2', type: 'speaking', question: 'Say "제가 좋아하는 색은 초록색이에요"', correctAnswer: 'jega joahaneun saekeun choroksaegieyo', spokenText: '제가 좋아하는 색은 초록색이에요', hint: 'My favorite color is green' },
  { id: 'ko-cl3', type: 'match-pairs', question: 'Match colors in Korean', correctAnswer: 'matched', pairs: [
    { left: '노란색', right: 'Yellow' },
    { left: '초록색', right: 'Green' },
    { left: '흰색', right: 'White' },
    { left: '검은색', right: 'Black' },
  ]},
  { id: 'ko-cl4', type: 'fill-blank', question: 'Complete the sentence', sentence: '하늘은 ___이에요', correctAnswer: '파란색', options: ['파란색', '빨간색', '초록색', '검은색'] },
];

export const koreanHobbies = [
  { id: 'ko-hb1', type: 'multiple-choice', question: 'How do you say "to sing" in Korean?', options: ['읽다', '노래하다', '수영하다', '춤추다'], correctAnswer: '노래하다' },
  { id: 'ko-hb2', type: 'speaking', question: 'Say "저는 요리하는 것을 좋아해요"', correctAnswer: 'jeoneun yorihanun geoseul joahaeyo', spokenText: '저는 요리하는 것을 좋아해요', hint: 'I like cooking' },
  { id: 'ko-hb3', type: 'match-pairs', question: 'Match hobbies in Korean', correctAnswer: 'matched', pairs: [
    { left: '수영하다', right: 'To swim' },
    { left: '요리하다', right: 'To cook' },
    { left: '그림 그리다', right: 'To paint' },
    { left: '노래하다', right: 'To sing' },
  ]},
  { id: 'ko-hb4', type: 'fill-blank', question: 'Complete the sentence', sentence: '여가 시간에 ___는 것을 좋아해요', correctAnswer: '읽', options: ['읽', '일하', '자', '울'] },
];

// ============ CHINESE LEVEL 3 ============

export const chineseTravel = [
  { id: 'zh-tr1', type: 'multiple-choice', question: 'How do you say "airport" in Chinese?', options: ['火车站', '机场', '酒店', '港口'], correctAnswer: '机场' },
  { id: 'zh-tr2', type: 'speaking', question: 'Say "酒店在哪里?"', correctAnswer: 'jiudian zai nali', spokenText: '酒店在哪里?', hint: 'Where is the hotel?' },
  { id: 'zh-tr3', type: 'match-pairs', question: 'Match Chinese travel words', correctAnswer: 'matched', pairs: [
    { left: '护照', right: 'Passport' },
    { left: '行李箱', right: 'Suitcase' },
    { left: '票', right: 'Ticket' },
    { left: '地图', right: 'Map' },
  ]},
  { id: 'zh-tr4', type: 'fill-blank', question: 'Complete the sentence', sentence: '旅行需要___', correctAnswer: '票', options: ['票', '书', '水', '房子'] },
];

export const chineseTime = [
  { id: 'zh-tm1', type: 'multiple-choice', question: 'How do you say "What time is it?" in Chinese?', options: ['你好吗?', '现在几点?', '你在哪里?', '你几岁?'], correctAnswer: '现在几点?' },
  { id: 'zh-tm2', type: 'speaking', question: 'Say "现在三点"', correctAnswer: 'xianzai san dian', spokenText: '现在三点', hint: 'It\'s three o\'clock now' },
  { id: 'zh-tm3', type: 'match-pairs', question: 'Match time expressions', correctAnswer: 'matched', pairs: [
    { left: '早上', right: 'Morning' },
    { left: '下午', right: 'Afternoon' },
    { left: '晚上', right: 'Night' },
    { left: '中午', right: 'Noon' },
  ]},
  { id: 'zh-tm4', type: 'fill-blank', question: 'Complete the sentence', sentence: '会议在___点', correctAnswer: '五', options: ['五', '蓝', '大', '快'] },
];

export const chineseColors = [
  { id: 'zh-cl1', type: 'multiple-choice', question: 'How do you say "red" in Chinese?', options: ['蓝色', '绿色', '红色', '黄色'], correctAnswer: '红色' },
  { id: 'zh-cl2', type: 'speaking', question: 'Say "我最喜欢的颜色是蓝色"', correctAnswer: 'wo zui xihuan de yanse shi lanse', spokenText: '我最喜欢的颜色是蓝色', hint: 'My favorite color is blue' },
  { id: 'zh-cl3', type: 'match-pairs', question: 'Match colors in Chinese', correctAnswer: 'matched', pairs: [
    { left: '黄色', right: 'Yellow' },
    { left: '绿色', right: 'Green' },
    { left: '白色', right: 'White' },
    { left: '黑色', right: 'Black' },
  ]},
  { id: 'zh-cl4', type: 'fill-blank', question: 'Complete the sentence', sentence: '天空是___的', correctAnswer: '蓝色', options: ['蓝色', '红色', '绿色', '黑色'] },
];

export const chineseHobbies = [
  { id: 'zh-hb1', type: 'multiple-choice', question: 'How do you say "to dance" in Chinese?', options: ['读书', '跳舞', '游泳', '唱歌'], correctAnswer: '跳舞' },
  { id: 'zh-hb2', type: 'speaking', question: 'Say "我喜欢听音乐"', correctAnswer: 'wo xihuan ting yinyue', spokenText: '我喜欢听音乐', hint: 'I like listening to music' },
  { id: 'zh-hb3', type: 'match-pairs', question: 'Match hobbies in Chinese', correctAnswer: 'matched', pairs: [
    { left: '游泳', right: 'To swim' },
    { left: '做饭', right: 'To cook' },
    { left: '画画', right: 'To paint' },
    { left: '唱歌', right: 'To sing' },
  ]},
  { id: 'zh-hb4', type: 'fill-blank', question: 'Complete the sentence', sentence: '我喜欢在空闲时间___', correctAnswer: '读书', options: ['读书', '工作', '睡觉', '哭'] },
];
