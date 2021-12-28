import React from 'react';

const DoubleButton = props => {

    const {caption1, caption2, cbPressed, children} = props;

    return (
        <div>
            <button onClick={() => cbPressed(1)}>{caption1}</button>
            {
                children
            }
            <button onClick={() => cbPressed(2)}>{caption2}</button>
        </div>
    )

}

export default DoubleButton;