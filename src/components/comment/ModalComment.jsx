import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonSend from './ButtonSend';
import Spinner from 'react-bootstrap/Spinner';
import FormControl from 'react-bootstrap/FormControl';

const inputMaxLength = 90;

function ModalComment({show}) {

  return (
    <Modal
      size="lg"
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a comment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control 
          type="text" 
          placeholder="..." 
          maxLength={inputMaxLength}
          autoFocus />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">
          <svg xmlns="http://www.w3.org/2000/svg" style={{position: 'relative', top: '-3px'}} width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
          </svg>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComment;