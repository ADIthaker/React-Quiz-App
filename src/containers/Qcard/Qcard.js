import React,{useState} from 'react';
import './Qcard.css';
import axios from '../../axios-config';
import Qbox from '../Qbox/Qbox';
import Button from '../../components/Button/Button';
import Option from '../../components/Option/Option';

import Results from '../Results/Results';

const Qcard = props => {
  
    let i=0; 
    let cards = props.sets;
    let [initialCard,setCard] = useState(cards[0]);
    let [lastQ,setLastQ] = useState(initialCard.index-1);
    let [Answers,setAnswer] = useState([-1,-1,-1,-1,-1]);
    let [isSubmit,setSubmit] = useState(false)
    
    let prevQuestionHandler = () => {
      
      setCard(prevCard=>{
          return cards[prevCard.index-1]
        });
        setLastQ(prevQ=>{
            return initialCard.index;
        });
    
    
    }
     let nextQuestionHandler = () => {
        
        setCard(prevCard=>{
            
           return cards[prevCard.index+1]
        });
        setLastQ(prevQ=>{
            return initialCard.index;
        });
     }
    let submitQuizHandler = (event)=>{
        event.preventDefault();
        let quizObj = [...cards];
        quizObj.forEach(card=>{
            card.selectedOpt=Answers[card.index];
        });
        console.log(quizObj,"from unmount");
        axios.post('https://quizapp-fdbc7.firebaseio.com/quiz.json',quizObj)
        .then(res=>{console.log(res);setSubmit(true)})
        .catch(err=>console.log(err));
    
    }
    let prevButton,nextButton,submitButton=null;
    if(initialCard.index===0){
        prevButton=null;
    }else{
        prevButton = <Button click={prevQuestionHandler}>Prev</Button>;
    }
    if(initialCard.index===4){
        nextButton=null;
        submitButton=<Button click={submitQuizHandler}>Submit Quiz</Button>
    }else{
        nextButton= <Button click={nextQuestionHandler}>Next</Button> ;
    }
    

    let qbox=(
        <div className="qcard">
    <Qbox 
        question={initialCard.question} 
        qno={initialCard.index} 
        optSet={initialCard.selectedOption}
        /> 
     <div className="optsection">
        {initialCard.options.map((q,i)=>{
            if( i===Answers[initialCard.index]){
                return <Option 
                    key={i} 
                    click={event=>{
                       
                        setAnswer(prevAns=>{
                            
                            let newAns = [...prevAns];
                            newAns[initialCard.index]=i;
                            return newAns;
                        });
                    }}
                    selected>{q}</Option>
            }else{
                return <Option 
                    key={i} 
                    click={event=>{
                        setAnswer(prevAns=>{
                            
                            let newAns = [...prevAns];
                            newAns[initialCard.index]=i;
                            return newAns;
                        });
                    }}>{q}</Option>
            }
          
        })
        }                
    </div>
   <div className="buttonsection">
        {prevButton}
        {nextButton}
        {submitButton}     
    </div> 
    </div>
    )
    if(isSubmit){
        
       qbox= <Results username={props.userName} answerlist={Answers} cards={cards}  />
    }
    return(
        <div>
            {qbox}
        </div>
            
        
    );

}
export default Qcard;