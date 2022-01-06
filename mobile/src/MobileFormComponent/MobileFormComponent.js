import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import events from "../events";

export default class MobileFormComponent extends React.PureComponent {

    constructor(props) {
        super(props);

        this.surname = React.createRef();
        this.name = React.createRef();
        this.secondname = React.createRef();
        this.balance = React.createRef();
        this.status = React.createRef();
    }

    onSubmit = e => {
        e.preventDefault();

        const id = this.props.initClient ? this.props.initClient.id : 0;
        const action = id ? 'editClient' : 'addClient';

        events.emit(action, {
            id,
            surname: this.surname.current.value,
            name: this.name.current.value,
            secondname: this.secondname.current.value,
            balance: this.balance.current.value,
            status: this.status.current.checked ? 'active' : 'blocked'
        })

        if(this.props.isOpened) this.props.toggleModal();
    }

    render() {
        const {id, surname, name, secondname, balance, status} = this.props.initClient;

        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="surname" sm={12}>Фамилия</Label>
                    <Col sm={12}>
                        <input type="text" className={"form-control"} required
                               name="surname"
                               defaultValue={surname}
                               id="surname"
                               ref={this.surname}
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="name" sm={12}>Имя</Label>
                    <Col sm={12}>
                        <input type="text" className={"form-control"} required
                               name="name"
                               defaultValue={name}
                               id="name"
                               ref={this.name}
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="secondname" sm={12}>Отчество</Label>
                    <Col sm={12}>
                        <input type="text" className={"form-control"} required
                               name="secondname"
                               defaultValue={secondname}
                               id="secondname"
                               ref={this.secondname}
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="balance" sm={12}>Баланс</Label>
                    <Col sm={12}>
                        <input type="number" className={"form-control"} required
                               min={-1000} max={1000} step={1}
                               name="balance"
                               defaultValue={balance}
                               id="balance"
                               ref={this.balance}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row className="align-items-center">
                    <Label for="active" sm={3} className="pointer">Активирован</Label>
                    <Col sm={3}>
                        <input type="radio" className={"form-check-input"}
                               name="status"
                               id="active"
                               ref={this.status}
                               defaultChecked={status === 'active'}
                               value={'active'}
                        />
                    </Col>
                    <Label for="blocked" sm={3} className="pointer">Заблокирован</Label>
                    <Col sm={3}>
                        <input type="radio" className={"form-check-input"}
                               name="status"
                               id="blocked"
                               defaultChecked={status === 'blocked'}
                               value={'blocked'}
                        />
                    </Col>
                </FormGroup>

                <div className="d-flex justify-content-end">
                    <Button color={"success"} type="submit">
                        {id > 0 ? "Сохранить" : "Добавить"}
                    </Button>
                </div>
            </Form>
        )
    }

}
