
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState} from "react";

const ModalComponents = ()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Click to see some message
            </Button> 
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading 1</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal! 2</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close 1
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes 1
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalComponents;