import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useGetSelected from "../../hooks/useGetSelected";
import { extractTime } from "../../Utils/DateFormatter";

function Message({message}) {
  const {authUser } = useAuthContext()
  const {selectedConversation} = useGetSelected()
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe? "chat-end" :"chat-start"
  const profilePict = fromMe? authUser.profilePic : selectedConversation.profilePic
  const bubbleColor = fromMe?"bg-blue-500" :""
  const formattedDate = extractTime(message.createdAt)
  
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
      <div className="chat-footer text-xs flex gap-1 items-center">{formattedDate}</div>
    </div>
  );
}

export default Message;
