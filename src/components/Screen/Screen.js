import React from 'react';
import classes from './Screen.css';

const screen = props => {

    let subResult = <h3>&nbsp;</h3>;
    if(props.numbers && props.operator){
        if(props.numbers.length === 1){
            subResult = 
            <h3 className = {classes.SubResult}>
                {props.numbers[0]} {props.operator}
            </h3>
        }
        else if(props.numbers.length === 2){
            subResult = 
            <h3 className = {classes.SubResult}>
                {props.numbers[0]} {props.operator} {props.numbers[1]}
            </h3>
        } 
    }
   
    return(
        <div className = {classes.Screen}>
            {subResult}
            <h1 className = {classes.ResultDisplay}>
                {props.displayValue}
            </h1>
        </div>
    )
}

export default screen;