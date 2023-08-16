import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

export const Textutility = (props) => {
  // const [alrtText, setalrtText] = useState('Enable dark mode', 'Success');
  // const showAlert = (msg,type) => {
  //   setalrtText({
  //     msg: msg,
  //     type:type,
  //   })
  // }

    const [showtext, setshowtext] = useState('Enter your text here........');
    const Uppercase = () => {
        setshowtext(showtext.toUpperCase());
        props.showAlert('Convert to Uppercase', 'Success');
        document.title = 'Uppercase';
    }
    const Lowercase = () => {
        setshowtext(showtext.toLowerCase());
        props.showAlert('Convert to Lowercase', 'Success');
        document.title = 'Lowercase';
    }
    const capitlize = () => {
        setshowtext(showtext.Capitlize());
        props.showAlert('Convert to capitlize', 'Success');
        document.title = 'capitlize';
    }
    const onchangehandl = (e) => {
        setshowtext(e.target.value);
    }
    const copytext = () => {  
        document.querySelector("textarea").select();
        document.execCommand('copy');  
        props.showAlert('copied Text', 'Success');
        document.title = 'copied Text';
    }
    const removespace = () => {
        setshowtext(showtext.replace(/\s+/g, ' ').trim());
        props.showAlert('removed space Text', 'Success');
        document.title = 'removed space Text';
    }
  return (
    <Container>
      {/* {alrtText ? <Container> 
        <Alert variant="primary" className='mt-3'>
          <strong>{alrtText.type}</strong> : {alrtText.msg}
        </Alert>
        </Container> : ""} */}

        <div class="my-5">
          <h4 className={props.themecolor}>Enter Text Here</h4>
          <textarea class="form-control" name="" id="" rows="10" value={showtext} onChange={onchangehandl} placeholder='Enter your text here........'></textarea>
          <div class="mt-4">
            <button type="button" name="" id="" class="btn btn-primary" onClick={Uppercase}>Convert to Uppercase</button>
            <button type="button" name="" id="" class="btn btn-primary mx-2" onClick={Lowercase}>Convert to Lowercase</button>
            <button type="button" name="" id="" class="btn btn-primary mx-2" onClick={capitlize}>Convert to capitlize</button>
            <button type="button" name="" id="" class="btn btn-primary mx-2" onClick={copytext}>Copy Text</button>
            <button type="button" name="" id="" class="btn btn-primary mx-2" onClick={removespace}>Remove Extra space</button>
          </div>
          <p className={'mt-3 ' + props.themecolor}>Total {showtext.length} Letters and {showtext.split(' ').length} Words count</p>
          <p className={props.themecolor}>Avarage time of reading this text is {(0.8/60)*showtext.length} sec.</p>
        </div>
    </Container>
  )
}
