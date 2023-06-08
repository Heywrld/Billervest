import Image from 'next/image'
import React from 'react'
import { SelectForm } from './Forms'

function NavBar() {
  return (
    <div className=" flex items-center flex-col md:flex-row p-12 text-center pt-5">
    <div>
    <Image 
    src="/assets/Billervestwhite.svg"
    alt=""
    width={202.1}
    height={50}
    className="    object-contain"
    />
    </div>
    
    <div className="  flex flex-1 w-full justify-end items-center cursor-pointer text-xs  space-x-[64px]">
    <SelectForm holder={"Staking"}></SelectForm>
    <li className=' text-white list-none'>NFT</li>
          <SelectForm holder={"Wallet"}></SelectForm>
          <SelectForm holder={"Support"}></SelectForm>
          <button className=" px-8 rounded-sm py-3    text-xs bg-[#7049f7] text-white text-center  ">Get wallet</button>
    </div>
    
    <div>
    <hr 
       className=' border-2 border-gray-300 m'
       />  
    </div>
      </div> 
  )
}

export default NavBar
