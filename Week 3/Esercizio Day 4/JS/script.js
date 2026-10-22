// numeri ancora da estrarre
let remainingNumbers = [];

// numeri già estratti
let extractedNumbers = [];


const lastNumberDiv = document.querySelector('#numero-estratto');
const historyP = document.querySelector('#cronologia');
const boardDiv = document.querySelector('#tabellone');
const extractButton = document.querySelector('#bottone-estrai');
const restartButton = document.querySelector('#bottone-ricomincia');

// il tabellone
const createBoard = () => {
	for (let i = 1; i <= 90; i++) {
		const cell = document.createElement('div');
		cell.classList.add('cella');
		cell.innerText = i;
		boardDiv.appendChild(cell);
	}
};
//
// l'array con i numeri da 1 a 90
const fillRemainingNumbers = () => {
	remainingNumbers = [];
	for (let i = 1; i <= 90; i++) {
		remainingNumbers.push(i);
	}
};

// cronologia dei gli ultimi 10 numeri
const showHistory = () => {
	if (extractedNumbers.length === 0) {
		historyP.innerText = 'Nessun numero estratto.';
		return;
	}
	const lastTen = extractedNumbers.slice(0, 10);
	historyP.innerText = lastTen.join(', ');
};

// Estrazione numero
const extractNumber = () => {
	if (remainingNumbers.length === 0) {
		return;
	}

	// si prende un numero a caso tra quelli che restano e lo togliamo dall'array,
	// così non può uscire due volte
	const index = Math.floor(Math.random() * remainingNumbers.length);
	const number = remainingNumbers.splice(index, 1)[0];
	extractedNumbers.unshift(number);

	// cella nel tabellone, senza ridisegnarlo
	const cells = document.querySelectorAll('.cella');
	cells[number - 1].classList.add('estratta');

	lastNumberDiv.innerText = number;
	showHistory();

	// se sono usciti tutti e 90, il bottone si disattiva
	if (remainingNumbers.length === 0) {
		extractButton.disabled = true;
	}
};

// Ricomincia la partita
const restart = () => {
	extractedNumbers = [];
	fillRemainingNumbers();

	const cells = document.querySelectorAll('.cella');
	cells.forEach((cell) => {
		cell.classList.remove('estratta');
	});

	lastNumberDiv.innerText = '—';
	extractButton.disabled = false;
	showHistory();
};

extractButton.addEventListener('click', extractNumber);
restartButton.addEventListener('click', restart);

window.onload = (e) => {
	createBoard();
	restart();
};