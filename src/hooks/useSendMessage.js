import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
import useGetSelected from '../hooks/useGetSelected'
import {Common} from '../config/Config'
function useSendMessage() {
  const [loading, setLoading] = useState(false)
  const {messages , setMessages , selectedConversation} = useGetSelected()
  const BASE_URL = Common.BASE_URL
  const sendMessage = async (message)=>{

    setLoading(true)
    try {
        const res = await fetch(`${BASE_URL}/api/message/send/${selectedConversation?._id}`, {
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            withCredentials: true, credentials: 'include' ,
            body: JSON.stringify({message})
        })

        const data = await res.json()
        if(data.error){
            throw new Error (data.error)
        }
        setMessages([...messages, data])
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
      }
    
  }
  return {sendMessage , loading}
}

export default useSendMessage