import React, { useState } from 'react';
import './App.css';
import Qcard from './containers/Qcard/Qcard';
import axios from 'axios';
import {Route, withRouter} from 'react-router-dom';
import Button from './components/Button/Button';


const authentication = {
  userName :'',
  state:false,
};


function App(props) {
  let [initialAuth,setAuthentication] = useState(authentication);
  let [quiz,setQuiz] = useState(null);
  let [inputData,setinputData] = useState('');
  let rotateArr = (arr)=>{
    let n = Math.floor(Math.random()*3);
    for(let i =0;i<n;i++){
        let el = arr.pop();
        arr.unshift(el);
    }
    return arr;
}

let qWithOpt = [],i=0;


    
  const nameChangeHandler = (event)=>{
    
    setinputData(event.target.value);
  }
  
   const submitFormHandler= async (event)=>{
     event.preventDefault();
    
     let url ='https://opentdb.com/api.php?amount=5&type=multiple';
     setAuthentication({state:true,userName:inputData});
     setQuiz(<h1>Loading...</h1>);
     try{
      let res = await axios.get(url);
      let questions = await res.data;
       for (let set of questions.results){
       let options =[set.correct_answer,...set.incorrect_answers];
       options=rotateArr(options,Math.floor(Math.random()*3));
       qWithOpt.push({question:set.question,options:options,index:i++,selectedOpt:-1,correct_ans:options.indexOf(set.correct_answer)});
       setQuiz(<Route path='/' exact render={()=><Qcard sets={qWithOpt} userName={inputData} />} />)
       props.history.push('/');
      }
    }catch(e){
      console.log(e);
    } 
    }
let form = (
    
    <form onSubmit={submitFormHandler} className="authform">
      <h3>Quiz App!</h3>
      <div className="input-field"> 
      
      <input onChange={nameChangeHandler} value={inputData} placeholder="Username"/></div>
      <Button type="submit" >Submit</Button>
</form>);
 
if (initialAuth.state){
  form = null;
}
  return (

    <div className="App">
        {form}
        {quiz}
        
    </div>


  );
}

export default withRouter(App);
