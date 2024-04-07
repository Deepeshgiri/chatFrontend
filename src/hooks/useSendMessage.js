import { useState } from "react";
import { toast } from "react-hot-toast";
import useGetSelected from "../zustand/useGetSelected";
import { Common } from "../config/Config";
import { useAuthContext } from "../context/AuthContext";
function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useGetSelected();
  const BASE_URL = Common.BASE_URL;
  const { authUser } = useAuthContext();

  const sendMessage = async (message) => {
    setLoading(true);
    const Token = authUser?.token;
    try {
      const res = await fetch(
        `${BASE_URL}/api/message/send/${selectedConversation?._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            authorization: Token,
          },
          withCredentials: true,
          credentials: "include",
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);
      console.log("11111", messages, "22222", data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
}

export default useSendMessage;
