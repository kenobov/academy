import React from 'react';
import {Table} from "reactstrap";
import events from "../events";

import withApiService from "../hoc/withApiService";
import Loader from "../Loader/Loader";
import NoData from "../NoData/NoData";
import MobileTableItemComponent from "../MobileTableItemComponent/MobileTableItemComponent";

class MobileTableComponent extends React.PureComponent {

    state = {
        data_secure: [],
        data: [],
        loading: true
    }

    componentDidMount() {
        this.getData();

        events.addListener('filterClients', this.onFilter);
        events.addListener('addClient', this.onAdd);
        events.addListener('editClient', this.onEdit);
        events.addListener('removeClient', this.onRemove);
    }

    componentWillUnmount() {
        events.removeListener('filterClients', this.onFilter);
        events.removeListener('addClient', this.onAdd);
        events.removeListener('editClient', this.onEdit);
        events.removeListener('removeClient', this.onRemove);
    }

    onFilter = filter => {
        this.setState(prevState => {
            if(filter !== 'all') {
                const editedData = prevState.data_secure.filter(item => {
                    return item.status === filter
                })
                return {
                    data: editedData
                }
            }else{
                return {
                    data: [...prevState.data_secure]
                }
            }
        })
    }

    onAdd = client => {
        this.setState(prevState => {
            const editedData = [
                ...prevState.data,
                {
                    ...client,
                    id: Math.max( ...prevState.data.map( item => item.id )) + 1
                }
            ]
            return {
                data: editedData,
                data_secure: editedData
            }
        })
    }

    onEdit = client => {
        this.setState(prevState => {
            const editedData = prevState.data.map(item => {
                if(item.id === client.id) return client;
                return item;
            });
            return {
                data: editedData,
                data_secure: editedData
            }
        })
    }

    onRemove = id => {
        const editedData = this.state.data.filter(item => item.id !== id);
        this.setState({
            data: editedData,
            data_secure: editedData
        })
    }

    getData = () => {
        if(typeof this.props.getData === 'function'){
            this.props.getData({
                onSuccess: data => {
                    this.setState({
                        data,
                        data_secure: data
                    })
                },
                onFinish: () => {
                    setTimeout(() => {
                        this.setState({
                            loading: false
                        })
                    }, 500)
                }
            })
        }
    }

    renderTable = () => {
        const {data} = this.state;
        return data.length > 0
            ? data.map(item => <MobileTableItemComponent key={item.id} item={item} />)
            : <tr><td colSpan={7}><NoData /></td></tr>
    }

    render() {

        const {loading} = this.state;

        if(loading) return <Loader />

        console.log('render table');

        return (
            <Table>
                <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th className="text-center">Баланс</th>
                    <th className="text-center">Статус</th>
                    <th width="150px" className="text-center">&nbsp;</th>
                    <th width="150px" className="text-center">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.renderTable()
                }
                </tbody>
            </Table>
        )
    }

}

const mapMethodsToProps = apiService => {
    return {
        getData: apiService.getMobileData
    }
}

export default withApiService(mapMethodsToProps)(MobileTableComponent);