import  { useEffect, useState } from "react";
import { Common } from "../config/Config";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


function useGetConversation() {
  const BASE_URL = Common.BASE_URL;
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const {authUser} = useAuthContext()
  // console.log(authUser?._id)
  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
     
      const Token = authUser?.token

      try {
        const res = await fetch(`${BASE_URL}/api/users/`, {
          method: "POST",

          headers: { "Content-Type": "Application/json" , authorization:Token },
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
  },[BASE_URL]);
  return { loading, conversation };
}

export default useGetConversation;
