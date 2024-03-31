import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

function MessageContainer() {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <div className="bg-slate-600 px-4 ">
        <span className="label-text">To : </span>
        <span className="text-gray-900 font-bold ">CapDist</span>
      </div>

      <Messages />
      <MessageInput/>
    </div>
  );
}

export default MessageContainer;
