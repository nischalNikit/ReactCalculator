import React from 'react';
import classes from './Control.css';

const control = props => {

    let method = null;

    if(props.input){
        method = props.input;
    }
    if(props.modify){
        method = props.modify;
    }
    if(props.clear){
        method = props.clear;
    }
    if(props.calculate){
        method = props.calculate;
    }

    return(
        <div className = {classes.Control} onClick = {method}>
            {props.controlValue}
        </div>
    )
}

export default control;
