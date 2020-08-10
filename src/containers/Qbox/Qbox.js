import React,{Fragment,useEffect} from 'react';
import './Qbox.css';
import Question from '../../components/Question/Question';



const Qbox = props => {
   
    // let [selOpt,setSelOpt] = useState({prev:-1,next:-1});

    
    return(
        <Fragment >
            <div className="qsection" >
                <p className='qno'>Q.{props.qno+1}</p>
                <Question>{props.question}</Question>
            </div>
           
            
        </Fragment>
    )
}
export default Qbox;