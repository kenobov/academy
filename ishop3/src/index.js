import React from 'react';
import ReactDom from 'react-dom';
import ShopComponent from "./ShopComponent/ShopComponent";
import './styles.scss';

ReactDom.render((
    <ShopComponent />
) ,document.querySelector('#shop'));