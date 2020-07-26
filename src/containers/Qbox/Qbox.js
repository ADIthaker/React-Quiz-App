import React,{Fragment,useState, useEffect} from 'react';
import './Qbox.css';
import Question from '../../components/Question/Question';
import Option from '../../components/Option/Option';


const Qbox = props => {
  console.log('in qbox.js')
    return(
        <Fragment>
            <div className="qsection">
            <p className='qno'>Q.{props.qno+1}</p>
                <Question>{props.question}</Question>
            </div>
            <div className="optsection">
                <Option>{props.options[0]}</Option>
                <Option>{props.options[1]}</Option>
                <Option>{props.options[2]}</Option>
                <Option>{props.options[3]}</Option>

            </div>
            
        </Fragment>
    )
}
export default Qbox;