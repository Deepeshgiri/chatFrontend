import React from "react";
import backimg from "../../backimg.jpg";
function Conversation() {
  return (
    <>
    <div className="flex gap-2 items-center hover:bg-gray-400 hover:text-gray-800 rounded p-2  cursor-pointer">
      <div className="avatar online">
        <div className="rounded-full w-12">
          <img
            alt="avatar"
            src="https://th.bing.com/th/id/OIP.t0zihEAlRIOD6bijjl7ONgHaFq?w=181&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-600">Cap dist</p>
          <span className="text-xl">emoji</span>
        </div>
      </div>
      
    </div>
    <div className="divider my-0 py-0 h-1"></div>
    </>
  );
}

export default Conversation;
