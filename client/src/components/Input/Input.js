import React from 'react';

import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => {
    return(
        <form className="inputForm">
            <input type="text"
                   className="input"
                   placeholder="Put your nonsense here..."
                   value={ message }
                   onChange={ event => setMessage(event.target.value) }
                   onKeyPress={ event => event.key === 'Enter' ? sendMessage(event) : null }
            />
            <button className="sendBtn" onClick={ event => sendMessage(event)}>Send</button>
        </form>
    );

};

export default Input;