import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MicNone, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import "./Chat.css"
import axios from "./axios";


function Chat({ messages }) {
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        axios.post("/messages/new", {
            "message": input,
            "name": "Demo",
            "timestamp": new Date().toUTCString(),
            "received": false
        });
        setInput('');
    }


    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Test</h3>
                    <p>Online</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton >
                        <SearchOutlined />
                    </IconButton>
                    <IconButton >
                        <AttachFile />
                    </IconButton>
                    <IconButton >
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"}`}>
                        <span className="chat__name">
                            {message.name}</span>
                        {message.message}
                        <span class="chat__timestamp">
                            {message.timestamp}</span>
                    </p>
                ))}
            </div>

            <div class="chat__footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"></input>
                    <button onClick={sendMessage} type="submit">Send a Message</button>
                </form>
                <MicNone />
            </div>
        </div>
    )
}

export default Chat