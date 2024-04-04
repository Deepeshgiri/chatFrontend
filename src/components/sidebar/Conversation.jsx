import React, { useState } from "react";
import backimg from "../../backimg.jpg";
import useGetSelected from "../../hooks/useGetSelected";
function Conversation({ props }) {
  const { selectedConversation, setSelectedConversation } = useGetSelected();
  const isActive = selectedConversation?._id === props._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:text-gray-800 rounded p-2  cursor-pointer ${
          isActive ? "bg-gray-400" : null
        }`}
        onClick={()=>setSelectedConversation(props)}
      >
        <div className="avatar online">
          <div className="rounded-full w-12">
            <img alt="avatar" src={props.profilePic} />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-600">{props.fullName}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
}

export default Conversation;
