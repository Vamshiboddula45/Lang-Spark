// JavaScript version - no type imports needed

// ============ LEVEL 2 - ANIMALS ============

export const englishUSAnimals = [
  { id: 'en-us-a1', type: 'multiple-choice', question: 'What is a "puppy"?', options: ['A baby cat', 'A baby dog', 'A baby bird', 'A baby fish'], correctAnswer: 'A baby dog' },
  { id: 'en-us-a2', type: 'speaking', question: 'Say "Elephant"', correctAnswer: 'elephant', spokenText: 'Elephant', hint: 'Large gray animal with a trunk' },
  { id: 'en-us-a3', type: 'translation', question: 'What animal says "meow"?', options: ['Dog', 'Cat', 'Bird', 'Horse'], correctAnswer: 'Cat' },
  { id: 'en-us-a4', type: 'match-pairs', question: 'Match animals with their sounds', correctAnswer: 'matched', pairs: [
    { left: 'Dog', right: 'Bark' },
    { left: 'Cat', right: 'Meow' },
    { left: 'Cow', right: 'Moo' },
    { left: 'Bird', right: 'Chirp' },
  ]},
  { id: 'en-us-a5', type: 'fill-blank', question: 'Complete the sentence', sentence: 'The ___ lives in the ocean', correctAnswer: 'fish', options: ['fish', 'dog', 'cat', 'bird'] },
];

