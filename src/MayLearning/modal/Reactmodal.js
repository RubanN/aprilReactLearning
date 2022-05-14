import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reactmodal = () => {
    const [modal, setModal] = useState(false)
    const togglePopUp = () => setModal(!modal)
    return (
        <div>
            <Button color="danger" onClick={togglePopUp}>Open Popup</Button>
            <Modal isOpen={modal} onClick={togglePopUp}>
                <ModalHeader toggle={togglePopUp}>Design your Popup </ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={togglePopUp}>Done</Button>
                    <Button color="secondary" onClick={togglePopUp}>Cancel</Button>

                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Reactmodal