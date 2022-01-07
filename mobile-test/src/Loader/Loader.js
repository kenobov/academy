import React from 'react';
import {Spinner} from "reactstrap";

import './Loader.scss';

const Loader = () => {

    return (
        <div className="Loader">
            <div className="LoaderContent">
                <Spinner className="mt-5 mb-5" color="primary">Loading...</Spinner>
                Подождите, идет загрузка
            </div>
        </div>
    )

}

export default Loader;