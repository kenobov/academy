import React from 'react';
import MobileTableComponent from "../MobileTableComponent/MobileTableComponent";
import MobileFilterComponent from "../MobileFilterComponent/MobileFilterComponent";
import {Button} from "reactstrap";
import inModal from "../hoc/inModal";
import MobileFormComponent from "../MobileFormComponent/MobileFormComponent";

class MobileComponent extends React.PureComponent {

    render() {

        const ModalButton = () => {
            return <Button color={"success"} size={"sm"}>
                Добавить клиента
            </Button>
        }
        const ModalOpener = inModal({title:'Редактирование клиента'})(ModalButton)(MobileFormComponent);

        return (
            <React.Fragment>
                <div className={"card-body d-flex justify-content-between"}>
                    <MobileFilterComponent />
                    <ModalOpener initClient={initClient}/>
                </div>
                <MobileTableComponent />
            </React.Fragment>
        )
    }

}

export default MobileComponent;

const initClient = {
    id: 0,
    surname: '',
    name: '',
    secondname: '',
    balance: 0,
    status: 'blocked',
}