import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'

function ConversationPanel() {
  const {loading, conversation} = useGetConversation()
 

  
  return (
    <div className=' flex flex-col overflow-auto'>

{conversation?.map((chat)=>(<Conversation props={chat} key={chat._id} />))}

        { loading? <span className='loading loading-spinner'></span>: null}
       


    </div>
  )
}

export default ConversationPanel