/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

let persona = {
   nome: "Kledjan",
   cognome: "Lleshi",
   eta: 24,
   citta: "Roma",
};

console.log(
   persona.nome + " " + persona.cognome + ", " + persona.eta + " anni, vive a " + persona.citta + ".");

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

persona.email = "kldejan.lleshi@email.it";
delete persona.eta;

console.log(persona);

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

let utente = {
   nome: "Kledjan",
   indirizzo: {
      via: "Via trota 10",
      citta: "Lucca",
      cap: "50123",
   },
};

console.log(utente.indirizzo.cap);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

let chiave = "nome";
console.log(persona[chiave]);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

let a = 7;
let b = 12;
let c = 5;

if (a > b && a > c) {
   console.log("Il più grande è a: " + a);
} else if (b > a && b > c) {
   console.log("Il più grande è b: " + b);
} else if (c > a && c > b) {
   console.log("Il più grande è c: " + c);
} else {
   console.log("Pareggio");
}

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

let totale = 35;

// Versione 1: if/else
let spedizione1;
if (totale >= 50) {
   spedizione1 = 0;
} else {
   spedizione1 = 9.9;
}
let finale1 = totale + spedizione1;

console.log(
   "Totale carrello: " + totale + "€ — Spedizione: " + spedizione1.toFixed(2) + "€ — Totale finale: " + finale1.toFixed(2) + "€"
);

// Versione 2: ternario
let spedizione2 = totale >= 50 ? 0 : 9.9;
let finale2 = totale + spedizione2;

console.log(
   "Totale carrello: " + totale + "€ — Spedizione: " + spedizione2.toFixed(2) + "€ — Totale finale: " + finale2.toFixed(2) + "€"
);

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

let valori = [42, "ciao", true];

for (let i = 0; i < valori.length; i++) {
   if (typeof valori[i] === "number") {
      console.log(valori[i] + " è un numero");
   } else {
      console.log(valori[i] + " non è un numero");
   }
}

/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

let numeri = [];

numeri.push(1);
numeri.push(2);
numeri.push(3);
numeri.push(4);
numeri.push(5);
numeri.unshift(0); 

console.log(numeri); 
console.log(numeri.length);

/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

let carrello = ["Penna", "Quaderno", "Zaino", "Astuccio"];

carrello.splice(1, 1);
console.log(carrello); 

carrello.splice(1, 0, "Diario"); 
console.log(carrello); 

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

let prodotti = ["Penna", "Quaderno", "Zaino"];
let cercato = "Zaino";

console.log(cercato + " è in carrello: " + prodotti.includes(cercato));

let posizione = prodotti.indexOf(cercato);
if (posizione !== -1) {
   console.log("Posizione: " + posizione); // Posizione: 2
} else {
   console.log("Non in carrello");
}

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

let utenti = [
   { nome: "Mario", eta: 25 },
   { nome: "Giulia", eta: 30 },
   { nome: "Luca", eta: 22 },
];

for (let i = 0; i < utenti.length; i++) {
   console.log(utenti[i].nome + " (" + utenti[i].eta + " anni)");
}

console.table(utenti);

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

let inventario = [
   { nome: "Penna", prezzo: 2, disponibile: true },
   { nome: "Zaino", prezzo: 35, disponibile: true },
   { nome: "Quaderno", prezzo: 5, disponibile: false },
   { nome: "Astuccio", prezzo: 8, disponibile: true },
];

for (let i = 0; i < inventario.length; i++) {
   let p = inventario[i];

   if (p.disponibile && p.prezzo < 10) {
      console.log("OFFERTA: " + p.nome + " (" + p.prezzo + "€)");
   } else if (p.disponibile && p.prezzo >= 10) {
      console.log(p.nome + " — " + p.prezzo + "€");
   } else {
      console.log(p.nome + " — esaurito");
   }
}

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

let originale = [1, 2, 3, 4, 5];
let inverso = [];

for (let i = originale.length - 1; i >= 0; i--) {
   inverso.push(originale[i]);
}

console.log(inverso);
