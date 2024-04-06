import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'

import useGetSelected from '../zustand/useGetSelected'
import notifySound from '../assets/sound/notification.mp3'
const useListenMessages = () => {

    const { socket } = useSocketContext()
    const { messages, setMessages } = useGetSelected()

    useEffect(() => {
        
        socket?.on("newMessage", (newMessage) => {
        
                setMessages([...messages, newMessage])
                const sound = new Audio(notifySound)
                sound.play()
          
            
            
        });

        return () => {
            if (socket) {
                socket.off("newMessage");
            }
        };

    }, [messages, setMessages, socket])
}

export default useListenMessages