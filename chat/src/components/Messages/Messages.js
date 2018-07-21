import React from 'react';
import './Messages.css';

const Messages = (props) => {
  // console.log(props.messages);
  return (
    <ul id="messages">
      {
        props.messages.map(function(value, idx){
          return (
            <li key={value.key}>
              <span className="name">{value.user}</span>
              <span> : </span>
              <span className="msg">{value.message}</span>
            </li>
            )
        })
      }
    </ul>
  );
};

export default Messages;