export const englishUSClothes = [
  { id: 'en-us-c1', type: 'multiple-choice', question: 'What do you wear on your feet?', options: ['Hat', 'Gloves', 'Shoes', 'Shirt'], correctAnswer: 'Shoes' },
  { id: 'en-us-c2', type: 'speaking', question: 'Say "T-shirt"', correctAnswer: 't shirt', spokenText: 'T-shirt', hint: 'Casual top wear' },
  { id: 'en-us-c3', type: 'match-pairs', question: 'Match clothing items with body parts', correctAnswer: 'matched', pairs: [
    { left: 'Hat', right: 'Head' },
    { left: 'Gloves', right: 'Hands' },
    { left: 'Shoes', right: 'Feet' },
    { left: 'Belt', right: 'Waist' },
  ]},
  { id: 'en-us-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'I wear a ___ when it rains', correctAnswer: 'jacket', options: ['jacket', 'shorts', 'sandals', 'hat'] },
];

export const englishUSWeather = [
  { id: 'en-us-w1', type: 'multiple-choice', question: 'What falls from the sky when it rains?', options: ['Snow', 'Water drops', 'Leaves', 'Sunshine'], correctAnswer: 'Water drops' },
  { id: 'en-us-w2', type: 'speaking', question: 'Say "It is sunny today"', correctAnswer: 'it is sunny today', spokenText: 'It is sunny today', hint: 'Describe good weather' },
  { id: 'en-us-w3', type: 'match-pairs', question: 'Match weather with activities', correctAnswer: 'matched', pairs: [
    { left: 'Sunny', right: 'Beach' },
    { left: 'Rainy', right: 'Umbrella' },
    { left: 'Snowy', right: 'Skiing' },
    { left: 'Windy', right: 'Kite flying' },
  ]},
  { id: 'en-us-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'The ___ is shining bright', correctAnswer: 'sun', options: ['sun', 'moon', 'rain', 'cloud'] },
];

export const englishUSFamily = [
  { id: 'en-us-fm1', type: 'multiple-choice', question: 'Who is your mother\'s mother?', options: ['Aunt', 'Sister', 'Grandmother', 'Cousin'], correctAnswer: 'Grandmother' },
  { id: 'en-us-fm2', type: 'speaking', question: 'Say "My family is wonderful"', correctAnswer: 'my family is wonderful', spokenText: 'My family is wonderful', hint: 'Express love for family' },
  { id: 'en-us-fm3', type: 'match-pairs', question: 'Match family relationships', correctAnswer: 'matched', pairs: [
    { left: 'Father', right: 'Dad' },
    { left: 'Mother', right: 'Mom' },
    { left: 'Brother', right: 'Sibling (male)' },
    { left: 'Sister', right: 'Sibling (female)' },
  ]},
  { id: 'en-us-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'My ___ is my father\'s brother', correctAnswer: 'uncle', options: ['uncle', 'aunt', 'cousin', 'nephew'] },
];

// ============ SPANISH LEVEL 2 ============

export const spanishAnimals = [
  { id: 'es-a1', type: 'multiple-choice', question: 'How do you say "dog" in Spanish?', options: ['Gato', 'Perro', 'Pájaro', 'Pez'], correctAnswer: 'Perro' },
  { id: 'es-a2', type: 'speaking', question: 'Say "Gato" (Cat)', correctAnswer: 'gato', spokenText: 'Gato', hint: 'Pronounced "GAH-toh"' },
  { id: 'es-a3', type: 'translation', question: 'What is "caballo" in English?', options: ['Cow', 'Horse', 'Pig', 'Sheep'], correctAnswer: 'Horse' },
  { id: 'es-a4', type: 'match-pairs', question: 'Match Spanish animals with English', correctAnswer: 'matched', pairs: [
    { left: 'Perro', right: 'Dog' },
    { left: 'Gato', right: 'Cat' },
    { left: 'Pájaro', right: 'Bird' },
    { left: 'Pez', right: 'Fish' },
  ]},
  { id: 'es-a5', type: 'fill-blank', question: 'Complete the sentence', sentence: 'El ___ tiene plumas', correctAnswer: 'pájaro', options: ['pájaro', 'perro', 'gato', 'pez'] },
];

export const spanishClothes = [
  { id: 'es-c1', type: 'multiple-choice', question: 'How do you say "shirt" in Spanish?', options: ['Pantalón', 'Camisa', 'Zapatos', 'Sombrero'], correctAnswer: 'Camisa' },
  { id: 'es-c2', type: 'speaking', question: 'Say "Zapatos" (Shoes)', correctAnswer: 'zapatos', spokenText: 'Zapatos', hint: 'Pronounced "sah-PAH-tohs"' },
  { id: 'es-c3', type: 'match-pairs', question: 'Match Spanish clothes with English', correctAnswer: 'matched', pairs: [
    { left: 'Camisa', right: 'Shirt' },
    { left: 'Pantalón', right: 'Pants' },
    { left: 'Zapatos', right: 'Shoes' },
    { left: 'Sombrero', right: 'Hat' },
  ]},
  { id: 'es-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Me pongo los ___ en los pies', correctAnswer: 'zapatos', options: ['zapatos', 'guantes', 'sombrero', 'camisa'] },
];

export const spanishWeather = [
  { id: 'es-w1', type: 'multiple-choice', question: 'How do you say "sunny" in Spanish?', options: ['Lluvioso', 'Soleado', 'Nublado', 'Ventoso'], correctAnswer: 'Soleado' },
  { id: 'es-w2', type: 'speaking', question: 'Say "Hace calor" (It\'s hot)', correctAnswer: 'hace calor', spokenText: 'Hace calor', hint: 'Pronounced "AH-say kah-LOR"' },
  { id: 'es-w3', type: 'match-pairs', question: 'Match Spanish weather with English', correctAnswer: 'matched', pairs: [
    { left: 'Soleado', right: 'Sunny' },
    { left: 'Lluvioso', right: 'Rainy' },
    { left: 'Nublado', right: 'Cloudy' },
    { left: 'Nevando', right: 'Snowing' },
  ]},
  { id: 'es-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Hoy está ___', correctAnswer: 'soleado', options: ['soleado', 'noche', 'comida', 'agua'] },
];

export const spanishFamily = [
  { id: 'es-fm1', type: 'multiple-choice', question: 'How do you say "mother" in Spanish?', options: ['Padre', 'Madre', 'Hermano', 'Abuelo'], correctAnswer: 'Madre' },
  { id: 'es-fm2', type: 'speaking', question: 'Say "Mi familia" (My family)', correctAnswer: 'mi familia', spokenText: 'Mi familia', hint: 'Pronounced "mee fah-MEE-lee-ah"' },
  { id: 'es-fm3', type: 'match-pairs', question: 'Match Spanish family with English', correctAnswer: 'matched', pairs: [
    { left: 'Padre', right: 'Father' },
    { left: 'Madre', right: 'Mother' },
    { left: 'Hermano', right: 'Brother' },
    { left: 'Hermana', right: 'Sister' },
  ]},
  { id: 'es-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Mi ___ es el padre de mi padre', correctAnswer: 'abuelo', options: ['abuelo', 'tío', 'primo', 'hermano'] },
];

// ============ FRENCH LEVEL 2 ============

export const frenchAnimals = [
  { id: 'fr-a1', type: 'multiple-choice', question: 'How do you say "cat" in French?', options: ['Chien', 'Chat', 'Oiseau', 'Poisson'], correctAnswer: 'Chat' },
  { id: 'fr-a2', type: 'speaking', question: 'Say "Chien" (Dog)', correctAnswer: 'chien', spokenText: 'Chien', hint: 'Pronounced "shee-YEN"' },
  { id: 'fr-a3', type: 'translation', question: 'What is "cheval" in English?', options: ['Cow', 'Horse', 'Pig', 'Sheep'], correctAnswer: 'Horse' },
  { id: 'fr-a4', type: 'match-pairs', question: 'Match French animals with English', correctAnswer: 'matched', pairs: [
    { left: 'Chien', right: 'Dog' },
    { left: 'Chat', right: 'Cat' },
    { left: 'Oiseau', right: 'Bird' },
    { left: 'Poisson', right: 'Fish' },
  ]},
  { id: 'fr-a5', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Le ___ nage dans l\'eau', correctAnswer: 'poisson', options: ['poisson', 'chien', 'chat', 'oiseau'] },
];

export const frenchClothes = [
  { id: 'fr-c1', type: 'multiple-choice', question: 'How do you say "dress" in French?', options: ['Pantalon', 'Robe', 'Chemise', 'Chapeau'], correctAnswer: 'Robe' },
  { id: 'fr-c2', type: 'speaking', question: 'Say "Chaussures" (Shoes)', correctAnswer: 'chaussures', spokenText: 'Chaussures', hint: 'Pronounced "shoh-SOOR"' },
  { id: 'fr-c3', type: 'match-pairs', question: 'Match French clothes with English', correctAnswer: 'matched', pairs: [
    { left: 'Chemise', right: 'Shirt' },
    { left: 'Pantalon', right: 'Pants' },
    { left: 'Chaussures', right: 'Shoes' },
    { left: 'Chapeau', right: 'Hat' },
  ]},
  { id: 'fr-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Je porte une ___ élégante', correctAnswer: 'robe', options: ['robe', 'chaussure', 'chapeau', 'gant'] },
];

export const frenchWeather = [
  { id: 'fr-w1', type: 'multiple-choice', question: 'How do you say "rain" in French?', options: ['Soleil', 'Pluie', 'Neige', 'Vent'], correctAnswer: 'Pluie' },
  { id: 'fr-w2', type: 'speaking', question: 'Say "Il fait beau" (It\'s nice weather)', correctAnswer: 'il fait beau', spokenText: 'Il fait beau', hint: 'Pronounced "eel feh BOH"' },
  { id: 'fr-w3', type: 'match-pairs', question: 'Match French weather with English', correctAnswer: 'matched', pairs: [
    { left: 'Soleil', right: 'Sun' },
    { left: 'Pluie', right: 'Rain' },
    { left: 'Neige', right: 'Snow' },
    { left: 'Nuage', right: 'Cloud' },
  ]},
  { id: 'fr-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Il y a du ___ aujourd\'hui', correctAnswer: 'soleil', options: ['soleil', 'table', 'livre', 'eau'] },
];

export const frenchFamily = [
  { id: 'fr-fm1', type: 'multiple-choice', question: 'How do you say "father" in French?', options: ['Mère', 'Père', 'Frère', 'Sœur'], correctAnswer: 'Père' },
  { id: 'fr-fm2', type: 'speaking', question: 'Say "Ma famille" (My family)', correctAnswer: 'ma famille', spokenText: 'Ma famille', hint: 'Pronounced "mah fah-MEE"' },
  { id: 'fr-fm3', type: 'match-pairs', question: 'Match French family with English', correctAnswer: 'matched', pairs: [
    { left: 'Père', right: 'Father' },
    { left: 'Mère', right: 'Mother' },
    { left: 'Frère', right: 'Brother' },
    { left: 'Sœur', right: 'Sister' },
  ]},
  { id: 'fr-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Ma ___ est la mère de ma mère', correctAnswer: 'grand-mère', options: ['grand-mère', 'tante', 'cousine', 'sœur'] },
];

// ============ GERMAN LEVEL 2 ============

export const germanAnimals = [
  { id: 'de-a1', type: 'multiple-choice', question: 'How do you say "dog" in German?', options: ['Katze', 'Hund', 'Vogel', 'Fisch'], correctAnswer: 'Hund' },
  { id: 'de-a2', type: 'speaking', question: 'Say "Katze" (Cat)', correctAnswer: 'katze', spokenText: 'Katze', hint: 'Pronounced "KAHT-seh"' },
  { id: 'de-a3', type: 'translation', question: 'What is "Pferd" in English?', options: ['Cow', 'Horse', 'Pig', 'Sheep'], correctAnswer: 'Horse' },
  { id: 'de-a4', type: 'match-pairs', question: 'Match German animals with English', correctAnswer: 'matched', pairs: [
    { left: 'Hund', right: 'Dog' },
    { left: 'Katze', right: 'Cat' },
    { left: 'Vogel', right: 'Bird' },
    { left: 'Fisch', right: 'Fish' },
  ]},
  { id: 'de-a5', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Der ___ bellt laut', correctAnswer: 'Hund', options: ['Hund', 'Katze', 'Vogel', 'Fisch'] },
];

export const germanClothes = [
  { id: 'de-c1', type: 'multiple-choice', question: 'How do you say "jacket" in German?', options: ['Hose', 'Jacke', 'Hemd', 'Hut'], correctAnswer: 'Jacke' },
  { id: 'de-c2', type: 'speaking', question: 'Say "Schuhe" (Shoes)', correctAnswer: 'schuhe', spokenText: 'Schuhe', hint: 'Pronounced "SHOO-eh"' },
  { id: 'de-c3', type: 'match-pairs', question: 'Match German clothes with English', correctAnswer: 'matched', pairs: [
    { left: 'Hemd', right: 'Shirt' },
    { left: 'Hose', right: 'Pants' },
    { left: 'Schuhe', right: 'Shoes' },
    { left: 'Hut', right: 'Hat' },
  ]},
  { id: 'de-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Ich trage eine warme ___', correctAnswer: 'Jacke', options: ['Jacke', 'Schuh', 'Hut', 'Handschuh'] },
];

export const germanWeather = [
  { id: 'de-w1', type: 'multiple-choice', question: 'How do you say "cold" in German?', options: ['Heiß', 'Kalt', 'Warm', 'Kühl'], correctAnswer: 'Kalt' },
  { id: 'de-w2', type: 'speaking', question: 'Say "Es regnet" (It\'s raining)', correctAnswer: 'es regnet', spokenText: 'Es regnet', hint: 'Pronounced "es REG-net"' },
  { id: 'de-w3', type: 'match-pairs', question: 'Match German weather with English', correctAnswer: 'matched', pairs: [
    { left: 'Sonne', right: 'Sun' },
    { left: 'Regen', right: 'Rain' },
    { left: 'Schnee', right: 'Snow' },
    { left: 'Wolke', right: 'Cloud' },
  ]},
  { id: 'de-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Die ___ scheint heute', correctAnswer: 'Sonne', options: ['Sonne', 'Tisch', 'Buch', 'Haus'] },
];

export const germanFamily = [
  { id: 'de-fm1', type: 'multiple-choice', question: 'How do you say "mother" in German?', options: ['Vater', 'Mutter', 'Bruder', 'Schwester'], correctAnswer: 'Mutter' },
  { id: 'de-fm2', type: 'speaking', question: 'Say "Meine Familie" (My family)', correctAnswer: 'meine familie', spokenText: 'Meine Familie', hint: 'Pronounced "MY-neh fah-MEE-lee-eh"' },
  { id: 'de-fm3', type: 'match-pairs', question: 'Match German family with English', correctAnswer: 'matched', pairs: [
    { left: 'Vater', right: 'Father' },
    { left: 'Mutter', right: 'Mother' },
    { left: 'Bruder', right: 'Brother' },
    { left: 'Schwester', right: 'Sister' },
  ]},
  { id: 'de-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Mein ___ ist der Bruder meines Vaters', correctAnswer: 'Onkel', options: ['Onkel', 'Tante', 'Cousin', 'Neffe'] },
];

// ============ ITALIAN LEVEL 2 ============

export const italianAnimals = [
  { id: 'it-a1', type: 'multiple-choice', question: 'How do you say "dog" in Italian?', options: ['Gatto', 'Cane', 'Uccello', 'Pesce'], correctAnswer: 'Cane' },
  { id: 'it-a2', type: 'speaking', question: 'Say "Gatto" (Cat)', correctAnswer: 'gatto', spokenText: 'Gatto', hint: 'Pronounced "GAH-toh"' },
  { id: 'it-a3', type: 'match-pairs', question: 'Match Italian animals with English', correctAnswer: 'matched', pairs: [
    { left: 'Cane', right: 'Dog' },
    { left: 'Gatto', right: 'Cat' },
    { left: 'Uccello', right: 'Bird' },
    { left: 'Pesce', right: 'Fish' },
  ]},
  { id: 'it-a4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Il ___ vola nel cielo', correctAnswer: 'uccello', options: ['uccello', 'cane', 'gatto', 'pesce'] },
];

export const italianClothes = [
  { id: 'it-c1', type: 'multiple-choice', question: 'How do you say "dress" in Italian?', options: ['Pantaloni', 'Vestito', 'Camicia', 'Cappello'], correctAnswer: 'Vestito' },
  { id: 'it-c2', type: 'speaking', question: 'Say "Scarpe" (Shoes)', correctAnswer: 'scarpe', spokenText: 'Scarpe', hint: 'Pronounced "SKAR-peh"' },
  { id: 'it-c3', type: 'match-pairs', question: 'Match Italian clothes with English', correctAnswer: 'matched', pairs: [
    { left: 'Camicia', right: 'Shirt' },
    { left: 'Pantaloni', right: 'Pants' },
    { left: 'Scarpe', right: 'Shoes' },
    { left: 'Cappello', right: 'Hat' },
  ]},
  { id: 'it-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Indosso un bel ___', correctAnswer: 'vestito', options: ['vestito', 'scarpa', 'cappello', 'guanto'] },
];

export const italianWeather = [
  { id: 'it-w1', type: 'multiple-choice', question: 'How do you say "hot" in Italian?', options: ['Freddo', 'Caldo', 'Tiepido', 'Fresco'], correctAnswer: 'Caldo' },
  { id: 'it-w2', type: 'speaking', question: 'Say "Fa caldo" (It\'s hot)', correctAnswer: 'fa caldo', spokenText: 'Fa caldo', hint: 'Pronounced "fah KAHL-doh"' },
  { id: 'it-w3', type: 'match-pairs', question: 'Match Italian weather with English', correctAnswer: 'matched', pairs: [
    { left: 'Sole', right: 'Sun' },
    { left: 'Pioggia', right: 'Rain' },
    { left: 'Neve', right: 'Snow' },
    { left: 'Nuvola', right: 'Cloud' },
  ]},
  { id: 'it-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Il ___ splende oggi', correctAnswer: 'sole', options: ['sole', 'tavolo', 'libro', 'casa'] },
];

export const italianFamily = [
  { id: 'it-fm1', type: 'multiple-choice', question: 'How do you say "father" in Italian?', options: ['Madre', 'Padre', 'Fratello', 'Sorella'], correctAnswer: 'Padre' },
  { id: 'it-fm2', type: 'speaking', question: 'Say "La mia famiglia" (My family)', correctAnswer: 'la mia famiglia', spokenText: 'La mia famiglia', hint: 'Pronounced "lah MEE-ah fah-MEE-lyah"' },
  { id: 'it-fm3', type: 'match-pairs', question: 'Match Italian family with English', correctAnswer: 'matched', pairs: [
    { left: 'Padre', right: 'Father' },
    { left: 'Madre', right: 'Mother' },
    { left: 'Fratello', right: 'Brother' },
    { left: 'Sorella', right: 'Sister' },
  ]},
  { id: 'it-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Mia ___ è la madre di mia madre', correctAnswer: 'nonna', options: ['nonna', 'zia', 'cugina', 'sorella'] },
];

// ============ PORTUGUESE LEVEL 2 ============

export const portugueseAnimals = [
  { id: 'pt-a1', type: 'multiple-choice', question: 'How do you say "dog" in Portuguese?', options: ['Gato', 'Cachorro', 'Pássaro', 'Peixe'], correctAnswer: 'Cachorro' },
  { id: 'pt-a2', type: 'speaking', question: 'Say "Gato" (Cat)', correctAnswer: 'gato', spokenText: 'Gato', hint: 'Pronounced "GAH-too"' },
  { id: 'pt-a3', type: 'match-pairs', question: 'Match Portuguese animals with English', correctAnswer: 'matched', pairs: [
    { left: 'Cachorro', right: 'Dog' },
    { left: 'Gato', right: 'Cat' },
    { left: 'Pássaro', right: 'Bird' },
    { left: 'Peixe', right: 'Fish' },
  ]},
  { id: 'pt-a4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'O ___ late alto', correctAnswer: 'cachorro', options: ['cachorro', 'gato', 'pássaro', 'peixe'] },
];

export const portugueseClothes = [
  { id: 'pt-c1', type: 'multiple-choice', question: 'How do you say "shirt" in Portuguese?', options: ['Calça', 'Camisa', 'Sapatos', 'Chapéu'], correctAnswer: 'Camisa' },
  { id: 'pt-c2', type: 'speaking', question: 'Say "Sapatos" (Shoes)', correctAnswer: 'sapatos', spokenText: 'Sapatos', hint: 'Pronounced "sah-PAH-toosh"' },
  { id: 'pt-c3', type: 'match-pairs', question: 'Match Portuguese clothes with English', correctAnswer: 'matched', pairs: [
    { left: 'Camisa', right: 'Shirt' },
    { left: 'Calça', right: 'Pants' },
    { left: 'Sapatos', right: 'Shoes' },
    { left: 'Chapéu', right: 'Hat' },
  ]},
  { id: 'pt-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Eu uso ___ nos pés', correctAnswer: 'sapatos', options: ['sapatos', 'luvas', 'chapéu', 'camisa'] },
];

export const portugueseWeather = [
  { id: 'pt-w1', type: 'multiple-choice', question: 'How do you say "rain" in Portuguese?', options: ['Sol', 'Chuva', 'Neve', 'Vento'], correctAnswer: 'Chuva' },
  { id: 'pt-w2', type: 'speaking', question: 'Say "Está quente" (It\'s hot)', correctAnswer: 'esta quente', spokenText: 'Está quente', hint: 'Pronounced "ehs-TAH KEN-chee"' },
  { id: 'pt-w3', type: 'match-pairs', question: 'Match Portuguese weather with English', correctAnswer: 'matched', pairs: [
    { left: 'Sol', right: 'Sun' },
    { left: 'Chuva', right: 'Rain' },
    { left: 'Neve', right: 'Snow' },
    { left: 'Nuvem', right: 'Cloud' },
  ]},
  { id: 'pt-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'O ___ brilha hoje', correctAnswer: 'sol', options: ['sol', 'mesa', 'livro', 'casa'] },
];

export const portugueseFamily = [
  { id: 'pt-fm1', type: 'multiple-choice', question: 'How do you say "mother" in Portuguese?', options: ['Pai', 'Mãe', 'Irmão', 'Irmã'], correctAnswer: 'Mãe' },
  { id: 'pt-fm2', type: 'speaking', question: 'Say "Minha família" (My family)', correctAnswer: 'minha familia', spokenText: 'Minha família', hint: 'Pronounced "MEE-nyah fah-MEE-lee-ah"' },
  { id: 'pt-fm3', type: 'match-pairs', question: 'Match Portuguese family with English', correctAnswer: 'matched', pairs: [
    { left: 'Pai', right: 'Father' },
    { left: 'Mãe', right: 'Mother' },
    { left: 'Irmão', right: 'Brother' },
    { left: 'Irmã', right: 'Sister' },
  ]},
  { id: 'pt-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Minha ___ é a mãe da minha mãe', correctAnswer: 'avó', options: ['avó', 'tia', 'prima', 'irmã'] },
];

// ============ JAPANESE LEVEL 2 ============

export const japaneseAnimals = [
  { id: 'ja-a1', type: 'multiple-choice', question: 'How do you say "dog" in Japanese?', options: ['ねこ', 'いぬ', 'とり', 'さかな'], correctAnswer: 'いぬ' },
  { id: 'ja-a2', type: 'speaking', question: 'Say "Neko" (Cat)', correctAnswer: 'neko', spokenText: 'ねこ', hint: 'Pronounced "NEH-koh"' },
  { id: 'ja-a3', type: 'match-pairs', question: 'Match Japanese animals with English', correctAnswer: 'matched', pairs: [
    { left: 'いぬ', right: 'Dog' },
    { left: 'ねこ', right: 'Cat' },
    { left: 'とり', right: 'Bird' },
    { left: 'さかな', right: 'Fish' },
  ]},
  { id: 'ja-a4', type: 'fill-blank', question: 'Complete the sentence', sentence: '___は泳ぎます (The fish swims)', correctAnswer: 'さかな', options: ['さかな', 'いぬ', 'ねこ', 'とり'] },
];

export const japaneseClothes = [
  { id: 'ja-c1', type: 'multiple-choice', question: 'How do you say "shoes" in Japanese?', options: ['シャツ', 'くつ', 'ぼうし', 'ズボン'], correctAnswer: 'くつ' },
  { id: 'ja-c2', type: 'speaking', question: 'Say "Shatsu" (Shirt)', correctAnswer: 'shatsu', spokenText: 'シャツ', hint: 'Pronounced "SHAH-tsoo"' },
  { id: 'ja-c3', type: 'match-pairs', question: 'Match Japanese clothes with English', correctAnswer: 'matched', pairs: [
    { left: 'シャツ', right: 'Shirt' },
    { left: 'ズボン', right: 'Pants' },
    { left: 'くつ', right: 'Shoes' },
    { left: 'ぼうし', right: 'Hat' },
  ]},
  { id: 'ja-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: '___をはきます (I wear shoes)', correctAnswer: 'くつ', options: ['くつ', 'シャツ', 'ぼうし', 'ズボン'] },
];

export const japaneseWeather = [
  { id: 'ja-w1', type: 'multiple-choice', question: 'How do you say "hot" in Japanese?', options: ['さむい', 'あつい', 'すずしい', 'あたたかい'], correctAnswer: 'あつい' },
  { id: 'ja-w2', type: 'speaking', question: 'Say "Tenki ga ii" (The weather is good)', correctAnswer: 'tenki ga ii', spokenText: 'てんきがいい', hint: 'Pronounced "TEN-kee gah EE"' },
  { id: 'ja-w3', type: 'match-pairs', question: 'Match Japanese weather with English', correctAnswer: 'matched', pairs: [
    { left: 'あつい', right: 'Hot' },
    { left: 'さむい', right: 'Cold' },
    { left: 'あめ', right: 'Rain' },
    { left: 'ゆき', right: 'Snow' },
  ]},
  { id: 'ja-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: '今日は___です (It\'s hot today)', correctAnswer: 'あつい', options: ['あつい', 'つくえ', 'ほん', 'いえ'] },
];

export const japaneseFamily = [
  { id: 'ja-fm1', type: 'multiple-choice', question: 'How do you say "mother" in Japanese?', options: ['ちち', 'はは', 'あに', 'あね'], correctAnswer: 'はは' },
  { id: 'ja-fm2', type: 'speaking', question: 'Say "Kazoku" (Family)', correctAnswer: 'kazoku', spokenText: 'かぞく', hint: 'Pronounced "kah-ZOH-koo"' },
  { id: 'ja-fm3', type: 'match-pairs', question: 'Match Japanese family with English', correctAnswer: 'matched', pairs: [
    { left: 'ちち', right: 'Father' },
    { left: 'はは', right: 'Mother' },
    { left: 'あに', right: 'Brother' },
    { left: 'あね', right: 'Sister' },
  ]},
  { id: 'ja-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'わたしの___は優しいです (My mother is kind)', correctAnswer: 'はは', options: ['はは', 'おじ', 'おば', 'あに'] },
];

// ============ KOREAN LEVEL 2 ============

export const koreanAnimals = [
  { id: 'ko-a1', type: 'multiple-choice', question: 'How do you say "dog" in Korean?', options: ['고양이', '개', '새', '물고기'], correctAnswer: '개' },
  { id: 'ko-a2', type: 'speaking', question: 'Say "Goyangi" (Cat)', correctAnswer: 'goyangi', spokenText: '고양이', hint: 'Pronounced "goh-YANG-ee"' },
  { id: 'ko-a3', type: 'match-pairs', question: 'Match Korean animals with English', correctAnswer: 'matched', pairs: [
    { left: '개', right: 'Dog' },
    { left: '고양이', right: 'Cat' },
    { left: '새', right: 'Bird' },
    { left: '물고기', right: 'Fish' },
  ]},
  { id: 'ko-a4', type: 'fill-blank', question: 'Complete the sentence', sentence: '___가 짖어요 (The dog barks)', correctAnswer: '개', options: ['개', '고양이', '새', '물고기'] },
];

export const koreanClothes = [
  { id: 'ko-c1', type: 'multiple-choice', question: 'How do you say "shoes" in Korean?', options: ['셔츠', '신발', '모자', '바지'], correctAnswer: '신발' },
  { id: 'ko-c2', type: 'speaking', question: 'Say "Syeocheu" (Shirt)', correctAnswer: 'syeocheu', spokenText: '셔츠', hint: 'Pronounced "SHUH-cheu"' },
  { id: 'ko-c3', type: 'match-pairs', question: 'Match Korean clothes with English', correctAnswer: 'matched', pairs: [
    { left: '셔츠', right: 'Shirt' },
    { left: '바지', right: 'Pants' },
    { left: '신발', right: 'Shoes' },
    { left: '모자', right: 'Hat' },
  ]},
  { id: 'ko-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: '___를 신어요 (I wear shoes)', correctAnswer: '신발', options: ['신발', '셔츠', '모자', '바지'] },
];

export const koreanWeather = [
  { id: 'ko-w1', type: 'multiple-choice', question: 'How do you say "cold" in Korean?', options: ['더워요', '추워요', '따뜻해요', '시원해요'], correctAnswer: '추워요' },
  { id: 'ko-w2', type: 'speaking', question: 'Say "Nalssiga joayo" (The weather is good)', correctAnswer: 'nalssiga joayo', spokenText: '날씨가 좋아요', hint: 'Pronounced "nal-SSEE-gah JOH-ah-yo"' },
  { id: 'ko-w3', type: 'match-pairs', question: 'Match Korean weather with English', correctAnswer: 'matched', pairs: [
    { left: '더워요', right: 'Hot' },
    { left: '추워요', right: 'Cold' },
    { left: '비', right: 'Rain' },
    { left: '눈', right: 'Snow' },
  ]},
  { id: 'ko-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: '오늘은 ___ (It\'s hot today)', correctAnswer: '더워요', options: ['더워요', '책상', '책', '집'] },
];

export const koreanFamily = [
  { id: 'ko-fm1', type: 'multiple-choice', question: 'How do you say "mother" in Korean?', options: ['아버지', '어머니', '형', '누나'], correctAnswer: '어머니' },
  { id: 'ko-fm2', type: 'speaking', question: 'Say "Gajok" (Family)', correctAnswer: 'gajok', spokenText: '가족', hint: 'Pronounced "gah-JOK"' },
  { id: 'ko-fm3', type: 'match-pairs', question: 'Match Korean family with English', correctAnswer: 'matched', pairs: [
    { left: '아버지', right: 'Father' },
    { left: '어머니', right: 'Mother' },
    { left: '형/오빠', right: 'Brother' },
    { left: '누나/언니', right: 'Sister' },
  ]},
  { id: 'ko-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: '제 ___는 친절해요 (My mother is kind)', correctAnswer: '어머니', options: ['어머니', '삼촌', '이모', '형'] },
];

// ============ CHINESE LEVEL 2 ============

export const chineseAnimals = [
  { id: 'zh-a1', type: 'multiple-choice', question: 'How do you say "dog" in Chinese?', options: ['猫', '狗', '鸟', '鱼'], correctAnswer: '狗' },
  { id: 'zh-a2', type: 'speaking', question: 'Say "Mao" (Cat)', correctAnswer: 'mao', spokenText: '猫', hint: 'Pronounced "maow"' },
  { id: 'zh-a3', type: 'match-pairs', question: 'Match Chinese animals with English', correctAnswer: 'matched', pairs: [
    { left: '狗', right: 'Dog' },
    { left: '猫', right: 'Cat' },
    { left: '鸟', right: 'Bird' },
    { left: '鱼', right: 'Fish' },
  ]},
  { id: 'zh-a4', type: 'fill-blank', question: 'Complete the sentence', sentence: '___在游泳 (The fish is swimming)', correctAnswer: '鱼', options: ['鱼', '狗', '猫', '鸟'] },
];

export const chineseClothes = [
  { id: 'zh-c1', type: 'multiple-choice', question: 'How do you say "shoes" in Chinese?', options: ['衬衫', '鞋子', '帽子', '裤子'], correctAnswer: '鞋子' },
  { id: 'zh-c2', type: 'speaking', question: 'Say "Chenshan" (Shirt)', correctAnswer: 'chenshan', spokenText: '衬衫', hint: 'Pronounced "chen-shan"' },
  { id: 'zh-c3', type: 'match-pairs', question: 'Match Chinese clothes with English', correctAnswer: 'matched', pairs: [
    { left: '衬衫', right: 'Shirt' },
    { left: '裤子', right: 'Pants' },
    { left: '鞋子', right: 'Shoes' },
    { left: '帽子', right: 'Hat' },
  ]},
  { id: 'zh-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: '我穿___ (I wear shoes)', correctAnswer: '鞋子', options: ['鞋子', '衬衫', '帽子', '裤子'] },
];

export const chineseWeather = [
  { id: 'zh-w1', type: 'multiple-choice', question: 'How do you say "cold" in Chinese?', options: ['热', '冷', '暖和', '凉快'], correctAnswer: '冷' },
  { id: 'zh-w2', type: 'speaking', question: 'Say "Tianqi hen hao" (The weather is good)', correctAnswer: 'tianqi hen hao', spokenText: '天气很好', hint: 'Pronounced "tee-en-chee hun how"' },
  { id: 'zh-w3', type: 'match-pairs', question: 'Match Chinese weather with English', correctAnswer: 'matched', pairs: [
    { left: '热', right: 'Hot' },
    { left: '冷', right: 'Cold' },
    { left: '雨', right: 'Rain' },
    { left: '雪', right: 'Snow' },
  ]},
  { id: 'zh-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: '今天很___ (It\'s hot today)', correctAnswer: '热', options: ['热', '桌子', '书', '家'] },
];

export const chineseFamily = [
  { id: 'zh-fm1', type: 'multiple-choice', question: 'How do you say "mother" in Chinese?', options: ['爸爸', '妈妈', '哥哥', '姐姐'], correctAnswer: '妈妈' },
  { id: 'zh-fm2', type: 'speaking', question: 'Say "Jiaren" (Family)', correctAnswer: 'jiaren', spokenText: '家人', hint: 'Pronounced "jee-ah-run"' },
  { id: 'zh-fm3', type: 'match-pairs', question: 'Match Chinese family with English', correctAnswer: 'matched', pairs: [
    { left: '爸爸', right: 'Father' },
    { left: '妈妈', right: 'Mother' },
    { left: '哥哥', right: 'Brother' },
    { left: '姐姐', right: 'Sister' },
  ]},
  { id: 'zh-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: '我的___很善良 (My mother is kind)', correctAnswer: '妈妈', options: ['妈妈', '叔叔', '阿姨', '哥哥'] },
];

// ============ RUSSIAN LEVEL 2 ============

export const russianAnimals = [
  { id: 'ru-a1', type: 'multiple-choice', question: 'How do you say "dog" in Russian?', options: ['Кошка', 'Собака', 'Птица', 'Рыба'], correctAnswer: 'Собака' },
  { id: 'ru-a2', type: 'speaking', question: 'Say "Koshka" (Cat)', correctAnswer: 'koshka', spokenText: 'Кошка', hint: 'Pronounced "KOSH-kah"' },
  { id: 'ru-a3', type: 'match-pairs', question: 'Match Russian animals with English', correctAnswer: 'matched', pairs: [
    { left: 'Собака', right: 'Dog' },
    { left: 'Кошка', right: 'Cat' },
    { left: 'Птица', right: 'Bird' },
    { left: 'Рыба', right: 'Fish' },
  ]},
  { id: 'ru-a4', type: 'fill-blank', question: 'Complete the sentence', sentence: '___ плавает в воде', correctAnswer: 'Рыба', options: ['Рыба', 'Собака', 'Кошка', 'Птица'] },
];

export const russianClothes = [
  { id: 'ru-c1', type: 'multiple-choice', question: 'How do you say "jacket" in Russian?', options: ['Брюки', 'Куртка', 'Рубашка', 'Шапка'], correctAnswer: 'Куртка' },
  { id: 'ru-c2', type: 'speaking', question: 'Say "Obuv" (Shoes)', correctAnswer: 'obuv', spokenText: 'Обувь', hint: 'Pronounced "OH-boov"' },
  { id: 'ru-c3', type: 'match-pairs', question: 'Match Russian clothes with English', correctAnswer: 'matched', pairs: [
    { left: 'Рубашка', right: 'Shirt' },
    { left: 'Брюки', right: 'Pants' },
    { left: 'Обувь', right: 'Shoes' },
    { left: 'Шапка', right: 'Hat' },
  ]},
  { id: 'ru-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Я ношу тёплую ___', correctAnswer: 'куртку', options: ['куртку', 'ботинок', 'шапку', 'перчатку'] },
];

export const russianWeather = [
  { id: 'ru-w1', type: 'multiple-choice', question: 'How do you say "cold" in Russian?', options: ['Жарко', 'Холодно', 'Тепло', 'Прохладно'], correctAnswer: 'Холодно' },
  { id: 'ru-w2', type: 'speaking', question: 'Say "Segodnya khorosho" (Today is good)', correctAnswer: 'segodnya khorosho', spokenText: 'Сегодня хорошо', hint: 'Pronounced "see-VOD-nyah khah-rah-SHOH"' },
  { id: 'ru-w3', type: 'match-pairs', question: 'Match Russian weather with English', correctAnswer: 'matched', pairs: [
    { left: 'Жарко', right: 'Hot' },
    { left: 'Холодно', right: 'Cold' },
    { left: 'Дождь', right: 'Rain' },
    { left: 'Снег', right: 'Snow' },
  ]},
  { id: 'ru-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Сегодня очень ___', correctAnswer: 'жарко', options: ['жарко', 'стол', 'книга', 'дом'] },
];

export const russianFamily = [
  { id: 'ru-fm1', type: 'multiple-choice', question: 'How do you say "mother" in Russian?', options: ['Отец', 'Мать', 'Брат', 'Сестра'], correctAnswer: 'Мать' },
  { id: 'ru-fm2', type: 'speaking', question: 'Say "Semya" (Family)', correctAnswer: 'semya', spokenText: 'Семья', hint: 'Pronounced "sem-YAH"' },
  { id: 'ru-fm3', type: 'match-pairs', question: 'Match Russian family with English', correctAnswer: 'matched', pairs: [
    { left: 'Отец', right: 'Father' },
    { left: 'Мать', right: 'Mother' },
    { left: 'Брат', right: 'Brother' },
    { left: 'Сестра', right: 'Sister' },
  ]},
  { id: 'ru-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Моя ___ очень добрая', correctAnswer: 'мама', options: ['мама', 'дядя', 'тётя', 'брат'] },
];

// ============ ARABIC LEVEL 2 ============

export const arabicAnimals = [
  { id: 'ar-a1', type: 'multiple-choice', question: 'How do you say "dog" in Arabic?', options: ['قطة', 'كلب', 'طائر', 'سمكة'], correctAnswer: 'كلب' },
  { id: 'ar-a2', type: 'speaking', question: 'Say "Qitta" (Cat)', correctAnswer: 'qitta', spokenText: 'قطة', hint: 'Pronounced "KIT-tah"' },
  { id: 'ar-a3', type: 'match-pairs', question: 'Match Arabic animals with English', correctAnswer: 'matched', pairs: [
    { left: 'كلب', right: 'Dog' },
    { left: 'قطة', right: 'Cat' },
    { left: 'طائر', right: 'Bird' },
    { left: 'سمكة', right: 'Fish' },
  ]},
  { id: 'ar-a4', type: 'fill-blank', question: 'Complete the sentence', sentence: '___ يسبح في الماء', correctAnswer: 'السمكة', options: ['السمكة', 'الكلب', 'القطة', 'الطائر'] },
];

export const arabicClothes = [
  { id: 'ar-c1', type: 'multiple-choice', question: 'How do you say "shirt" in Arabic?', options: ['بنطلون', 'قميص', 'حذاء', 'قبعة'], correctAnswer: 'قميص' },
  { id: 'ar-c2', type: 'speaking', question: 'Say "Hithaa" (Shoes)', correctAnswer: 'hithaa', spokenText: 'حذاء', hint: 'Pronounced "hee-THAH"' },
  { id: 'ar-c3', type: 'match-pairs', question: 'Match Arabic clothes with English', correctAnswer: 'matched', pairs: [
    { left: 'قميص', right: 'Shirt' },
    { left: 'بنطلون', right: 'Pants' },
    { left: 'حذاء', right: 'Shoes' },
    { left: 'قبعة', right: 'Hat' },
  ]},
  { id: 'ar-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'ألبس ___ في قدمي', correctAnswer: 'الحذاء', options: ['الحذاء', 'القفازات', 'القبعة', 'القميص'] },
];

export const arabicWeather = [
  { id: 'ar-w1', type: 'multiple-choice', question: 'How do you say "hot" in Arabic?', options: ['بارد', 'حار', 'دافئ', 'معتدل'], correctAnswer: 'حار' },
  { id: 'ar-w2', type: 'speaking', question: 'Say "Al jaww jameel" (The weather is nice)', correctAnswer: 'al jaww jameel', spokenText: 'الجو جميل', hint: 'Pronounced "al-JAW jah-MEEL"' },
  { id: 'ar-w3', type: 'match-pairs', question: 'Match Arabic weather with English', correctAnswer: 'matched', pairs: [
    { left: 'حار', right: 'Hot' },
    { left: 'بارد', right: 'Cold' },
    { left: 'مطر', right: 'Rain' },
    { left: 'ثلج', right: 'Snow' },
  ]},
  { id: 'ar-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'اليوم الجو ___', correctAnswer: 'حار', options: ['حار', 'طاولة', 'كتاب', 'بيت'] },
];

export const arabicFamily = [
  { id: 'ar-fm1', type: 'multiple-choice', question: 'How do you say "mother" in Arabic?', options: ['أب', 'أم', 'أخ', 'أخت'], correctAnswer: 'أم' },
  { id: 'ar-fm2', type: 'speaking', question: 'Say "Aaila" (Family)', correctAnswer: 'aaila', spokenText: 'عائلة', hint: 'Pronounced "AH-ee-lah"' },
  { id: 'ar-fm3', type: 'match-pairs', question: 'Match Arabic family with English', correctAnswer: 'matched', pairs: [
    { left: 'أب', right: 'Father' },
    { left: 'أم', right: 'Mother' },
    { left: 'أخ', right: 'Brother' },
    { left: 'أخت', right: 'Sister' },
  ]},
  { id: 'ar-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: '___ي لطيفة جداً', correctAnswer: 'أم', options: ['أم', 'عم', 'خالة', 'أخ'] },
];

// ============ HINDI LEVEL 2 ============

export const hindiAnimals = [
  { id: 'hi-a1', type: 'multiple-choice', question: 'How do you say "dog" in Hindi?', options: ['बिल्ली', 'कुत्ता', 'पक्षी', 'मछली'], correctAnswer: 'कुत्ता' },
  { id: 'hi-a2', type: 'speaking', question: 'Say "Billi" (Cat)', correctAnswer: 'billi', spokenText: 'बिल्ली', hint: 'Pronounced "BIL-lee"' },
  { id: 'hi-a3', type: 'match-pairs', question: 'Match Hindi animals with English', correctAnswer: 'matched', pairs: [
    { left: 'कुत्ता', right: 'Dog' },
    { left: 'बिल्ली', right: 'Cat' },
    { left: 'पक्षी', right: 'Bird' },
    { left: 'मछली', right: 'Fish' },
  ]},
  { id: 'hi-a4', type: 'fill-blank', question: 'Complete the sentence', sentence: '___ पानी में तैरती है', correctAnswer: 'मछली', options: ['मछली', 'कुत्ता', 'बिल्ली', 'पक्षी'] },
];

export const hindiClothes = [
  { id: 'hi-c1', type: 'multiple-choice', question: 'How do you say "shirt" in Hindi?', options: ['पैंट', 'कमीज़', 'जूते', 'टोपी'], correctAnswer: 'कमीज़' },
  { id: 'hi-c2', type: 'speaking', question: 'Say "Joote" (Shoes)', correctAnswer: 'joote', spokenText: 'जूते', hint: 'Pronounced "JOO-tay"' },
  { id: 'hi-c3', type: 'match-pairs', question: 'Match Hindi clothes with English', correctAnswer: 'matched', pairs: [
    { left: 'कमीज़', right: 'Shirt' },
    { left: 'पैंट', right: 'Pants' },
    { left: 'जूते', right: 'Shoes' },
    { left: 'टोपी', right: 'Hat' },
  ]},
  { id: 'hi-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'मैं ___ पहनता हूँ', correctAnswer: 'जूते', options: ['जूते', 'दस्ताने', 'टोपी', 'कमीज़'] },
];

export const hindiWeather = [
  { id: 'hi-w1', type: 'multiple-choice', question: 'How do you say "cold" in Hindi?', options: ['गर्म', 'ठंडा', 'गुनगुना', 'शीतल'], correctAnswer: 'ठंडा' },
  { id: 'hi-w2', type: 'speaking', question: 'Say "Aaj mausam accha hai" (Today weather is good)', correctAnswer: 'aaj mausam accha hai', spokenText: 'आज मौसम अच्छा है', hint: 'Pronounced "aaj MOW-sum ACH-cha hai"' },
  { id: 'hi-w3', type: 'match-pairs', question: 'Match Hindi weather with English', correctAnswer: 'matched', pairs: [
    { left: 'गर्म', right: 'Hot' },
    { left: 'ठंडा', right: 'Cold' },
    { left: 'बारिश', right: 'Rain' },
    { left: 'बर्फ', right: 'Snow' },
  ]},
  { id: 'hi-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'आज बहुत ___ है', correctAnswer: 'गर्म', options: ['गर्म', 'मेज़', 'किताब', 'घर'] },
];

export const hindiFamily = [
  { id: 'hi-fm1', type: 'multiple-choice', question: 'How do you say "mother" in Hindi?', options: ['पिता', 'माता', 'भाई', 'बहन'], correctAnswer: 'माता' },
  { id: 'hi-fm2', type: 'speaking', question: 'Say "Parivar" (Family)', correctAnswer: 'parivar', spokenText: 'परिवार', hint: 'Pronounced "pah-ree-VAHR"' },
  { id: 'hi-fm3', type: 'match-pairs', question: 'Match Hindi family with English', correctAnswer: 'matched', pairs: [
    { left: 'पिता', right: 'Father' },
    { left: 'माता', right: 'Mother' },
    { left: 'भाई', right: 'Brother' },
    { left: 'बहन', right: 'Sister' },
  ]},
  { id: 'hi-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'मेरी ___ बहुत दयालु हैं', correctAnswer: 'माँ', options: ['माँ', 'चाचा', 'मामी', 'भाई'] },
];

// ============ DUTCH LEVEL 2 ============

export const dutchAnimals = [
  { id: 'nl-a1', type: 'multiple-choice', question: 'How do you say "dog" in Dutch?', options: ['Kat', 'Hond', 'Vogel', 'Vis'], correctAnswer: 'Hond' },
  { id: 'nl-a2', type: 'speaking', question: 'Say "Kat" (Cat)', correctAnswer: 'kat', spokenText: 'Kat', hint: 'Pronounced like English "cat"' },
  { id: 'nl-a3', type: 'match-pairs', question: 'Match Dutch animals with English', correctAnswer: 'matched', pairs: [
    { left: 'Hond', right: 'Dog' },
    { left: 'Kat', right: 'Cat' },
    { left: 'Vogel', right: 'Bird' },
    { left: 'Vis', right: 'Fish' },
  ]},
  { id: 'nl-a4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'De ___ zwemt in het water', correctAnswer: 'vis', options: ['vis', 'hond', 'kat', 'vogel'] },
];

export const dutchClothes = [
  { id: 'nl-c1', type: 'multiple-choice', question: 'How do you say "jacket" in Dutch?', options: ['Broek', 'Jas', 'Overhemd', 'Hoed'], correctAnswer: 'Jas' },
  { id: 'nl-c2', type: 'speaking', question: 'Say "Schoenen" (Shoes)', correctAnswer: 'schoenen', spokenText: 'Schoenen', hint: 'Pronounced "SKHOO-nen"' },
  { id: 'nl-c3', type: 'match-pairs', question: 'Match Dutch clothes with English', correctAnswer: 'matched', pairs: [
    { left: 'Overhemd', right: 'Shirt' },
    { left: 'Broek', right: 'Pants' },
    { left: 'Schoenen', right: 'Shoes' },
    { left: 'Hoed', right: 'Hat' },
  ]},
  { id: 'nl-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Ik draag een warme ___', correctAnswer: 'jas', options: ['jas', 'schoen', 'hoed', 'handschoen'] },
];

export const dutchWeather = [
  { id: 'nl-w1', type: 'multiple-choice', question: 'How do you say "rain" in Dutch?', options: ['Zon', 'Regen', 'Sneeuw', 'Wind'], correctAnswer: 'Regen' },
  { id: 'nl-w2', type: 'speaking', question: 'Say "Het is mooi weer" (The weather is nice)', correctAnswer: 'het is mooi weer', spokenText: 'Het is mooi weer', hint: 'Pronounced "het is MOY veer"' },
  { id: 'nl-w3', type: 'match-pairs', question: 'Match Dutch weather with English', correctAnswer: 'matched', pairs: [
    { left: 'Zon', right: 'Sun' },
    { left: 'Regen', right: 'Rain' },
    { left: 'Sneeuw', right: 'Snow' },
    { left: 'Wolk', right: 'Cloud' },
  ]},
  { id: 'nl-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'De ___ schijnt vandaag', correctAnswer: 'zon', options: ['zon', 'tafel', 'boek', 'huis'] },
];

export const dutchFamily = [
  { id: 'nl-fm1', type: 'multiple-choice', question: 'How do you say "mother" in Dutch?', options: ['Vader', 'Moeder', 'Broer', 'Zus'], correctAnswer: 'Moeder' },
  { id: 'nl-fm2', type: 'speaking', question: 'Say "Familie" (Family)', correctAnswer: 'familie', spokenText: 'Familie', hint: 'Pronounced "fah-MEE-lee"' },
  { id: 'nl-fm3', type: 'match-pairs', question: 'Match Dutch family with English', correctAnswer: 'matched', pairs: [
    { left: 'Vader', right: 'Father' },
    { left: 'Moeder', right: 'Mother' },
    { left: 'Broer', right: 'Brother' },
    { left: 'Zus', right: 'Sister' },
  ]},
  { id: 'nl-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Mijn ___ is heel aardig', correctAnswer: 'moeder', options: ['moeder', 'oom', 'tante', 'broer'] },
];

// ============ ENGLISH UK LEVEL 2 ============

export const englishUKAnimals = [
  { id: 'en-gb-a1', type: 'multiple-choice', question: 'What is a "kitten"?', options: ['A baby dog', 'A baby cat', 'A baby bird', 'A baby fish'], correctAnswer: 'A baby cat' },
  { id: 'en-gb-a2', type: 'speaking', question: 'Say "Hedgehog"', correctAnswer: 'hedgehog', spokenText: 'Hedgehog', hint: 'A spiky British garden animal' },
  { id: 'en-gb-a3', type: 'match-pairs', question: 'Match British terms with meanings', correctAnswer: 'matched', pairs: [
    { left: 'Moggy', right: 'Cat' },
    { left: 'Hound', right: 'Dog' },
    { left: 'Cob', right: 'Swan' },
    { left: 'Robin', right: 'Bird' },
  ]},
  { id: 'en-gb-a4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'The ___ is the national bird of Britain', correctAnswer: 'robin', options: ['robin', 'eagle', 'penguin', 'owl'] },
];

export const englishUKClothes = [
  { id: 'en-gb-c1', type: 'multiple-choice', question: 'What are "trainers" in British English?', options: ['Teachers', 'Sneakers/Sports shoes', 'Gloves', 'Coaches'], correctAnswer: 'Sneakers/Sports shoes' },
  { id: 'en-gb-c2', type: 'speaking', question: 'Say "Jumper"', correctAnswer: 'jumper', spokenText: 'Jumper', hint: 'British word for sweater' },
  { id: 'en-gb-c3', type: 'match-pairs', question: 'Match British clothing terms', correctAnswer: 'matched', pairs: [
    { left: 'Jumper', right: 'Sweater' },
    { left: 'Trousers', right: 'Pants' },
    { left: 'Trainers', right: 'Sneakers' },
    { left: 'Waistcoat', right: 'Vest' },
  ]},
  { id: 'en-gb-c4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'Put on your ___ when it is cold', correctAnswer: 'jumper', options: ['jumper', 'shorts', 'sandals', 'cap'] },
];

export const englishUKWeather = [
  { id: 'en-gb-w1', type: 'multiple-choice', question: 'What does "drizzle" mean?', options: ['Heavy rain', 'Light rain', 'Snow', 'Fog'], correctAnswer: 'Light rain' },
  { id: 'en-gb-w2', type: 'speaking', question: 'Say "It is rather chilly today"', correctAnswer: 'it is rather chilly today', spokenText: 'It is rather chilly today', hint: 'British way to say it is cold' },
  { id: 'en-gb-w3', type: 'match-pairs', question: 'Match British weather terms', correctAnswer: 'matched', pairs: [
    { left: 'Drizzle', right: 'Light rain' },
    { left: 'Chilly', right: 'Cold' },
    { left: 'Muggy', right: 'Humid' },
    { left: 'Overcast', right: 'Cloudy' },
  ]},
  { id: 'en-gb-w4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'The weather is quite ___ today', correctAnswer: 'lovely', options: ['lovely', 'table', 'book', 'car'] },
];

export const englishUKFamily = [
  { id: 'en-gb-fm1', type: 'multiple-choice', question: 'What does "Mum" mean in British English?', options: ['Father', 'Mother', 'Sister', 'Aunt'], correctAnswer: 'Mother' },
  { id: 'en-gb-fm2', type: 'speaking', question: 'Say "My family is quite lovely"', correctAnswer: 'my family is quite lovely', spokenText: 'My family is quite lovely', hint: 'British expression of affection' },
  { id: 'en-gb-fm3', type: 'match-pairs', question: 'Match British family terms', correctAnswer: 'matched', pairs: [
    { left: 'Mum', right: 'Mother' },
    { left: 'Dad', right: 'Father' },
    { left: 'Gran', right: 'Grandmother' },
    { left: 'Grandad', right: 'Grandfather' },
  ]},
  { id: 'en-gb-fm4', type: 'fill-blank', question: 'Complete the sentence', sentence: 'My ___ makes the best tea', correctAnswer: 'gran', options: ['gran', 'uncle', 'cousin', 'brother'] },
];
