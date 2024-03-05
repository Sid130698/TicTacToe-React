import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import {useState} from 'react';


function App() {
    const [playerXScore, setPlayerXScore] = useState(0);
    const [player0Score, setPlayer0Score] = useState(0);
    const updateXscore = () => {
        setPlayerXScore(playerXScore+1);
    };
    function update0score(){
        setPlayer0Score(player0Score+1);
    }
  return (
    <div className="App">
        <ScoreBoard playerXScore={playerXScore} player0Score={player0Score}/>
     <GameBoard updateXscore={updateXscore} update0score={update0score}/>
    </div>
  );
}

export default App;
