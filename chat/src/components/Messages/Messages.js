/**
Component to handle when messages get updated
**/

import React from 'react';
import './Messages.css';

const Messages = ({messages}) => {
  // run a .map iterator to cycle through the messages property in the App state
  // It updates as soon as the state is updated
  return (
    <ul id="messages">
      {
        messages.map(function(value, idx){
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