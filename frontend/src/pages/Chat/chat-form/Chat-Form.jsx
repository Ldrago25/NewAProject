import React from 'react';
import Logo from '../../../images/icons/attachment-logo.svg';
import './Chat-Form.css';

function ChatForm() {
    return (
        <div id="chat-form">
            <img src={(Logo)} alt="Add Attachment" />
            <input type="text" placeholder="type a message" />
        </div>
    );
}

export default ChatForm;