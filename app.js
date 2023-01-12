let gameNumber = 0

// create game
const newGame = () => {
  let gameArray = ['','','','','','','','',''];
  const popBoard = () => {
    for (let i = 0; i < 9; i++) {
      const newSquare = document.createElement('div');
      newSquare.textContent = gameArray[i];
      gameBoard.appendChild(newSquare);
    }
  };

  const winCheck = (gameArray) => {
    const WINNING_COMBINATIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++){
      if (gameArray[WINNING_COMBINATIONS[i][0]] == 'x' && gameArray[WINNING_COMBINATIONS[i][1]] == 'x' && gameArray[WINNING_COMBINATIONS[i][2]] == 'x') {
        playerOneWin();
      } else if (gameArray[WINNING_COMBINATIONS[i][0]] == 'o' && gameArray[WINNING_COMBINATIONS[i][1]] == 'o' && gameArray[WINNING_COMBINATIONS[i][2]] == 'o')
    }
  }

  const createPlayers = () => {
    const playerOne = newPlayer('x');
    const playerTwo = newPlayer('o');
  }

  // make a function that sets game array to 0 or creates a new game
  const playerOneWin = () => {
    playerOne.playerScore++;
  }
  const playerTwoWin = () => {
    playerOne.playerScore++;
  }

  gameNumber++;
};

// create player

const newPlayer = (mark) => {
  let playerScore = 0;
  const mark = mark
  return (playerScore , mark)
};

const PLAYER_X_CLASS = 'x'
const PLAYER_O_CLASS = 'circle'
