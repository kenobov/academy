import React from 'react';
import ReactDom from 'react-dom';

import MobileComponent from "./MobileComponent/MobileComponent";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

ReactDom.render((
    <MobileComponent />
) ,document.querySelector('#mobile'));