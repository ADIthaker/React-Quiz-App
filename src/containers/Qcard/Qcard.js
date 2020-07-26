import React,{useState,useEffect, Fragment,useMemo} from 'react';
import './Qcard.css';
import axios from '../../axios-config';
import Qbox from '../Qbox/Qbox';
import Button from '../../components/Button/Button';
let rotateArr = (arr)=>{
    let n = Math.floor(Math.random()+3);
    for(let i =0;i<n+1;i++){
        let el = arr.pop();
        arr.unshift(el);
    }
    return arr;
}
const Qcard = props => {
    let i=0;
    let cards = useMemo(()=>props.questions.map(result=>{
        let correct_ans = result.correct_answer;
        let wrong_ans = result.incorrect_answers;
        let options = rotateArr([correct_ans,...wrong_ans]);
        return {
            question:result.question,
            options:options,
            index:i++,
        }
    }));
    
    let [initialCard,setCard] = useState(cards[0]);
    console.log(cards);

    let prevQuestionHandler = () => {
        
      setCard(prevCard=>{
        console.log(prevCard.index-1);
          return cards[prevCard.index-1]
        });
    }
     let nextQuestionHandler = () => {
        
        setCard(prevCard=>{
            console.log(prevCard.index+1);
           return cards[prevCard.index+1]
        });
     }
    let prevButton,nextButton,submitButton=null;
    if(initialCard.index===0){
        prevButton=null;
    }else{
        prevButton = <Button click={prevQuestionHandler}>Prev</Button>;
    }
    if(initialCard.index===4){
        nextButton=null;
        submitButton=<Button>Submit Quiz</Button>
    }else{
        nextButton= <Button click={nextQuestionHandler}>Next</Button> ;
        
    }

    return(
        
        <div className="qcard">
            <Qbox question={initialCard.question} options={initialCard.options} qno={initialCard.index} /> 
           <div className="buttonsection">
                {prevButton}
                {nextButton}
                {submitButton}     
            </div> 
        </div>
    );

}
export default Qcard;