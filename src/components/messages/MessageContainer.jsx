import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import StartMessage from "./StartMessage";
import useGetSelected from "../../hooks/useGetSelected";

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useGetSelected();
  useEffect(() => {
    //cleanup function (unmount)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <StartMessage />
      ) : (
        <>
          <div className="bg-slate-600 px-4 ">
            <span className="label-text">To : </span>
            <span className="text-gray-900 font-bold ">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;
