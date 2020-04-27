import React, { Component } from 'react';
import classes from './Calculator.css';

import Screen from '../components/Screen/Screen';
import Controls from '../components/Controls/Controls';
import Operators from '../components/Operators/Operators';
import Auxiliary from '../hoc/Auxiliary';

class Calculator extends Component {

    state = {
        inputValue : "170"
    }

    render(){
        return(
            <Auxiliary classes = {classes.Calculator}>
                <Screen 
                    displayValue = {this.state.inputValue} 
                />
                <div className = {classes.Keypad}>
                    <Controls />
                    <Operators />
                </div>
            </Auxiliary>
        )
    }
}

export default Calculator;