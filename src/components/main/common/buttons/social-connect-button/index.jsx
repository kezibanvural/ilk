import Image from 'next/image'
import React from 'react'
import "./style.scss"

const SocialConnectionButton = ({ title, status }) => {
  return (
    <button
        className='social-button'>
        <Image src={`/icons/social/${title}-icon.svg`} width={24} height={24} alt={`${title}-icon`}/>
        <span>Sign {status} with {title}</span>
    </button>
  )
}

export default SocialConnectionButton