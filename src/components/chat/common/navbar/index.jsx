import Image from 'next/image'
import React from 'react'
import ChatNavbarUserSection from './userSection'
import "./style.scss";
import { auth } from '@/auth';

const ChatNavbar = async () => {

  const session = await auth();

  return (
    <div className='chat-navbar'>
        <div className='school-name'>
        <Image src="/logos/Size=Small.svg"  width={66} height={66} alt='logo'/>
        <h1>lk.ai</h1>
        </div>
        <ChatNavbarUserSection session={session} />
    </div>
  )
}

export default ChatNavbar