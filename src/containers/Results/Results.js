import React from 'react';
import '../Qcard/Qcard.css'
import Qbox from '../Qbox/Qbox';
import Option from '../../components/Option/Option';

const Results = props=>{
    let q = props.cards.map(card=>{
        return {
            options:card.options,
            qno:card.index,
            question:card.question,
            correct_index: card.correct_ans,
            selected_index : props.answerlist[card.index],
        }
    });
    let cnt=0;
    q.forEach(eq=>{
        if(eq.correct_index===eq.selected_index){
            cnt++;
        }
    });
    

    return (
    
       <div>
          <h1 style={{marginTop:"2.5rem",fontFamily:'Open Sans',color:'whitesmoke'}}>{props.username.charAt(0).toUpperCase()+props.username.substr(1,props.username.length-1)} you scored {cnt} points!!</h1>
           {q.map((eq)=>{
               let opSet=eq.options.map((option,i)=>{
                    if(i!==eq.correct_index && i!==eq.selected_index){
                        return <Option key={i} result >{option}</Option>
                    }else if(i===eq.correct_index){
                        return <Option key={i} right>{option}</Option>
                    }else if(i===eq.selected_index && eq.selected_index!==eq.correct_index){
                        cnt++;
                        return <Option key={i} wrong>{option}</Option>
                    }
                })
               return(<div className='qcard'>
                <Qbox 
                key={eq.question}
                question={eq.question} 
                qno={eq.qno} 
                optSet={eq.selectedOption}
                /> 
                {opSet}
                </div>)

           }
        )}
           <div className="linkbutton"><a href="/">New Quiz</a></div>
       </div>
    
    )
}
export default Results;