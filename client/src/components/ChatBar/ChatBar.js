import React from 'react';

import './ChatBar.css';

const ChatBar = ({ room }) => {
    return(
        <div className="chatBar">
            <div className="leftBar">
                <span className="onlineSign"></span>
                <h3>{ room }</h3>
            </div>
            <div className="rightBar">
                <a href="/" className="close">&times;</a>
            </div>
        </div>
    );

};

export default ChatBar;