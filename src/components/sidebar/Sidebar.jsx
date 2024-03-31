import React from "react";
import SearchInput from "./SearchInput";
import ConversationPanel from "./ConversationPanel";

import LogoutBtn from "./LogoutBtn";

function Sidebar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col overflow-auto">
      
        <SearchInput />
        <div className="divider px-1"></div>
        <ConversationPanel />
        <LogoutBtn />
      
    </div>
  );
}

export default Sidebar;
