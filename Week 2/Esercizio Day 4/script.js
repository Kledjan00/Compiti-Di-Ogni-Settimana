/* ESERCIZIO 1 — area
   Funzione area(l1, l2) che ritorna l1 * l2.
   Stampa area(3, 4).
*/

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(3, 4)); // 12

/* ESERCIZIO 2 — sommaPazza
   Funzione sommaPazza(a, b): ritorna a + b.
   Se a === b: ritorna (a + b) * 3.
   Prova con (2, 3) e (4, 4).
*/

function sommaPazza(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}

console.log(sommaPazza(2, 3)); // 5
console.log(sommaPazza(4, 4)); // 24

/* ESERCIZIO 3 — distanzaDa19
   Funzione distanzaDa19(n): ritorna Math.abs(n - 19).
   Se n > 19: ritorna distanza * 3.
   Prova con 5 e 25.
*/

function distanzaDa19(n) {
  let distanza = Math.abs(n - 19);
  if (n > 19) {
    return distanza * 3;
  } else {
    return distanza;
  }
}

console.log(distanzaDa19(5)); // 14
console.log(distanzaDa19(25)); // 18

/* ESERCIZIO 4 — dentroIntervallo
   Funzione dentroIntervallo(n):
   true se n è tra 20 e 100 (compresi) oppure è esattamente 400.
*/

function dentroIntervallo(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(dentroIntervallo(50)); // true
console.log(dentroIntervallo(400)); // true
console.log(dentroIntervallo(150)); // false

/* ESERCIZIO 5 — epify
   Funzione epify(testo): aggiunge "EPICODE " davanti.
   Se il testo comincia già con "EPICODE", lo lascia invariato.
   Usa startsWith.
*/

function epify(testo) {
  if (testo.startsWith("EPICODE")) {
    return testo;
  } else {
    return "EPICODE " + testo;
  }
}

console.log(epify("corso JavaScript")); // "EPICODE corso JavaScript"
console.log(epify("EPICODE corso JavaScript")); // invariato

/* ESERCIZIO 6 — divisibilePer3o7
   Funzione divisibilePer3o7(n): true se n positivo E divisibile per 3 O per 7.
*/

function divisibilePer3o7(n) {
  if (n > 0 && (n % 3 === 0 || n % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(divisibilePer3o7(9)); // true
console.log(divisibilePer3o7(14)); // true
console.log(divisibilePer3o7(10)); // false
console.log(divisibilePer3o7(-3)); // false

/* ESERCIZIO 7 — invertiStringa
   Funzione invertiStringa(testo): ritorna la stringa invertita.
   Vincolo: niente .reverse() di array.
   Suggerimento: split("") + for al contrario + join("").
*/

function invertiStringa(testo) {
  let lettere = testo.split("");
  let invertite = [];
  for (let i = lettere.length - 1; i >= 0; i--) {
    invertite.push(lettere[i]);
  }
  return invertite.join("");
}

console.log(invertiStringa("ciao")); // "oaic"

/* ESERCIZIO 8 — inizialiMaiuscole
   Funzione inizialiMaiuscole(frase): metti in maiuscolo la prima lettera di ogni parola.
   "ciao mondo" → "Ciao Mondo".
   Suggerimento: split(" ") + for + slice(0,1).toUpperCase() + slice(1) + join(" ").
*/

function inizialiMaiuscole(frase) {
  let parole = frase.split(" ");
  for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i].slice(0, 1).toUpperCase() + parole[i].slice(1);
  }
  return parole.join(" ");
}

console.log(inizialiMaiuscole("ciao mondo")); // "Ciao Mondo"

/* ESERCIZIO 9 — togliPrimoEUltimo
   Funzione togliPrimoEUltimo(testo): rimuovi primo e ultimo carattere.
   Usa slice. Prova con "EPICODE".
*/

function togliPrimoEUltimo(testo) {
  return testo.slice(1, testo.length - 1);
}

console.log(togliPrimoEUltimo("EPICODE")); // "PICOD"

/* ESERCIZIO 10 — dammiCasuali
   Funzione dammiCasuali(n): ritorna un array di n numeri interi casuali tra 0 e 10 (inclusi).
   Usa Math.random e Math.floor.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 11 — etaInGiorni
   ...
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10 — dammiCasuali
   Funzione dammiCasuali(n): ritorna un array di n numeri interi casuali tra 0 e 10 (inclusi).
   Usa Math.random e Math.floor.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 11 — etaInGiorni
   Funzione etaInGiorni(annoNascita, meseNascita, giornoNascita).
   Ritorna l'età in giorni rispetto a oggi.
   - new Date() per oggi
   - new Date(anno, mese - 1, giorno) per la nascita (mese 0-based!)
   - oggi - nascita = millisecondi
   - dividi per 1000 * 60 * 60 * 24 e Math.floor per i giorni interi
   Stampa: "Hai X giorni!"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
