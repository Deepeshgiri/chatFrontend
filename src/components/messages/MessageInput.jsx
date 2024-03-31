import React from "react";
import { BiSend } from "react-icons/bi";

function MessageInput() {
  return (
    <form className="px-4 flex my-3">
      <div className="w-full">
        <input
          type="text"
          placeholder="enter text"
          className="w-full  border-gray-600 border   rounded-lg block text-white p-1"
        />
      </div>
      <div className=" inset-y-0 flex items-center ms-1 border-2  border-gray-600 end-0 pe-3 rounded-full hover:bg-blue-500">
        <button type="submit" className="flex items-center ms-3">
          <BiSend />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
