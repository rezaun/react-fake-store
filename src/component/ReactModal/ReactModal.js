import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = ({product}) => {
    const {title,description,image,price} = product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className='text-center'><img className='w-25' src={image} alt="" /></p>
           {description}
           <p>Price:  <b className='text-info'>$ {price}</b></p>
           </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default ReactModal;