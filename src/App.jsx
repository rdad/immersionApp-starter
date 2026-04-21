import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import ButtonComment from './components/comment/ButtonComment';
import ModalComment from './components/comment/ModalComment';
import ButtonCamera from './components/camera/ButtonCamera';
import ModalCamera from './components/camera/ModalCamera';
import DataFeed from './components/DataFeed';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (  
    <>  
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" id="logo">Fondry & me</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Stack direction="horizontal" gap={3}>
              <ButtonCamera />
              <ButtonComment />
            </Stack>   
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <DataFeed />

      <ModalComment
        show={false}
      /> 
      <ModalCamera
        show={false}
      /> 
    </>
  )
}

export default App
