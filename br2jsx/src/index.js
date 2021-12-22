import React from 'react';
import ReactDom from 'react-dom';
import MainComponent from "./MainComponent/MainComponent";
import './reset.css';
import './styles.scss';

ReactDom.render((
    <MainComponent />
) ,document.querySelector('#container'));