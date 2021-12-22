import React from 'react';

const Br2jsComponent = props => {

    return (
        <div style={{display: "inline-block", margin: "20px", padding: "50px", border: '2px solid #000'}}>
            {
                props.str.split(/<br\s?\/?>/gi).map(line => <>{line}<br/></>)
            }
        </div>
    )

}

export default Br2jsComponent;