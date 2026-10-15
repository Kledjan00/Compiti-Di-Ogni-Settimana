/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- L'array starWarsCharacters è già preparato qui sotto: NON modificarlo a inizio file.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const starWarsCharacters = [
	{
		name: 'Luke Skywalker',
		height: '172',
		mass: '77',
		hair_color: 'blond',
		skin_color: 'fair',
		eye_color: 'blue',
		birth_year: '19BBY',
		gender: 'male',
	},
	{
		name: 'C-3PO',
		height: '167',
		mass: '750',
		hair_color: 'n/a',
		skin_color: 'gold',
		eye_color: 'yellow',
		birth_year: '112BBY',
		gender: 'n/a',
	},
	{
		name: 'R2-D2',
		height: '96',
		mass: '32',
		hair_color: 'n/a',
		skin_color: 'white, blue',
		eye_color: 'red',
		birth_year: '33BBY',
		gender: 'n/a',
	},
	{
		name: 'Darth Vader',
		height: '202',
		mass: '136',
		hair_color: 'none',
		skin_color: 'white',
		eye_color: 'yellow',
		birth_year: '41.9BBY',
		gender: 'male',
	},
	{
		name: 'Leia Organa',
		height: '150',
		mass: '49',
		hair_color: 'brown',
		skin_color: 'light',
		eye_color: 'brown',
		birth_year: '19BBY',
		gender: 'female',
	},
	{
		name: 'Owen Lars',
		height: '178',
		mass: '120',
		hair_color: 'brown, grey',
		skin_color: 'light',
		eye_color: 'blue',
		birth_year: '52BBY',
		gender: 'male',
	},
	{
		name: 'Beru Lars',
		height: '165',
		mass: '75',
		hair_color: 'brown',
		skin_color: 'light',
		eye_color: 'blue',
		birth_year: '47BBY',
		gender: 'female',
	},
	{
		name: 'R5-D4',
		height: '97',
		mass: '32',
		hair_color: 'n/a',
		skin_color: 'white, red',
		eye_color: 'red',
		birth_year: 'unknown',
		gender: 'n/a',
	},
	{
		name: 'Biggs Darklighter',
		height: '183',
		mass: '84',
		hair_color: 'black',
		skin_color: 'light',
		eye_color: 'brown',
		birth_year: '24BBY',
		gender: 'male',
	},
	{
		name: 'Obi-Wan Kenobi',
		height: '182',
		mass: '77',
		hair_color: 'auburn, white',
		skin_color: 'fair',
		eye_color: 'blue-gray',
		birth_year: '57BBY',
		gender: 'male',
	},
];

/* ESERCIZIO 1 — Estrai i nomi
   Array vuoto "nomi". Con un for, fai push di ogni starWarsCharacters[i].name.
   Stampa "nomi".
*/

let nomi = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  nomi.push(starWarsCharacters[i].name);
}

console.log(nomi);

/* ESERCIZIO 2 — Solo i femminili
   Array vuoto "personaggiFemminili". Con un for + if (gender === "female"),
   crea un nuovo oggetto { name, hair_color, eye_color } e fai push.
   Stampa.
*/

let personaggiFemminili = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    let nuovo = {
      name: starWarsCharacters[i].name,
      hair_color: starWarsCharacters[i].hair_color,
      eye_color: starWarsCharacters[i].eye_color,
    };
    personaggiFemminili.push(nuovo);
  }
}

console.log(personaggiFemminili);

/* ESERCIZIO 3 — Oggetto raggruppamento
   Crea perColoreOcchi con chiavi: blue, yellow, brown, red, blue-gray (con trattino).
   Ognuna con un array vuoto.
*/

let perColoreOcchi = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": [],
};

/* ESERCIZIO 4 — Raggruppa per colore degli occhi
   For su starWarsCharacters + switch (character.eye_color).
   In ogni case fai push del personaggio nell'array giusto. Ricorda break.
   Stampa perColoreOcchi.
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  let character = starWarsCharacters[i];

  switch (character.eye_color) {
    case "blue":
      perColoreOcchi.blue.push(character);
      break;
    case "yellow":
      perColoreOcchi.yellow.push(character);
      break;
    case "brown":
      perColoreOcchi.brown.push(character);
      break;
    case "red":
      perColoreOcchi.red.push(character);
      break;
    case "blue-gray":
      perColoreOcchi["blue-gray"].push(character);
      break;
  }
}

console.log(perColoreOcchi);

/* ESERCIZIO 5 — Massa totale dell'equipaggio (while)
   i = 0, massaTotale = 0.
   While: somma Number(starWarsCharacters[i].mass).
   Stampa la massa totale.
*/

