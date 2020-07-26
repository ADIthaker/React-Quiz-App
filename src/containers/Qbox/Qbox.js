import React,{Fragment} from 'react';
import './Qbox.css';
import Question from '../../components/Question/Question';
import Option from '../../components/Option/Option';
import Button from '../../components/Button/Button';

const qbox = props => {
    return(
        <Fragment>
        <div className="qsection">
            <p className='qno'>Q1</p>
            <Question>Lorem ipsum dolor sit amet pharetra tristique. Class aptent taciti sociosqu ad litora torquent?</Question>
        </div>
        <div>
            <Option>Option</Option>
            <Option>Option</Option>
            <Option>Option</Option>
            <Option>Option</Option>
        </div>
        <div className="buttonsection">
            <Button>Prev Q</Button>
            <Button>Next Q</Button>
        </div>
        
        </Fragment>
        

    )
}
export default qbox;