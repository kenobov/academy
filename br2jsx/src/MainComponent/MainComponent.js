import React from 'react';

import Br2jsComponent from "../Br2jsComponent/Br2jsComponent";
import RainbowComponent from "../RainbowComponent/RainbowComponent";

const MainComponent = () => {

    const str = 'Первая<br>вторая<br />третья<br/>четвертая';
    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
            <Br2jsComponent str={str} />

            <RainbowComponent colors={colors}>
                Hello!
            </RainbowComponent>
        </div>
    )

}

export default MainComponent;