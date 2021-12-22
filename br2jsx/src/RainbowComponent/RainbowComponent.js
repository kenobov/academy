import React from 'react';

const RainbowComponent = props => {

    const {colors, children} = props;

    const renderFrame = (colors, content = null) => {
        const color = colors.shift();
        return <div style={{display: "inline-block", border: `2px solid ${color}`, padding: "5px"}}>
            {color ? renderFrame(colors, content) : content}
        </div>
    }

    return (
        <div style={{margin: "20px"}}>
            {renderFrame(colors, children)}
        </div>
    )

}

export default RainbowComponent;