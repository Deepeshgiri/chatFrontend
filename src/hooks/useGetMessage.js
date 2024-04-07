import  { useEffect, useState } from "react";
import useGetSelected from "../zustand/useGetSelected";
import { Common } from "../config/Config";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useGetMessage = () => {
  const BASE_URL = Common.BASE_URL;
  const [loading, setLoading] = useState(false);
  const {authUser} = useAuthContext()
  const { messages, setMessages, selectedConversation } = useGetSelected();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      const Token = authUser?.token
      try {
        const res = await fetch(
          `${BASE_URL}/api/message/get/${selectedConversation?._id}`,
          {
            method: "GET",
            headers: { "Content-Type": "Application/json" , authorization:Token},
            withCredentials: true,
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessage();
  }, [selectedConversation?._id, setMessages,BASE_URL]);

  return { messages, loading };
};

export default useGetMessage;
