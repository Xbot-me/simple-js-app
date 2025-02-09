import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const getMessage = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api');
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error fetching message', error);
        }
    };

    const sendMessage = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/echo', { message: userMessage });
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    return (
        <div className="App">
            <h1>DevOps Full Stack App</h1>
            <div>
                <button onClick={getMessage}>Get Message</button>
                <p>{message}</p>
            </div>
            <div>
                <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Type a message"
                />
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    );
}

export default App;

