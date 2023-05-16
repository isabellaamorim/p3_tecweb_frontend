const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://the-trivia-api.com/v2/questions?limit=10',
  params: {
    category: 'history',
  },
};

async function getData() {
  try {
    const response = await axios.request(options);
    data = response.data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();

<div className = "block_card">
          {questions.map((question, index) => (
            <Question id={`question__${question.id || index}`} question={question.question}>{question.correctAnswer}</Question>
          ))}
      </div>

      //onSubmit={respondendo}