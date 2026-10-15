/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/



const nome = "Kledjan";
const cognome = "Lleshi";
console.log('Ciao, mi chiamo ${nome} ${cognome}.');

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

let a= 12;
let b = 2;
console.log('${a} + ${b} = ${a + b}');
console.log('${a} - ${b} = ${a - b}');
console.log('${a} * ${b} = ${a * b}');
console.log('${a} / ${b} = ${a / b}');
console.log('${a} % ${b} = ${a % b}');
console.log('${a} ** ${b} = ${a ** b}');


/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

const annoNascita = 2002;
const annoCorrente = 2026;
const etaOggi = annoCorrente - annoNascita;
console.log('Oggi hai ${etaOggi} anni.');
console.log('Tra 10 anni avrai ${etaOggi + 10} anni.');
console.log('5 anni fa avevi ${etaOggi - 5} anni.');

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

let eta = 24;
let maggiorenne = eta >= 18;
console.log('Età: ${eta} — Maggiorenne: ${maggiorenne}');

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

let myString = "ciao";
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined;

console.log('myString è di tipo: ${typeof myString}');
console.log('myNumberr è di tipo: ${typeof myNumber}');
console.log('myBoolean è di tipo: ${typeof myBoolean}');
console.log('myNull è di tipo: ${typeof myNull}');
console.log('myUndefined è di tipo: ${typeof myUndefined}');
// typeof null ritorna "object".
// significa "valore vuoto

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/


let numero = 5;
let stringa = "5";
console.log(numero == stringa); // true
console.log(numero === stringa); // false

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/


console.log("5" + 3);
console.log("5" - 3);
console.log(true + 1);
console.log("10" * "2");
// "5" + 3 = "53" 
// "5" - 3 = 2     
// true + 1 = 2    
// "10" * "2" = 20   


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

let n;
n = 24;
console.log('n è pari: ${n % 2 === 0}');
console.log('n è dividibile per 3: ${n % 3 === 0}');
console.log('n è pari e dividibile per 3: ${n % 2 === 0 && n % 3 === 0}');


/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
