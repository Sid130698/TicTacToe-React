import Square from "./Square";
import {useState} from 'react';
import './GameBoard.css'
function GameBoard({updateXscore,update0score}){
    const [squares,setSquares]=useState(Array(9).fill(null))
    const [isXMove,setIsXMove]=useState(true);
    function movePlayed(i){
        const tempArray = squares;
        if(tempArray[i]===null){
        if(isXMove){
            tempArray[i]="X";
        }
        else{
            tempArray[i]="0";
        }
        setIsXMove(!isXMove);
    }
        setSquares(tempArray);
        setTimeout(()=>{
            var checkGameWinner = calculateWinner(squares);
            if("X"===checkGameWinner){
                updateXscore()
                alert("Player X is winner");
                setSquares(Array(9).fill(null))
            }
            else if("0"===checkGameWinner){
                setSquares(Array(9).fill(null))
                update0score();
                alert("Player 0 is winner");
    
            }
        },500)           
    }
    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2], // Horizontal
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6], // Vertical
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8], // Diagonal
          [2, 4, 6]
        ];
      
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // Return the winner ("X" or "O")
          }
        }
        return null; // Return null if no winner
      }
    return (
        <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <div className="game-board">
        {squares.map((move, index) => (
        <Square key={index} move={move} onClick={() => movePlayed(index)} />
      ))}
        </div>
        </div>
    )
}
export default GameBoard;