let griglia = document.querySelector('#griglia');
let punteggioElem = document.querySelector('#punti');
let tempoElem = document.querySelector('#tempo');
let startButton = document.querySelector('#Inizia');
let punteggio = 0;
let tempo = 30;
let timer;
let activeCell = null;
let cellInterval;

function startGame() {
    punteggio = 0;
    tempo = 30;
    punteggioElem.textContent = punteggio;
    tempoElem.textContent = tempo;
    startButton.disabled = true;

    timer = setInterval(function() {
        tempo--;
        tempoElem.textContent = tempo;

        if (tempo = 0) {
            clearInterval(timer);
            clearInterval(cellInterval);
            startButton.disabled = false;
            removeActiveCell();
        }
    }, 1000);

    startRandomLighting();
}

function startRandomLighting() {
    let cells = document.querySelectorAll('.cellblock');

    cellInterval = setInterval(function() {
        removeActiveCell();

        let randomIndex = Math.floor(Math.random() * cells.length);
        activeCell = cells[randomIndex];
        activeCell.classList.add('active');

        activeCell.onclick = function() {
            punteggio++;
            punteggioElem.textContent = punteggio;
            removeActiveCell();
        };
    }, 1000); 
}

function removeActiveCell() {
    if (activeCell) {
        activeCell.classList.remove('active');
        activeCell.onclick = null;
        activeCell = null;
    }
}

startButton.addEventListener('click', function() {
    startGame();
});
