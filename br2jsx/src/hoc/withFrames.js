import React from 'react';

const withFrames = colors => Comp => {

    return (props) => {
        const array = [...colors];

        const renderFrame = (colors) => {
            const color = colors.shift();
            return color
                ?<div style={{display: "inline-block", border: `2px solid ${color}`, padding: "5px"}}>
                    { renderFrame(colors) }
                </div>
                : <Comp {...props}/>
        }

        return renderFrame(array)
    }

}

export { withFrames };