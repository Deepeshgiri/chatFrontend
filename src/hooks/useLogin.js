import React, { useState } from "react";
import { Common } from "../config/Config";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const BASE_URL = Common.BASE_URL;
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async ( userName, password ) => {
    setLoading(true);
    
    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        withCredentials: true, credentials: 'include' ,
        body: JSON.stringify({ userName, password }),
      });
      console.log(res)
      const data =await  res.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
