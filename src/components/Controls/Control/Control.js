import React from 'react';
import classes from './Control.css';

const control = props => {
    return(
        <div className = {classes.Control}>
            {props.controlValue}
        </div>
    )
}

export default control;
