import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Life from './component_life/Life.js';



function Question(props){

  var ops = props.incorretas;
  console.log(props.children);
  ops.push(props.children);
  ops.sort();
  console.log(ops);

  function checkAnswer(event){
    let beat = new Audio('erro.mp3');
    if (event.target.value === props.children){
      props.setScore(props.score + 1);
    }
    else{
      beat.play();
      props.setHeart(props.Heart +1);
    }

  }

  return (
    <div className="question">
      <h3 className="question-title">{props.question}</h3>
      <div className = "place-content">
        <form className="form-card" onSubmit={props.respondendo}> 
          {ops.map((op, index) => (
            <button className="op" key={index} onClick={checkAnswer} value={op}>{op}</button>
          ))}
        </form>
      </div>
    </div>
  );
}



function App() {

  const [questions, setQuestions] = useState([]);
  
  const [question, setQuestion] = useState({});

  const [j, setI] = useState(0);

  const [score, setScore] = useState(0);

  const [Heart, setHeart] = useState(1);

  

  const options = {
    method: 'GET',
    url: 'https://the-trivia-api.com/v2/questions',
  };

  const buscaQuestions = (event) => {
    event.preventDefault();
    axios.request(options).then((res) => {
      setQuestions(res.data);
    });
  };

  useEffect(() => {
    if (questions.length > 0) {
      setQuestion(questions[j]);
      setI(j + 1);
    }}, [questions]);

  const respondendo = (event) => {
    event.preventDefault();
    setQuestion(questions[j]);
    setI(j + 1);
  };

  return (
    <div>
      <Life Heart = {Heart} setHeart = {setHeart}/>
    <div className="App">
      <div className="appbar">
            <h1 className="title">Trivia Quiz</h1>
      </div>
      
      <main className="container">
        <form className="form-card" onSubmit={buscaQuestions}>
          <button className="Iniciar" type = 'submit'>Iniciar</button>
        </form>

        <div className = "block_card">
        {(JSON.stringify(question) !== JSON.stringify({})) &&
          <Question id={question.id} 
          score = {score} 
          setScore = {setScore} 
          respondendo = {respondendo} 
          question={question.question.text}
          Heart = {Heart} 
          setHeart = {setHeart} 
          incorretas={question.incorrectAnswers}>{question.correctAnswer} 
          </Question>
        }
        </div>

        <div className="score">
          <h3 className="score-title">Score</h3>
          <h3 className="score-number">{score}</h3>
        </div>
      </main>
    </div>
    </div>
  );
}

export default App;
