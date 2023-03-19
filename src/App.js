import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [input, setInput] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const newWs = new WebSocket('ws://localhost:8080');
    newWs.onmessage = (event) => {
      setMessage(event.data);
    };
    setWs(newWs);
    return () => {
      newWs.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws) {
      ws.send(input);
    }else{
      window.alert("Something wrong with socket.")
    }

  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h1>Hello, {message}</h1>
      <input type="text" onChange={handleInputChange} value={input} />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
