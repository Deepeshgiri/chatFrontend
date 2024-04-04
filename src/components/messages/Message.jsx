import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useGetSelected from "../../hooks/useGetSelected";

function Message({message}) {
  const {authUser } = useAuthContext()
  const {selectedConversation} = useGetSelected()
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe? "chat-end" :"chat-start"
  const profilePict = fromMe? authUser.profilePic : message.profilePic
  const bubbleColor = fromMe?"bg-blue-500" :""
  console.log("auth",authUser)
  console.log("message",message)
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profilePict}
            alt="avatar"
          />
          
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor}`}> {message.message}</div>
      <div className="chat-footer text-xs flex gap-1 items-center">12:23pm</div>
    </div>
  );
}

export default Message;
