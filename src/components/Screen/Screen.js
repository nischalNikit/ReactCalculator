import React from 'react';
import classes from './Screen.css';

const screen = props => {
    return(
        <div className = {classes.Screen}>
            <h1 className = {classes.ResultDisplay}>
                {props.displayValue}
            </h1>
        </div>
    )
}

export default screen;