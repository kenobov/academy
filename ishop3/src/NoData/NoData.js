import React from 'react';
import PropTypes from 'prop-types';

export default class NoData extends React.Component {

    render() {
        return (
            <div className="NoData">
                {
                    this.props.text ? this.props.text : 'Нет данных'
                }
            </div>
        )
    }

}

NoData.propTypes = {
    text: PropTypes.string
}