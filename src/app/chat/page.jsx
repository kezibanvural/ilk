import { auth } from '@/auth';
import ChatAIChatSection from '@/components/chat/chatSection';
import { refreshTokenService } from '@/services/auth-service';
import React from 'react'

export const metadata = {
    title: "AI Chat",
    description: "Learning Matrix AI Power in Education",
  };

const ChatPage = async () => {

  const session = await auth();

  return (
    <div className='container'>
      <ChatAIChatSection session={session} />
    </div>
  )
}

export default ChatPage