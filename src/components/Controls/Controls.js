import React from 'react';
import classes from './Controls.css';

import Auxiliary from '../../hoc/Auxiliary';
import Control from './Control/Control';

const controls = props => {
    return(
        <Auxiliary classes = {classes.Controls}>
            <Control controlValue = "AC"/>
            <Control controlValue = "+/-"/>
            <Control controlValue = "%"/>
            <Control controlValue = "7"/>
            <Control controlValue = "8"/>
            <Control controlValue = "9"/>
            <Control controlValue = "4"/>
            <Control controlValue = "5"/>
            <Control controlValue = "6"/>
            <Control controlValue = "1"/>
            <Control controlValue = "2"/>
            <Control controlValue = "3"/>
            <Control controlValue = "0"/>
            <Control controlValue = " "/>
            <Control controlValue = "."/>
        </Auxiliary>
    )
}

export default controls;