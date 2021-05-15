import React, { useContext, useRef, useEffect } from "react";
import '../Styles/ChatWin.css';
import { ChatContext } from '../Components/Chat';
import chat_dp from '../Asset/62.png'
import wait from '../Asset/Wait.png';
import edit from '../Asset/edit.png';

function Chat() {
    const { messages, deleteMessages, isLoading } = useContext(ChatContext);  //useContext hook 


    //some JSX to handle the elements 
    return (
        <div className="chats" >
            {messages.map(message => (
                <div className={message.isAdmin
                    ? "chats_room"
                    : "chats_room chats_room_user"
                }
                    key={message.id} >
                    {message.isAdmin
                        ? <div className="dp">
                            <img className="chat_dp" src={chat_dp} alt="chat_dp" />
                        </div>
                        : null
                    }
                    <div className="chat_text" >
                        {message.isAdmin ? null : <button className="edit_button"><img className="edit_image" src={edit} alt="edit" onClick={() => deleteMessages(message.id)} /></button>}
                        <p className={message.isAdmin ? "chat_message" : "chat_message chat_message_user"}>{message.message}</p>
                    </div>
                </div>
            ))}

            {
                isLoading
                    ? <div className="loading_animations">
                        <img className="loading" src={wait} alt="wait" />
                    </div>
                    : null
            }
        </div >
    )
}

export default Chat
