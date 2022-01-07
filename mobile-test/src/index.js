import React from 'react';
import ReactDom from 'react-dom';

import MobileComponent from "./MobileComponent/MobileComponent";
import {ApiServiceProvider} from "./context/ApiServiceContext";
import ApiService from "./services/ApiService";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

ReactDom.render((
    <ApiServiceProvider value={new ApiService}>
        <MobileComponent />
    </ApiServiceProvider>
) ,document.querySelector('#mobile'));