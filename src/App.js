import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

let endPoint = 'http://localhost:5000';
let socket = io.connect(`${endPoint}`);

const App = () => {
  const [messages, setMessages] = useState(['Hello and Welcome']),
    [message, setMessage] = useState('');

  useEffect(() => {
    getMessages();
  }, [messages.length]);

  const getMessages = () => {
    socket.on('message', msg => {
      setMessages([...messages, msg]);
    });
  };

  const handleClick = () => {
    if (message !== '') {
      socket.emit('message', message);
      setMessage('');
    } else {
      alert('Please add a message');
    }
  };

  return (
    <div>
      {messages.length > 0 &&
        messages.map((msg) => (
          <div>
            <p>{msg}</p>
          </div>
        ))
      }
      <input
        value={message}
        name="message"
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={handleClick}>Send Message</button>
    </div>
  );
};

export default App;
