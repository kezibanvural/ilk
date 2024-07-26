import { getChatHistoryById } from '@/services/chat-history-service';
import React from 'react'

const ChatPageById = async ({params}) => {
    const chatHistoryByIdRes = await getChatHistoryById(params.id);
    const chatHistoryByIdData = await chatHistoryByIdRes.json();
    console.log("/*/*/*/",chatHistoryByIdData);

  return (
    <div>ChatPageById</div>
  )
}

export default ChatPageById