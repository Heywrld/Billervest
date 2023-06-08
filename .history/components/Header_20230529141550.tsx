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
       <div className=' flex items-center flex-col md:flex-row px-12 py-5 text-center pt-5'>
        <h1>Crypto Currency Wallet</h1>
        <ul>
          <li>
            <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li>
          <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li>
          <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li>
          <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li>
          <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li>
          <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li>
          <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
        </ul>
       </div>
    </header>
  )
}

export default Header
