import React from 'react';
import './CardComponent.scss';

export default class CardComponent extends React.Component {

   render() {
       const {row,col} = this.props;

       return (
           <div className="card"
                style={{backgroundPosition: `right ${row*144}px bottom ${col*194}px`}}
           >&nbsp;</div>
       )
   }

}