import React from 'react';
import './Register.css';

function handleUsernameSubmission(){
  let wrap = document.getElementById('register-wrap');
  wrap.classList.add('d-none');
}

const Register = (props) => {
  return (
    <div id="register-wrap">
      <div id="register">
          <label>Enter a username</label>
          <input id="username" name="username" placeholder="Username" onChange={props.setuser} value={props.user} />
          <button id="register-btn" onClick={handleUsernameSubmission}>Enter</button>
      </div>
    </div>
  );
};

export default Register;