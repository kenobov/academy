import React from 'react';
import events from "../events";
import {Button, Badge} from "reactstrap";
import inModal from "../hoc/inModal";
import MobileFormComponent from "../MobileFormComponent/MobileFormComponent";

class MobileTableItemComponent extends React.PureComponent {

    onRemove = () => {
        if(confirm('Вы действительно хотите удалить этого клиента?')) events.emit('removeClient', this.props.item.id)
    }

    render() {
        const {item} = this.props;
        const {surname, name, secondname, balance, status} = item;

        const ModalButton = () => {
            return <Button color={"primary"} size={"sm"}>
                Редактировать
            </Button>
        }
        const ModalOpener = inModal({title:'Добавление клиента'})(ModalButton)(MobileFormComponent);

        console.log('render client', item.id)

        return (
            <tr>
                <td>
                    { surname }
                </td>
                <td>
                    { name }
                </td>
                <td>
                    { secondname }
                </td>
                <td className="text-center">
                    { balance }
                </td>
                <td className="text-center">
                    <Badge color={status === 'active' ? 'success' : 'danger'}>
                        { status }
                    </Badge>
                </td>
                <td width="150px">
                    <ModalOpener initClient={item}/>
                </td>
                <td width="150px">
                    <Button color={"danger"} block onClick={this.onRemove} size={"sm"}>
                        Удалить
                    </Button>
                </td>
            </tr>
        )
    }

}

export default MobileTableItemComponent;