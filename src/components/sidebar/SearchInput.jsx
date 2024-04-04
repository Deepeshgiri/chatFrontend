import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useGetSelected from "../../hooks/useGetSelected";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState();
  const { setSelectedConversation } = useGetSelected();
  const { conversation } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversationSearch = conversation.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversationSearch) {
      setSelectedConversation(conversationSearch);
      setSearch("");
    } else toast.error("no user Found");
  };
  return (
    <div>
      <form
        
        className="flex items-center gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search"
          className="input  input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit" className="btn btn-circle bg-blue-400">
          <IoSearch className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
