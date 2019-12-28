import React, { useState, useEffect } from 'react';
import queryStr from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

import ChatBar from '../ChatBar/ChatBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = ({ location }) =>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { name, room } = queryStr.parse(location.search);

        socket = io('http://localhost:8000');

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
            }
        });
    }, ['http://localhost:8000', location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    return(
        <div className="chatContainer">
            <div className="container">
                <ChatBar room={ room }/>
                <Messages messages={ messages } name={ name }/>
                <Input  message={ message } setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    );

};

export default Chat;