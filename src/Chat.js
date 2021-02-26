import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MicNone, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import "./Chat.css"

function Chat() {
    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen...</p>
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
                <p className="chat__message">
                    <span className="chat__name">
                        Taha</span>
                    This is a mesaage
                <span class="chat__timestamp">
                    {new Date().toUTCString()}</span>
                </p>

                <p className="chat__message chat__receiver">
                    <span className="chat__name">
                        Ahmed</span>
                    This is a mesaage
                <span class="chat__timestamp">
                    {new Date().toUTCString()}</span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">
                        Taha</span>
                    This is a mesaage
                <span class="chat__timestamp">
                    {new Date().toUTCString()}</span>
                </p>
            </div>

            <div class="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text" placeholder="Type a message"></input>
                    <button type="submit">Send a Message</button>
                </form>
                <MicNone />
            </div>
            </div>
    )
}

export default Chat