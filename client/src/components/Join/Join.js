import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

const Join = () =>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        <div className="joinContainer">
            <h1 className="header">Join the craziness</h1>
            <div className="inputs">
                <input type="text" className="joinInput" placeholder="Your name" onChange={event => setName(event.target.value)}/>
                <input type="text" className="joinInput" placeholder="Choose your room" onChange={event => setRoom(event.target.value)}/>
            </div>
            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button className="joinButton" type="submit">
                    Join
                </button>
            </Link>
        </div>
    );

};

export default Join;