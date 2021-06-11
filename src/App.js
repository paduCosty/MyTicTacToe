import { useState } from 'react/cjs/react.development';
import './index.css';

let columns = 0, linies = 0, index = true;
function TicTacToe() {
  const [table, changeContent] = useState(null);

  function gridDesign() {
    const grid = newTicTacToeGrid();
    copyGrid[linies][columns] = table; 
    const press = (i, j) => {
      if(index && copyGrid[i][j] === null && rezultRetunr === '') {
        changeContent('X');
        index = false;
      } else if(copyGrid[i][j] === null && rezultRetunr === ''){
        changeContent('O');
        index = true;
      }
      columns = j;
      linies = i;
    }
    for(let i = 0; i < 3; ++i) {
      for(let j = 0; j < 3; ++j) {
        grid[i][j] = <div id = 'table' key={j} onClick = {() => press (i, j)}> {copyGrid[i][j]}</div>;
      }
    }
    return grid;
  }

  function gameBoardCheck() {
    let forX = "X", forO = "O", arrX = [], arrO = [];
    for(let i = 0; i < 12; ++i) {
      arrX[i] = 0;
      arrO[i] = 0;
    }
    let number = 0, xWinner = false, oWinner = false;
    while(number < 12) {
      for(let i = 0, j = 2; i < 3; ++i, --j) {
        if(number < 3) {
          if(copyGrid[i][number] === forX) {
            ++arrX[number];
          } else if(copyGrid[i][number] === forO) {
            ++arrO[number];
          }
        } else if(number < 6) {
          if(copyGrid[number - 3][i] === forX) {
            ++arrX[number];
          } else if(copyGrid[number - 3][i] === forO) {
            ++arrO[number];
          }
        } else if(number > 5 && number < 9) {
         if(copyGrid[i][i] === forX) {
           ++arrX[number];
          } else if(copyGrid[i][i] === forO) {
            ++arrO[number];
          }
        } else if(number > 8 && number < 12) {
          if(copyGrid[i][j] === forX) {
            ++arrX[number];
          } else if(copyGrid[i][j] === forO) {
            ++arrO[number];
          }
        }
      }
      if(arrO[number] === 3) {
        oWinner = true;
      } else if(arrX[number] === 3) {
        xWinner = true;
      }
      ++number;
    }
    let remiza = 0;
    for(let i = 0; i < 3; ++i) {
      for(let j = 0; j < 3; ++j) {
        if(copyGrid[i][j] === "X" || copyGrid[i][j] === "O") {
          ++remiza;
        }
      }
    }
    if(xWinner) {
      return <h1>X is winnwer!</h1>
    } else if(oWinner) {
      return <h1>O is winnwer!</h1>;
    } else if(remiza === 9) {
      return <h1>Draw game</h1>
    } 
    return '';
  }
  let grid = gridDesign();
  let rezultRetunr = gameBoardCheck();
  return(
    <center>
      <div>
        <h1>Tic Tac Toe!</h1>
        <div id='box'>
          <div id= "game-board">
            {grid}
          </div>
        </div>
      </div>
          {rezultRetunr}
    </center>
  )
}

function generatedGrid(rows, columns, mapper) {
  return Array(rows)
  .fill()
  .map(() => Array(columns).fill().map(mapper));
}
const newTicTacToeGrid = () => generatedGrid(3, 3, () => null);
const copyGrid = newTicTacToeGrid();

export default TicTacToe;
