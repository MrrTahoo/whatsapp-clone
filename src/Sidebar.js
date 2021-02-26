import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChatIcon from "@material-ui/icons/Chat"
import SidebarChat from "./SidebarChat"
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';


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
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input type="text" placeholder="Search or start new chat" />
            </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>;

}

export default sidebar