const gameState = {
  players: ['x', 'o'],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

let currentPlayer = 'X';

const board = document.querySelector('tbody');

function checkWinner(player) {
  let horizontalCheck = gameState.board.some((row) =>
    row.every((column) => column === player)
  );
  let crossCheck1 = true;
  let crossCheck2 = true;
  for (let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[i][i] !== player) crossCheck1 = false;
    if (gameState.board[i][gameState.board.length - i - 1] !== player)
      crossCheck2 = false;
  }
  let verticalCheck = false;
  for (let i = 0; i < gameState.board.length; i++) {
    verticalCheck = true;
    for (let j = 0; j < gameState.board[i].length; j++) {
      if (gameState.board[j][i] !== player) verticalCheck = false;
    }
    if (verticalCheck) break;
  }
  console.log('Horizontal check', horizontalCheck);
  console.log('Vertical check 2', verticalCheck);
  console.log('cross check 1', crossCheck1);
  console.log('cross check 2', crossCheck2);
}

function tick(event) {
  if (event.target.tagName !== 'TD' || event.target.innerText) return;
  console.log(event.target);
  const row = event.target.dataset.row;
  const column = event.target.dataset.column;
  gameState.board[row][column] = currentPlayer;
  event.target.innerText = currentPlayer;
  checkWinner(currentPlayer);
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

board.addEventListener('click', tick);
