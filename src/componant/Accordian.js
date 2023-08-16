import React from 'react'
// import { Counter } from './features/counter/Counter';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

export const Accordian = () => {
  const lightstyle = {
    background: '#fff',
    color: '#000',
     height: '100%'
   }
   const darkstyle = {
    background: '#000',
    color: '#fff',
     height: '100%'
   }

  const [showatheme, setShowTheme] = useState(lightstyle);
  const [showaTxt, setShowTxt] = useState("Dark");

  const Buttonfun = () => {
    if(showatheme === lightstyle){
      setShowTheme(darkstyle)
      setShowTxt('Light')
    }else{
      setShowTheme(lightstyle)
      setShowTxt('Dark')
    }
}
  return (
    <>
    
    <div className="App p-5" style={showatheme}>
      {/* <Counter/> */}
      <Container className='p-5'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" style={showatheme}>
        <Accordion.Header style={showatheme}><span>Accordion Item #1</span></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={showatheme}>
        <Accordion.Header style={showatheme}>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Container>
    </div>
    <div className="d-table gap-2 m-auto my-3">
      <button className="btn btn-primary" onClick={Buttonfun}> {showaTxt} Mode</button>
    </div>
    </>
  )
}
