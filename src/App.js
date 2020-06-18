import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import api from './utils';

let endPoint = 'http://localhost:5000';
let socket = io.connect(`${endPoint}`);

const App = () => {
  const player = useRef(null);
  const [messages, setMessages] = useState(['Hello and Welcome']),
        [message, setMessage] = useState(''),
        [file, setFile] = useState(''),
        [isPlaying, setIsPlaying] = useState([false]);

  useEffect(() => {
    getMessages();
  }, [messages.length]);

  useEffect(() => {
    playSong();
    console.log(isPlaying);

    player.current.play();
  }, [player]);

  const getMessages = () => {
    socket.on('message', msg => {
      console.log(msg);
      setMessages([...messages, msg]);
    });
  };

  const playSong = () => {
    socket.on('play-song', data => {
      console.log(data);
      setIsPlaying([...isPlaying, data]);
      // console.log(player.current.play());
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

  const handlePlay = () => {
    if (isPlaying[0] === false) {
      socket.emit('play-song', true);
      console.log(isPlaying);
    }
  }

  const handleFileChange = e => {
    console.log(e.target);
    setFile(e.target.value);
  };

  const handleSend = async e => {
    const body = new FormData();
    body.append('file', file[0])
    try {
      let res = await fetch(`${api.url}/beats`, {
        method: 'POST',
        body
      });

      if (!res.ok) {
        throw res;
      }

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <div>
        {messages.length > 0 &&
          messages.map((msg, i) => (
            <div key={i}>
              <p>{msg}</p>
            </div>
          ))
        }
        <input
          value={message}
          name='message'
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={handleClick}>Send Message</button>
      </div>
      <div>
        <input
          type='file'
          value={file}
          onChange={handleFileChange}
        />
        <button onClick={handleSend}>Send file to bucket</button>
      </div>
      <div>
        <audio ref={player}>
          <source src="song.mp3" type="audio/mp3"></source>
        </audio>
        <button onClick={handlePlay}>Play</button>
      </div>
    </React.Fragment>
  );
};

export default App;
