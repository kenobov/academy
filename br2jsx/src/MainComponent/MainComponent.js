import React from 'react';

import Br2jsComponent from "../Br2jsComponent/Br2jsComponent";
import RainbowComponent from "../RainbowComponent/RainbowComponent";
import DoubleButton from "../DoubleButton/DoubleButton";
import {withFrames} from "../hoc/withFrames";

const MainComponent = () => {

    const str = 'Первая<br>вторая<br />третья<br/>четвертая';
    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

    let FramedDoubleButton = withFrames(colors)(DoubleButton);

    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
            {/*<Br2jsComponent str={str} />*/}

            {/*<RainbowComponent colors={colors}>*/}
            {/*    Hello!*/}
            {/*</RainbowComponent>*/}

            <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) }>
                в студёную зимнюю
            </DoubleButton>

            <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>
                вышел, был сильный
            </FramedDoubleButton>
        </div>
    )

}

export default MainComponent;