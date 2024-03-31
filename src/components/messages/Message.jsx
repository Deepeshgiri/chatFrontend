import React from "react";

function Message() {
  return (
    <div className="chat  chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://th.bing.com/th?q=Avatar+Emoji&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
            alt="avatar"
          />
          
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-600 "> hello how are you?</div>
      <div className="chat-footer text-xs flex gap-1 items-center">12:23pm</div>
    </div>
  );
}

export default Message;
