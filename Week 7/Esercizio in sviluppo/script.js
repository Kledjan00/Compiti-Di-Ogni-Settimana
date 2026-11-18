// Mini-libreria — Settimana VII Giorno III
// D2: persistenza in localStorage (i libri sopravvivono al refresh).
// D3: ricerca su Open Library con fetch + debounce (in fondo al file).


// === Classi (dal D1) ===

class Libro {
  letto = false;

  constructor(titolo, autore, anno) {
    this.id = crypto.randomUUID(); // resta univoco anche dopo il reload
    this.titolo = titolo;
    this.autore = autore;
    this.anno = anno;
  }

  segnaComeLetto() {
    this.letto = true;
  }

  formato() {
    return "cartaceo";
  }

  // Ricostruisce un'istanza da un oggetto letto da JSON.
  // "this" in un metodo static è la classe su cui lo chiami:
  // Libro.fromJSON(d) crea un Libro, LibroDigitale.fromJSON(d) un LibroDigitale.
  // Object.assign copia id, letto (e dimensioneMb) dall'oggetto salvato.
  static fromJSON(d) {
    return Object.assign(new this(d.titolo, d.autore, d.anno), d);
  }
}

class LibroDigitale extends Libro {
  constructor(titolo, autore, anno, dimensioneMb) {
    super(titolo, autore, anno);
    this.dimensioneMb = dimensioneMb;
  }

  formato() {
    return `digitale (${this.dimensioneMb} MB)`;
  }
}


// === Persistenza ===

const STORAGE_KEY = "libri";

function salvaLibri() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(libri));
}

function caricaLibri() {
  // ?? "[]": se la chiave non esiste getItem restituisce null
  const dati = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");

  // JSON.parse restituisce oggetti puri: ri-istanziamo la classe giusta
  // per riavere i metodi (segnaComeLetto, formato).
  return dati.map((d) =>
    d.dimensioneMb !== undefined ? LibroDigitale.fromJSON(d) : Libro.fromJSON(d),
  );
}


// === Stato ===

let libri = caricaLibri();


// === Render ===

function crea(tag, classe, testo) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (testo !== undefined) el.textContent = testo;
  return el;
}

function creaBottone(azione, testo) {
  const b = crea("button", "", testo);
  b.type = "button";
  b.dataset.azione = azione;
  return b;
}

function renderLibri() {
  const righe = libri.map((l) => {
    const li = crea("li", l.letto ? "letto" : "");
    li.dataset.id = l.id;

    const info = crea("div", "info");
    info.append(
      crea("span", "titolo", l.titolo),
      crea("span", "badge-formato", l.formato()),
      crea("div", "meta", `${l.autore} — ${l.anno}`),
    );

    const azioni = crea("div", "azioni");
    azioni.append(
      l.letto ? crea("span", "", "✓ letto") : creaBottone("leggi", "Segna come letto"),
      creaBottone("rimuovi", "Rimuovi"),
    );

    li.append(info, azioni);
    return li;
  });

  const lista = document.getElementById("lista-libri");
  if (righe.length === 0) {
    lista.replaceChildren(crea("li", "vuota", "Nessun libro salvato."));
  } else {
    lista.replaceChildren(...righe);
  }
  document.getElementById("contatore").textContent = libri.length;
}


// === Eventi ===

document.getElementById("formato").addEventListener("change", (e) => {
  document.getElementById("campo-dimensione").hidden = e.target.value !== "digitale";
});

document.getElementById("aggiungi-libro").addEventListener("submit", (e) => {
  e.preventDefault();

  const { titolo, autore, anno, formato, dimensione } =
    Object.fromEntries(new FormData(e.target));

  const nuovo = formato === "digitale"
    ? new LibroDigitale(titolo, autore, Number(anno), Number(dimensione) || 0)
    : new Libro(titolo, autore, Number(anno));

  libri.push(nuovo);
  salvaLibri();
  renderLibri();
  e.target.reset();
  document.getElementById("campo-dimensione").hidden = true;
});

