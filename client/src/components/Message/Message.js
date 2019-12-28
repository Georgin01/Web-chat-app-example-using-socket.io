import React from 'react';

import './Message.css';

const Message = ({ message: {user, text}, name }) => {
    let sentByCurUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        sentByCurUser = true;
    }

    return(
        sentByCurUser ?
            (
                <div className="msgContainer justifyEnd">
                    <p className="fromWho pr-10">{ trimmedName }</p>
                    <div className="msgBox blue">
                        <p className="msgText whiteText">{ text }</p>
                    </div>
                </div>
            )
            : (
                <div className="msgContainer justifyStart">
                    <p className="fromWho pr-10">{ user }</p>
                    <div className="msgBox grey">
                        <p className="msgText blackText">{ text }</p>
                    </div>
                </div>
            )
    );

};

export default Message;