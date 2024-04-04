import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {
  const [message, setMessage] = useState("");

  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 flex my-3" onSubmit={handleSubmit}>
      <div className="w-full">
        <input
          type="text"
          placeholder="enter text"
          className="w-full  border-gray-600 border   rounded-lg block text-white p-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className=" inset-y-0 flex items-center ms-1 border-2  border-gray-600 end-0 pe-3 rounded-full hover:bg-blue-500">
        <button type="submit" className="flex items-center ms-3">
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BiSend />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
