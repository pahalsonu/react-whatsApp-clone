
import React, { useState, useEffect } from 'react'
import { Avatar } from "@material-ui/core"
import './SidebarChat.css'
import db from "./firebase"
function SidebarChat({ id,name, addNewChat }) {
    // eslint-disable-next-line no-undef
    const [seed, setSeed] = useState("")

    // eslint-disable-next-line no-undef
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
    const createChat = () => {
        const roomName = prompt(" Please Enter name for chat");
        if (roomName) {
            // do some clever stuff
            db.collection('rooms').add({
                name: roomName, 
            })
        }
    }
    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="div.SidebarChat_info">
                <h2>{name}</h2>
                <p>Message...</p>
            </div>

        </div>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2> Add New Chat </h2> </div>

        )
}

export default SidebarChat
