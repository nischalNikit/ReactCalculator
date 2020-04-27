import React from 'react';

const auxiliary = props => {
    return(
        <div className = {props.classes}>
            {props.children}
        </div>
    )
}

export default auxiliary;