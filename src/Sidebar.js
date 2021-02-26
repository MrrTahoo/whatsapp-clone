import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChatIcon from "@material-ui/icons/Chat"
import {Avatar,IconButton} from '@material-ui/core';


function sidebar() {
    return <div className="sidebar">
        <div className="sidebar__header">
            <Avatar src="https://i.pinimg.com/564x/a1/20/94/a12094c4d2027734d37610e3f5399363.jpg" />
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                
            </div>
        </div>
    </div>;

}

export default sidebar