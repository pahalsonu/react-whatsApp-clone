import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile,  MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import "./Chat.css"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));

    },
        [])
        const sendMessage = (e) => {
e.preventDefault();
console.log('you have done this')
        }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at.....</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>

            <div className="chat_body">

                <p className={`chat_message ${true
                    && `chat_reciever`}`}>  <span className="chat_name">Sonu Pahal</span> Hey guys
                <span className="chat_timestamp">3.52 PM</span></p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form >
                    <input type="text" placeholder = "Type a message" />
                    <button value ={input} onChange = {(e) => 
                        setInput(e.target.value)
                    }  onClick = {sendMessage} type = "submit"></button>
                </form>
                <MicIcon />

            </div>
        </div>
    )
}

export default Chat
