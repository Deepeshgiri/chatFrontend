import React, { useEffect, useState } from "react";
import { Common } from "../config/Config";
import { toast } from "react-hot-toast";

function useGetConversation() {
  const BASE_URL = Common.BASE_URL;
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/api/users/`, {
          method: "POST",

          headers: { "Content-Type": "Application/json" },
          withCredentials: true,
          credentials: "include",
        });
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);
  return { loading, conversation };
}

export default useGetConversation;
