import React from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'

function Messages() {
  const {messages , loading} = useGetMessage()
  console.log(messages)
  return (
    <div className='px-3 flex-1 overflow-auto'>
       {loading && <span className='loading loading-spinner'></span>}
       {!loading && messages.length ===0 && <p className='text-center text-xl '>Send message to start conversation</p>}
{!loading && messages.length >0 && messages.map((message)=> <Message key={message._id} message ={message}/>)}
    </div>
  )
}

export default Messages