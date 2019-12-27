import React, { useState, useEffect } from 'react';
import queryStr from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ loc }) =>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    useEffect(() => {
        const { name, room } = queryStr.parse(loc.search);

        socket = io('localhost:5000');

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, ['localhost:5000', loc.search]);

    return(
        <h1>Chat</h1>
    );

};

export default Chat;