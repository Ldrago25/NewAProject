import React from 'react';
import Delete from '../../../images/icons/trash-logo.svg';
import './Chat-Title.css';

function ChatTitle() {
    return (
        <div id="chat-title">
            <span>Daryl Duckmanton</span>
            <img src={(Delete)} alt="Delete Conversation" />
        </div>
    );
}

export default ChatTitle;