/**
Component to handle chat form submission
**/

import React from 'react';
import './Form.css';

const Form = (props) => {
  // stores the value of the input in the message property of the App's state
  // also gets its value from the message property so its a controlled form component
  // onSubmit it prevents default action and performs the sendChat method of the App container
  return (
    <form onSubmit={props.send}>
      <input type="text" id="m" value={props.value} autcomplete="off" onChange={props.getmsg} />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;