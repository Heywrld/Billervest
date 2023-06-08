import React from 'react'
import NavBar from './NavBar'

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
          li*7
        </ul>
       </div>
    </header>
  )
}

export default Header
