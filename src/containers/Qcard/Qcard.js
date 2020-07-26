import React,{useState,useEffect} from 'react';
import './Qcard.css';
import axios from '../../axios-config';
import Qbox from '../Qbox/Qbox';

const Qcard = props => {
    return(
        <div className="qcard">
           <Qbox />
           
        </div>
    );
}
export default Qcard;