import React from 'react';
import events from "../events";
import {Button, ButtonGroup} from "reactstrap";

export default class MobileFilterComponent extends React.PureComponent {

    state = {
        current: 'all'
    }

    onFilter = current => {
        this.setState({
            current
        }, () => events.emit('filterClients', current))
    }

    render() {
        const {current} = this.state;

        return (
            <ButtonGroup>
                <Button onClick={() => this.onFilter('all')}
                        color={current === 'all' ? "primary" : 'secondary'}>
                    Все
                </Button>
                <Button onClick={() => this.onFilter('active')}
                        color={current === 'active' ? "primary" : 'secondary'}>
                    Активные
                </Button>
                <Button onClick={() => this.onFilter('blocked')}
                        color={current === 'blocked' ? "primary" : 'secondary'}>
                    Заблокированные
                </Button>
            </ButtonGroup>
        )
    }

}