/**
Component to handle getting the username
**/

import React from 'react';
import './Register.css';

function handleUsernameSubmission(){
  let wrap = document.getElementById('register-wrap');
  wrap.classList.add('d-none');
}

const Register = (props) => {
  return (
    <div id="register-wrap">
      <form onSubmit={props.setuser}>
        <div id="register">
          <label>Enter a username</label>
          <input id="username" placeholder="Username" ref={props.inputref} defaultValue="Anon" />
          <button id="register-btn" type="submit" onClick={handleUsernameSubmission}>Enter</button>
        </div>
      </form>
    </div>
  );
};

export default Register;