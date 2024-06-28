import Image from 'next/image'
import React from 'react'
import ChatNavbarUserSection from './userSection'
import "./style.scss";

const ChatNavbar = () => {
  return (
    <div className='chat-navbar'>
        <div className='school-name'>
        <Image src="/logos/Size=Small.svg"  width={66} height={66} alt='logo'/>
        <h1>lk.ai</h1>
        </div>
        <ChatNavbarUserSection/>
    </div>
  )
}

export default ChatNavbar