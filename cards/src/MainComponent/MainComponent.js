import React from 'react';
import './MainComponent.scss';

import CardComponent from "../CardComponent/CardComponent";

export default class MainComponent extends React.Component {

    state = {
        row: 1,
        col: 1
    }

    cbChangeHanlder = e => {
        let value = e.target.value;
        value = +value > +e.target.max ? e.target.max : value < 1 ? 1 : value;
        this.setState({
            [e.target.name]: value
        })
    }

    cbCard = () => {
        this.setState({
            row: 1, col: 11
        })
    }

    render() {
        const {row, col} = this.state;

        return (
            <div className="MainComponent">
                <div className="window">
                    <h3>
                        Введите координаты карты
                    </h3>

                    <form className="row">
                        <div className="col-4">
                            <div className="form-control">
                                <input type="number" min={1} max={4} name="row"
                                       value={row} onChange={this.cbChangeHanlder}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-control">
                                <input type="number" min={1} max={14} name="col"
                                       value={col} onChange={this.cbChangeHanlder}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-control">
                                <button type="button" onClick={this.cbCard}>
                                    Пиковая дама
                                </button>
                            </div>
                        </div>
                    </form>

                    <CardComponent row={row} col={col} />

                </div>
            </div>
        )
    }

}