document.getElementById("lista-libri").addEventListener("click", (e) => {
  const bottone = e.target.closest("[data-azione]");
  if (!bottone) return;

  const id = bottone.closest("li").dataset.id;

  if (bottone.dataset.azione === "leggi") {
    libri.find((l) => l.id === id)?.segnaComeLetto();
  } else if (bottone.dataset.azione === "rimuovi") {
    libri = libri.filter((l) => l.id !== id);
  }

  salvaLibri();
  renderLibri();
});

// Bottone "Svuota tutto"
document.getElementById("svuota-tutto").addEventListener("click", () => {
  libri = [];
  localStorage.removeItem(STORAGE_KEY);
  renderLibri();
});

// Un'altra tab ha modificato localStorage: ricarichiamo la lista (evento storage)
window.addEventListener("storage", (e) => {
  if (e.key !== STORAGE_KEY && e.key !== null) return;
  libri = caricaLibri();
  renderLibri();
});


// === Nuovo D3: ricerca su Open Library ===

const API = "https://openlibrary.org/search.json";
const spinner = document.getElementById("spinner");
const errore = document.getElementById("errore");
const risultati = document.getElementById("risultati");

// mostra "Caricamento in corso..." e nasconde l'errore di prima
function mostraSpinner() {
  spinner.hidden = false;
  errore.hidden = true;
}

function nascondiSpinner() {
  spinner.hidden = true;
}

// l'alert rosso con il messaggio
function mostraErrore(msg) {
  errore.textContent = msg;
  errore.hidden = false;
}

let controller;

function cerca(query) {
  // se c'è ancora una ricerca in corso la annullo
  controller?.abort();
  controller = new AbortController();
  const { signal } = controller;
  mostraSpinner();

  const url = new URL(API);
  url.searchParams.set("q", query);
  url.searchParams.set("limit", 10);

  fetch(url, { signal })
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then((dati) => renderRisultati(dati.docs))
    .catch((err) => {
      // la ricerca annullata non è un vero errore
      if (err.name === "AbortError") return;
      mostraErrore(`Ricerca non riuscita: ${err.message}`);
    })
    .finally(() => {
      if (!signal.aborted) nascondiSpinner();
    });
}

function renderRisultati(docs) {
  if (docs.length === 0) {
    risultati.replaceChildren(crea("li", "", "Nessun risultato."));
    return;
  }

  const righe = docs.map((d) => {
    // se mancano autore o anno non va in errore
    const autore = d.author_name?.[0] ?? "Autore sconosciuto";
    const anno = d.first_publish_year ?? "?";

    const info = crea("div", "info");
    info.append(
      crea("span", "titolo", d.title),
      crea("div", "meta", `${autore} — ${anno}`),
    );

    // i dati del libro restano nel bottone 'Aggiungi'
    const bottone = crea("button", "", "Aggiungi");
    bottone.type = "button";
    bottone.dataset.titolo = d.title;
    bottone.dataset.autore = autore;
    bottone.dataset.anno = anno;

    const li = crea("li");
    li.append(info, bottone);
    return li;
  });

  risultati.replaceChildren(...righe);
}

// debounce: la ricerca parte 400ms dopo l'ultimo tasto
let timeoutId;

document.getElementById("cerca").addEventListener("input", (e) => {
  const query = e.target.value.trim();
  clearTimeout(timeoutId);

  if (query.length < 3) {
    risultati.innerHTML = "";
    return;
  }

  timeoutId = setTimeout(() => cerca(query), 400);
});

// 'Aggiungi' su un risultato: il libro entra nella libreria
risultati.addEventListener("click", (e) => {
  const bottone = e.target.closest("button[data-titolo]");
  if (!bottone) return;

  const { titolo, autore, anno } = bottone.dataset;
  libri.push(new Libro(titolo, autore, Number(anno) || 0));
  salvaLibri();
  renderLibri();

  bottone.textContent = "✓ Aggiunto";
  bottone.disabled = true;
});


// === Render iniziale (con i dati di localStorage, se presenti) ===
renderLibri();
