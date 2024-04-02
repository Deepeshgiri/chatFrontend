import React, { useState } from 'react'
import { Common } from '../config/Config'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'


const BASE_URL = Common.BASE_URL
function useLogOut() {
  
    const [loading, setLoading] = useState(false)
    const{setAuthUser} = useAuthContext()

    const logOut = async ()=>{
        setLoading(true)
        try {
            const res = await fetch (`${BASE_URL}/api/auth/logout`,{
                method:"POST",
                headers:{
                    "Content-Type":"Application/json"
                }  
            })

            const data = await res.json();
            if (data.error){
                throw new Error (data.error)
            }
            
            localStorage.removeItem("chat-user")
            setAuthUser(null)

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading,logOut}
}

export default useLogOut