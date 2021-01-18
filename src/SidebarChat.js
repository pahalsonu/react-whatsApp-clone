
import React, { useState, useEffect } from 'react'
import { Avatar } from "@material-ui/core"
import './SidebarChat.css'

function SidebarChat({ addNewChat }) {
    // eslint-disable-next-line no-undef
    const [seed, setSeed] = useState("")
    const [name, setName] = useState("")


    // eslint-disable-next-line no-undef
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
        
    }, []);
    const createChat = () => {
        const roomName = prompt(" Please Enter name for chat");
        if (roomName) {
            setName(roomName)
        }
    }
    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="SidebarChat_info">
                <h2>{name}</h2>
                <p>Recent Message...</p>
            </div>

        </div>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2> Add New Chat </h2> </div>

        )
}

export default SidebarChat
