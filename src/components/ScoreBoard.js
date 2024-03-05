import './ScoreBoard.css';

function ScoreBoard({playerXScore,player0Score}){
    return (
        <div className="score-board">
            <h3 className="score">Player X : {playerXScore}</h3>
            <h3 className="score">Player 0 : {player0Score}</h3>
        </div>
    )
}
export default ScoreBoard;