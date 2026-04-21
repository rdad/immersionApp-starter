import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Webcam from 'react-webcam';
import ButtonRecord from './ButtonRecord';
import { useRef, useState } from 'react';

const webcamDimension = 640;

function ModalCamera({show}) {

  const [imgSrc, setImgSrc] = useState(null);

  const webcamRef = useRef(null);
  const webcamConfig = {
    width: '100%',
    screenshotFormat: "image/jpeg",
    screenshotQuality: 0.9,
    imageSmoothing: true,
    videoConstraints: {
      width: { min: webcamDimension },
      height: { min: webcamDimension },
      aspectRatio: 1,
      facingMode: "environment"
    }
  };

  const onTakePicture = async ()=>{
    const image = webcamRef.current.getScreenshot();
    setImgSrc(image);

    await savePicture(image);

    // clear
    setShow(false);
    setImgSrc(null);
  }

  return (
    <>
      <Modal show={show} fullscreen={true} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Take a picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {imgSrc ? (
            <>
              <img src={imgSrc} alt="webcam" />
              <div id="recordButton">
                <Spinner animation="border" variant="primary" />
              </div>
            </>    
          ) : (
            <>
              <Webcam {...webcamConfig} ref={webcamRef} />
              <ButtonRecord onTakePicture={onTakePicture} />
            </>
          )}         
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCamera;