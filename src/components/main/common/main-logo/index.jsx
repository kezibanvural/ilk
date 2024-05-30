import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./style.scss"

const MainLogo = () => {
  return (
<Link class="navbar-brand" href="/">
        <Image src="/logos/Size=Full.svg" width={71} height={46} alt="logo"/>
</Link>
  )
}

export default MainLogo