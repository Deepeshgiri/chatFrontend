import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";

function Messages() {
  const { messages, loading } = useGetMessage();
  const lastMessage = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView();
    }, 1000);
  }, [lastMessage]);
  return (
    <div className="px-3 flex-1 overflow-auto" >
      {loading && <span className="loading loading-spinner"></span>}
      {!loading && messages.length === 0 && (
        <p className="text-center text-xl ">
          Send message to start conversation
        </p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
}

export default Messages;
