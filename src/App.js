import { useState } from "react";
import "./App.css";
import Square from "./Square";


function App() {
  // const test = "It is a test.";
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

function handleClick(){
  setSquares((["", "", "", "", "", "", "", "", ""]))
  setPlayer(true)
}
function calculateWinner(arr) {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
          arr[a] &&
          arr[a] === arr[b] &&
          arr[a] === arr[c]
      ) {
          return `${arr[a]} won!`;
      }
  }
  return "Who will win?";
}
  return (
    
    <div className="App">
      {/* <Square propVar={test}/> */}
      {/* <Square  
    squares={squares}
    setSquares={setSquares}
    player={player}
    setPlayer={setPlayer}
    /> */}

    <span>{calculateWinner(squares)}</span>
    <div className="container">
      {squares.map((val,index)=>{
          return(
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={val}
              key={index}
            />
          )
      })}
    </div>
    <button onClick={handleClick}></button>
    </div>
  );
}

export default App;

