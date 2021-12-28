import React from 'react';

const withFrames = colors => Comp => {

    return (props) => {
        const color = colors.shift();

        const Html = withFrames(colors)(Comp);

        return color
            ? <div style={{display: "inline-block", border: `2px solid ${color}`, padding: "5px"}}>
                <Html {...props}/>
            </div>
            : <Comp {...props}/>
    }

}

export { withFrames };