let i = 0;
let massaTotale = 0;

while (i < starWarsCharacters.length) {
  massaTotale += Number(starWarsCharacters[i].mass);
  i++;
}

console.log("Massa totale: " + massaTotale + " kg");

/* ESERCIZIO 6 — Classifica il carico
   Su massaTotale, switch (true) o if/else if:
   < 500            → "Carico leggero"
   500 – 700        → "Carico medio"
   700 – 900        → "Attenzione: oltre 700"
   900 – 1000       → "Carico critico"
   > 1000           → "PERICOLO: sovraccarico"
*/

if (massaTotale < 500) {
  console.log("Carico leggero");
} else if (massaTotale <= 700) {
  console.log("Carico medio");
} else if (massaTotale <= 900) {
  console.log("Attenzione: oltre 700");
} else if (massaTotale <= 1000) {
  console.log("Carico critico");
} else {
  console.log("PERICOLO: sovraccarico");
}

/* ESERCIZIO 7 — Robotizza i n/a
   For: per ogni personaggio con gender === "n/a", cambialo in "robot".
   Stampa l'array.
*/

for (let j = 0; j < starWarsCharacters.length; j++) {
  if (starWarsCharacters[j].gender === "n/a") {
    starWarsCharacters[j].gender = "robot";
  }
}

console.log(starWarsCharacters);

/* ESERCIZIO 8 — Più alto e più basso
   For su starWarsCharacters. Trova il personaggio con altezza maggiore e quello con altezza minore.
   L'altezza è una stringa: convertila con Number().
   Stampa: "Più alto: Darth Vader (202 cm)" e "Più basso: ...".
*/

let piuAlto = starWarsCharacters[0];
let piuBasso = starWarsCharacters[0];

for (let k = 1; k < starWarsCharacters.length; k++) {
  let altezza = Number(starWarsCharacters[k].height);

  if (altezza > Number(piuAlto.height)) {
    piuAlto = starWarsCharacters[k];
  }
  if (altezza < Number(piuBasso.height)) {
    piuBasso = starWarsCharacters[k];
  }
}

console.log("Più alto: " + piuAlto.name + " (" + piuAlto.height + " cm)");
console.log("Più basso: " + piuBasso.name + " (" + piuBasso.height + " cm)");

/* ESERCIZIO 9 — Rimuovi i femminili dai nomi (cicli annidati)
   Sull'array "nomi" dell'esercizio 1: for esterno su nomi, for interno su personaggiFemminili.
   Quando combaciano per nome, rimuovi quel nome da nomi con splice.
   Stampa lunghezza prima e dopo.
*/

console.log("Lunghezza prima: " + nomi.length);

for (let a = 0; a < nomi.length; a++) {
  for (let b = 0; b < personaggiFemminili.length; b++) {
    if (nomi[a] === personaggiFemminili[b].name) {
      nomi.splice(a, 1); // tolgo il nome dall'array
      a--; // torno indietro di uno, altrimenti salto l'elemento che scala al suo posto
      break; // ho già trovato la corrispondenza, esco dal ciclo interno
    }
  }
}

console.log("Lunghezza dopo: " + nomi.length);
console.log(nomi);

/* ESERCIZIO 10 — Personaggio casuale
   indice = Math.floor(Math.random() * starWarsCharacters.length)
   personaggio = starWarsCharacters[indice]
   if/else su gender per stampare "Lei è alta X cm" o "Lui è alto X cm".
   if su hair_color !== "n/a" && hair_color !== "none": stampa "Capelli: X" o "Senza capelli".
*/

let indice = Math.floor(Math.random() * starWarsCharacters.length);
let personaggio = starWarsCharacters[indice];

console.log("Personaggio: " + personaggio.name);

if (personaggio.gender === "female") {
  console.log("Lei è alta " + personaggio.height + " cm");
} else {
  console.log("Lui è alto " + personaggio.height + " cm");
}

if (personaggio.hair_color !== "n/a" && personaggio.hair_color !== "none") {
  console.log("Capelli: " + personaggio.hair_color);
} else {
  console.log("Senza capelli");
}

/* --EXTRA-- ESERCIZIO 11 — Conta per colore di occhi
   For...in sulle chiavi di perColoreOcchi.
   Stampa: "blue: 4 personaggi", "yellow: 2 personaggi", ecc.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
