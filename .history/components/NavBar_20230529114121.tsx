import Image from 'next/image'
import React from 'react'
import { SelectForm } from './Forms'

function NavBar() {
  return (
    <div className=" flex justify-evenly text-center pt-5">
    <div>
    <Image 
    src="/assets/Billervestwhite.svg"
    alt=""
    width={202.1}
    height={50}
    className="    object-contain"
    />
    </div>
    
    <div className="  flex items-center cursor-pointer text-xs  space-x-[64px]">
    <SelectForm holder={"Location"}></SelectForm>
    <li></li>
          <SelectForm holder={"Property type"}></SelectForm>
          <SelectForm holder={"Rooms"}></SelectForm>
    </div>
    
    <div>
    <button className=" px-7 rounded-md py-3    text-xs bg-[#230251] text-white text-center  ">Get wallet</button>
    </div>
      </div> 
  )
}

export default NavBar
