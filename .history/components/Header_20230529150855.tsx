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
       <div className='  flex items-center text-white flex-col md:flex-row px-12 py-5 text-center pt-5'>
        <h1 className=' text-[35px] font-[400px]'>Crypto Currency Wallet</h1>
        <ul className='flex text-[20px] flex-1 w-full justify-end items-center cursor-pointer text-xs  space-x-[64px]'>
          <li className=' flex space-x-1'>
            <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li className=' flex space-x-1'>
          <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li className=' flex space-x-1'>
          <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li className=' flex space-x-1'>
          <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li className=' flex space-x-1'>
          <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li className=' flex space-x-1'>
          <span>Security</span>
            <Image 
            src="/assets/sell.svg"
            alt=''
            width={10}
            height={10}
            />
          </li>
          <li className=' flex space-x-1'>
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
       <hr 
       className=' border-1 border-gray-500 bg-rgba(255, 255, 255, 0.15); '
       />  

<div className=" p-10 flex   mt-2 items-center">
        <div className="w-[40%]">
          <h1 className=" text-[50px] text-white leading-[66px]">Crypto Wallet Under
Your Brand</h1>
          <p className=" mb-10 text-[16px] text-white leading-[24px] mt-[3rem]">Start earning today with a non-custodial cryptocurrency wallet for iOS,
Android, and the web</p>
          <div className=" flex space-x-2">
            <button className=" bg-[#048FF9] p-2 text-white rounded-md flex items-center space-x-2 ">
              
              <Image 
                src="/assets/appleicon.svg"
                alt=""
                width={10}
                height={10}
                />
                
              
              <span>Get on iphone</span></button>
            <button className=" bg-white p-2 rounded-md flex items-center space-x-2 ">
            <Image 
                src="/assets/androidicon.svg"
                alt=""
                width={10}
                height={10}
                />
              <span>Get on android</span></button>
          </div>
        </div> 

         <Image 
         src="/assets/headerimage.png"
         alt=""
         width={200}
         height={300}
         className=" w-[30%] p-10  "
         />
      </div>
    </header>
  )
}

export default Header
