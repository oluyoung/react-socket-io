import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <form onSubmit={props.send}>
      <input type="text" id="m" value={props.value} autcomplete="off" onChange={props.getmsg} />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;