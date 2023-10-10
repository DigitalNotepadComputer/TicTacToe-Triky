const cells = Array.from(document.querySelectorAll('.cell'));
let currentPlayer = 'X';
let isGameOver = false;

function makeMove(index) {
    const cell = cells[index];
    if (cell.textContent !== '' || isGameOver) return;

    cell.textContent = currentPlayer;
    checkForWin();
    togglePlayer();
}

function checkForWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Lineas Horizontales (Rows)
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Lineas Verticales (Columns)
        [0, 4, 8],
        [2, 4, 6]
        // Lineas Diagonales (Diagonals)
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            isGameOver = true;
            cells[a].style.backgroundColor = 'green';
            cells[b].style.backgroundColor = 'green';
            cells[c].style.backgroundColor = 'green';
            alert(currentPlayer + ' Wins!');
            return;
        }
    }

    if (!cells.some(cell => cell.textContent === '')) {
        isGameOver = true;
        alert('It\'s a Draw!');
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}