/* eslint-disable no-plusplus */

// create player
const newPlayer = (mark) => {
  const playerScore = 0;
  return (playerScore, mark);
};

// create game
const newGame = () => {
  const gameArray = ['', '', '', '', '', '', '', '', ''];
  const playerOneScoreDiv = document.querySelector('#player-one-score');
  const playerTwoScoreDiv = document.querySelector('#player-two-score');
  const playerOne = newPlayer('x');
  const playerTwo = newPlayer('o');

  const popBoard = () => {
    const gameBoard = document.querySelector('#board');
    for (let i = 0; i < 9; i++) {
      const newSquare = document.createElement('div');
      newSquare.textContent = gameArray[i];
      gameBoard.appendChild(newSquare);
    }
  };
  return { playerOne, playerTwo };
};

const gameObject = newGame();

// universal methods
const gameMethods = (() => {
// player win methods
  const playerOneWin = () => {
    gameObject.playerOne.playerScore++;
  };
  const playerTwoWin = () => {
    gameObject.playerTwo.playerScore++;
  };

  // win check
  const winCheck = () => {
    const WINNING_COMBINATIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      if (gameObject.gameArray[WINNING_COMBINATIONS[i][0]] === 'x' && gameObject.gameArray[WINNING_COMBINATIONS[i][1]] === 'x' && gameObject.gameArray[WINNING_COMBINATIONS[i][2]] === 'x') {
        playerOneWin();
      } else if (gameObject.gameArray[WINNING_COMBINATIONS[i][0]] === 'o' && gameObject.gameArray[WINNING_COMBINATIONS[i][1]] === 'o' && gameObject.gameArray[WINNING_COMBINATIONS[i][2]] === 'o') {
        playerTwoWin();
      }
    }
  };
  return { playerOneWin, playerTwoWin };
})();
