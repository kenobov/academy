import React from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";

const inModal = (settings = {opened: false}) => (ModalOpener) => (Content) => {
    return (props) => {

        const [isOpened, setOpened] = React.useState(settings.opened);

        const toggleModal = () => setOpened(!isOpened);

        return (
            <>
                <a onClick={toggleModal}>
                    <ModalOpener/>
                </a>
                <Modal isOpen={isOpened} toggle={toggleModal} backdrop={true}>
                    <ModalHeader toggle={toggleModal}>
                        {
                            settings.title ? settings.title : 'Модальное окно'
                        }
                    </ModalHeader>
                    <ModalBody>
                        <Content toggleModal={toggleModal} isOpened={isOpened} {...props}/>
                    </ModalBody>
                </Modal>
            </>
        )
    }
};

export default inModal;