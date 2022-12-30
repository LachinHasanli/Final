// components
import Main from "./components/Main";
import Pyramid from "./components/Pyramid";
import Start from "./components/Start";

// css file
import { useEffect, useState } from "react";
import './app.css';

// import the data 
import { pyramidData, Question } from "./Question_Prize";

function App() {

  const [name,setName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [ stopgame, setStopGame] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  useEffect(() => {
    questionNumber > 1 && setEarned(pyramidData.find((d) => d.id === questionNumber - 1).amount);
  },[questionNumber])

  return (
    
    name?
    <div className="app">
      
    <div className="main">

      {stopgame || questionNumber > 15?
       
        <div className="score">

          <h1> {name} Earned : {earned} </h1>
          <button onClick={() => window.location.reload()} >Play Again</button>

      </div>
      :

      (<Main  questionNumber={questionNumber} data={Question} setStopGame={setStopGame} setQuestionNumber={setQuestionNumber} />)
      
      }
    </div>
    
    <Pyramid activePyramidId={questionNumber}/>
  </div>
  : <Start setName={setName} />

  );
}

export default App;
