import React, { Component } from 'react';
import classes from './Calculator.css';

import Screen from '../components/Screen/Screen';
import Controls from '../components/Controls/Controls';
import Operators from '../components/Operators/Operators';
import Auxiliary from '../hoc/Auxiliary';

class Calculator extends Component {
    state = {
        inputValue : "",
        operator: null,
        collection: [],
        result: null
    }

    changeInputValueHandler = (newValue) => {
        let prevValue = this.state.inputValue;
        let newInputValue = prevValue + newValue;
        this.setState({inputValue: newInputValue});
    }

    modifyInputValueHandler = () => {
        let prevValue = this.state.inputValue.split('');
        prevValue.pop();
        let updatedValue = prevValue.join('');
        this.setState({inputValue: updatedValue});
    }

    clearInputValueHandler = () => {
        this.setState({inputValue: "", collection: [], operator: null});
    }

    OperatorHandler = (operator) => {
        if(!this.state.operator){
            let firstNumber = parseFloat(this.state.inputValue, 10);
            let newCollection = [...this.state.collection, firstNumber];
            this.setState({operator: operator, collection: newCollection, inputValue: ""});
        }else{
            let secondNumber = parseFloat(this.state.inputValue, 10);
            let result = this.calculation(this.state.collection[0], this.state.operator, secondNumber);
            let newCollection = [parseFloat(result,10)];
            this.setState({operator: operator, collection: newCollection, inputValue: ""})
        }
    }

    calculateHandler = () => {
        let secondNumber = parseFloat(this.state.inputValue, 10);
        let result = this.calculation(this.state.collection[0], this.state.operator, secondNumber);
        this.setState({inputValue : result, collection: [], operator : null});
    }

    calculation = (firstNumber, operator, secondNumber) => {
        let resultant = null;
        switch(operator){
            case '+':
                resultant = firstNumber + secondNumber;
                break;
            case '-':
                resultant = firstNumber - secondNumber;
                break;
            case '*':
                resultant = firstNumber * secondNumber;
                break;
            case '/':
                resultant = firstNumber / secondNumber;
                break;
            case '%':
                resultant = firstNumber % secondNumber;
                break;
            default:
                resultant = "Error";
                break;          
        }
        return resultant.toFixed(2);
    }

    render(){
        return(
            <Auxiliary classes = {classes.Calculator}>
                <Screen 
                    displayValue = {this.state.inputValue}
                    numbers      = {this.state.collection}
                    operator     = {this.state.operator}
                />
                <div className = {classes.Keypad}>
                    <Controls  
                        inputValue  = {this.changeInputValueHandler} 
                        modifyValue = {this.modifyInputValueHandler}
                        clearValue  = {this.clearInputValueHandler}
                        calculate   = {this.calculateHandler}
                    />
                    <Operators 
                        inputOperator = {this.OperatorHandler}
                    />
                </div>
                <button onClick = {this.resultHandler}>Click Me!</button>
            </Auxiliary>
        )
    }
}

export default Calculator;