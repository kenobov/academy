import React from 'react';

const Br2jsComponent = props => {

    let renderHTML = [], elements = props.str.split(/<br\s?\/?>/gi);
    elements.forEach((line, index) => {
        renderHTML.push(line);
        if(index !== elements.length-1) renderHTML.push(<br key={index}/>);
    });

    return (
        <div style={{display: "inline-block", margin: "20px", padding: "50px", border: '2px solid #000', textAlign: 'center'}}>
            { renderHTML }
        </div>
    )

}

export default Br2jsComponent;