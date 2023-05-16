import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function Question(props){

  var ops = props.incorretas;
  console.log(ops);
  ops.push(props.children);
  ops.sort();
  console.log(ops);

  return (
    <div className="question">
      <h3 className="question-title">{props.question}</h3>
      <div className = "place-content">
        <form className="form-card" onSubmit={props.respondendo}> 
          {ops.map((op, index) => (
            <button className="op" key={index}>{op}</button>
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

  // useEffect(() => {
  //   setQuestion(questions[i]);}, [i]);

  const respondendo = (event) => {
    event.preventDefault();
    setQuestion(questions[j]);
    setI(j + 1);
    console.log(j);
  };

  console.log(question);

  return (
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
          <Question id={question.id} respondendo = {respondendo} question={question.question.text} incorretas={question.incorrectAnswers}>{question.correctAnswer}</Question>
        }
        </div>

      </main>
    </div>
  );
}

export default App;
