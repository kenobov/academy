import React from 'react';

const NoData = props => {
    return (
        <div className="NoData">
            {
                props.text ? props.text : 'Нет данных'
            }
        </div>
    )
}

export default NoData;
