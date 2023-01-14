/* eslint-disable no-plusplus */

const newScreen = document.querySelector('#new-screen');
const newGameBtn = document.querySelector('#new-game');

// create player
const newPlayer = (mark) => {
  // eslint-disable-next-line prefer-const
  const playerScore = 0;
  return { playerScore, mark };
};

const playerOne = newPlayer('x');
const playerTwo = newPlayer('o');

const gameObject = {
  gameArray: ['', '', '', '', '', '', '', '', ''],
  playNumber: 0,
};

// universal methods
const gameMethods = (() => {
  const gameBoard = document.querySelector('#board');

  const removeOld = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  const scorePop = (playerOneScore, playerTwoScore) => {
    const playerOneScoreDiv = document.querySelector('#player-one-score');
    const playerTwoScoreDiv = document.querySelector('#player-two-score');

    playerOneScoreDiv.textContent = `Player One: ${playerOneScore}`;
    playerTwoScoreDiv.textContent = `Player Two: ${playerTwoScore}`;
  };

  // player win methods
  const playerOneWin = () => {
    playerOne.playerScore++;
    scorePop(playerOne.playerScore, playerTwo.playerScore);
    gameObject.gameArray = ['', '', '', '', '', '', '', '', ''];
    newScreen.style.visibility = 'visible';
  };
  const playerTwoWin = () => {
    playerTwo.playerScore++;
    scorePop(playerOne.playerScore, playerTwo.playerScore);
    gameObject.gameArray = ['', '', '', '', '', '', '', '', ''];
    newScreen.style.visibility = 'visible';
  };

  // win check
  const winCheck = (array) => {
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
      if (array[WINNING_COMBINATIONS[i][0]] === 'x' && array[WINNING_COMBINATIONS[i][1]] === 'x' && array[WINNING_COMBINATIONS[i][2]] === 'x') {
        playerOneWin();
      } else if (array[WINNING_COMBINATIONS[i][0]] === 'o' && array[WINNING_COMBINATIONS[i][1]] === 'o' && array[WINNING_COMBINATIONS[i][2]] === 'o') {
        playerTwoWin();
      }
    }
  };

  const popBoard = () => {
    removeOld(gameBoard);
    for (let i = 0; i < 9; i++) {
      const newSquare = document.createElement('div');
      newSquare.addEventListener('click', () => {
        gameObject.gameArray.splice(i, 1, gameObject.playNumber % 2 === 0 ? 'x' : 'o');
        popBoard();
        gameObject.playNumber++;
        winCheck(gameObject.gameArray);
      });
      newSquare.textContent = gameObject.gameArray[i];
      gameBoard.appendChild(newSquare);
    }
  };
  return {
    winCheck, playerOneWin, playerTwoWin, popBoard,
  };
})();

newGameBtn.addEventListener('click', () => {
  gameMethods.popBoard();
  newScreen.style.visibility = 'hidden';
});
gameMethods.popBoard();
