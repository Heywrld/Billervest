import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className=" flex justify-evenly text-center pt-5">
    <div>
    <Image 
    src="/ass"
    alt=""
    width={202.1}
    height={50}
    className="    object-contain"
    />
    </div>
    
    <ul className="  flex items-center cursor-pointer text-xs  space-x-[64px]">
        <li>INTEGRATION</li>
        <li>EDITION</li>
        <li>FUNCTION</li>
        <li>CONTACT US</li>
    </ul>
    
    <div>
    <button className=" px-7 rounded-md py-3    text-xs bg-[#230251] text-white text-center  ">Get wallet</button>
    </div>
      </div> 
  )
}

export default NavBar
