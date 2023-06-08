import React from 'react'
import NavBar from './NavBar'
import Image from 'next/image'

function Header() {
  return (
    <header className=' bg-[#230251]'>
        <NavBar />
        <hr 
       className=' border-1 border-gray-500 bg-rgba(255, 255, 255, 0.15); '
       />  
       <div>
        <h1>Crypto Currency Wallet</h1>
        <ul>
          <li>
            <span>Security</span>
            <Image 
            src="/assets/"
            alt=''
            />
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
       </div>
    </header>
  )
}

export default Header
