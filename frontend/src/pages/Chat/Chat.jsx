import React from 'react'
import Header from '../../components/Header'
import ChatShell from './shell/Chat-Shell'
import './Chat.css';

const Chat = () => {
  return (
    <div>
        <Header/>
        <img src="" alt="" />
       <div id="chat">
        <ChatShell />
       </div>
    </div>
  )
}

export default Chat