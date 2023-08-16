import logo from './logo.svg';
import './App.css';
import { Textutility } from './componant/Textutility';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Accordian } from './componant/Accordian';
import Alert from 'react-bootstrap/Alert'
import Swipslider from './componant/Swipslider';

function App() {
const [mode, setmode] = useState('light');
const [alrtText, setalrtText] = useState();

const toggalmode = () => {
  if(mode === 'light'){
    setmode('dark');
    document.body.style.background = '#888';
    showAlert('Enable dark mode', 'Success');
    // setInterval(() => {
    //   document.title = '1 Dark Mode';      
    // }, 2000);
    // setInterval(() => {
    //   document.title = '2 Dark Mode';      
    // }, 1500);
  }else{
    setmode('light');
    document.body.style.background = '#F9F9F9';
    showAlert('Enable Light mode', 'Success');
    
    setInterval(() => {
      document.title = '1 Light Mode';      
    }, 2000);
    setInterval(() => {
      document.title = '2 Light Mode';      
    }, 1500);

  }
}


const showAlert = (msg,type) => {
  setalrtText({
    msg: msg,
    type:type,
  })
  setTimeout(() => {
    setalrtText(null); 
  }, 2000);
}
  return (
    <>
    <Navbar bg={mode} data-bs-theme={mode}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form.Check onChange={toggalmode} className={mode==='light'?'text-dark': 'text-light'}
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
        </Container>
      </Navbar>

      {/* <Accordian/> */}
      
      {alrtText && <Container> 
        <Alert variant='success' className='mt-3'>
          <strong>{alrtText.type}</strong> : {alrtText.msg}
        </Alert>
        </Container>}

    <Textutility showAlert={showAlert} themecolor={mode==='light'?'text-dark': 'text-light'}/>

    {/* <Swipslider/> */}
    </>
  );
}

export default App;
