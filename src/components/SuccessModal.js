// src/components/SuccessModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessModal = ({ show, onClose }) => {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      style={{ color: 'black' }} // Text color set to black
    >
      <Modal.Header closeButton style={{ backgroundColor: 'white' }}>
        <Modal.Title>Form Submitted</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'white' }}>
        <p>Your form has been submitted successfully!</p>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: 'white' }}>
        <Button variant="primary" onClick={onClose} style={{ backgroundColor: 'blue', borderColor: 'blue' }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
