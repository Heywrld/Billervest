'use cliwnt'

import { motion } from "framer-motion"

import React from 'react'
import NavBar from './NavBar'
import Image from 'next/image'

function Header() {
  return (
    <header className=' bg-[#230251]'>
        <NavBar />
        <div className=' w-[1380px] mx-auto overflow-hidden'>
       <hr 
       className=' w-full border-1 border-gray-500 bg-rgba(255, 255, 255, 0.15); '
       />  
       </div>
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
       <div className=' w-[1380px] mx-auto overflow-hidden'>
       <hr 
       className=' w-full border-1 border-gray-500 bg-rgba(255, 255, 255, 0.15); '
       />  
       </div>
      

<div className="  flex flex-col  mt-2 items-center md:flex-row px-12 py-5 text-center pt-5">
        <div className="w-[40%]">
          <h1 className=" flex text-[50px] text-white leading-[66px] mb-7">BillerVest Wallet</h1>
          <p className=' text-white mb-4 flex text-[26px]'>Your best option to access the world of crypto</p>
          
          <ul className=' space-y-2 mb-3  text-[#00FBFF] text-[20px]'>
            <li className=' flex space-x-1'>
            <Image 
            src="/assets/Ellipse.svg"
            alt=''
            width={10}
            height={10}
            />
            <span>Store all your Crypto and NFTs here on BillerVest.</span>
            </li>
            <li className=' flex space-x-1'>
            <Image 
            src="/assets/Ellipse.svg"
            alt=''
            width={10}
            height={10}
            />
            <span> Buy, exchange and stake crypto in a secured mobile</span>

            </li>
            <li className=' flex'>and desktop app</li>
            <li className=' flex space-x-1'>
            <Image 
            src="/assets/Ellipse.svg"
            alt=''
            width={10}
            height={10}
            />
            <span>40+ blockchains and thousands of tokens available.</span>
            </li>
            <li className=' flex space-x-1'>
            <Image 
            src="/assets/Ellipse.svg"
            alt=''
            width={10}
            height={10}
            />
            <span>Protect your digital assets with industry-leading security</span>
            </li>
            
          </ul>
        
          
          <div className=" flex space-x-2 mt-16">
            <button className="  bg-[#19013A] px-4 py-2 text-white rounded-sm flex items-center space-x-2 ">
              
              <Image 
                src="/assets/appleicon.svg"
                alt=""
                width={10}
                height={10}
                />
                
              
              <span className=" text-[14px]">Get on iphone</span></button>
            <button className="  bg-white px-4 py-2 rounded-sm flex items-center space-x-2 ">
            <Image 
                src="/assets/google-play-icon.svg"
                alt=""
                width={10}
                height={10}
                />
              <span className='tex-[14px]'>Get on android</span></button>
          </div>
        </div> 
          <motion.div className='flex  flex-1 w-full justify-end '
           animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          >
          <Image 
         src="/assets/headerimage.png"
         alt=""
         width={200}
         height={300}
         className=" w-[61%]   "
         />
          </motion.div>
         
      </div>

      
    </header>
  )
}

export default Header
