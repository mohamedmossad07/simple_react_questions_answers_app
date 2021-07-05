import React from 'react';
import { useState } from 'react';
 import data from './data';
import Question from './Question';
function App() {

  // put questions in a state
  const [questions]=useState(data);

  return (<main>
      <div className="container">
        <h3>Questions and Answers About Login.</h3>
        <section className='info'>
          {questions.map(question =><Question key={question.id}  {...question}/>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
