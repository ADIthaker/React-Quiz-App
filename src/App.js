import React from 'react';
import './App.css';
import Qcard from './containers/Qcard/Qcard';

function App() {
  let questions = {"response_code":0,"results":[
    {"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"Along with Oxygen, which element is primarily responsible for the sky appearing blue?","correct_answer":"Nitrogen","incorrect_answers":["Helium","Carbon","Hydrogen"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"The Axiom of Preventive Medicine states that people with ___ risk for a disease should be screened and we should treat ___ of those people.","correct_answer":"low, all","incorrect_answers":["low, some","high, all","high, some"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"What is the chemical formula for ammonia?","correct_answer":"NH3","incorrect_answers":["CO2","NO3","CH4"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"Which planet did the Viking 1 spacecraft send surface images of, starting in 1976?","correct_answer":"Mars","incorrect_answers":["Saturn","Jupiter","Venus"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"Which of the following men does not have a chemical element named after him?","correct_answer":"Sir Isaac Newton","incorrect_answers":["Albert Einstein","Niels Bohr","Enrico Fermi"]}]};
    console.log('in app.js')
  return (
    <div className="App">
      <Qcard questions={questions.results}/>
    </div>
  );
}

export default App;
