import React from 'react'
import io from 'socket.io-client';

function SocketPage() {
    const socket = io('http://localhost:8080');
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
      });
  return (
    <div>socketPage</div>
  )
}

export default SocketPage