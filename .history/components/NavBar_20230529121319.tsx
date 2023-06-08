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
    <SelectForm holder={"Staking"}></SelectForm>
    <li className=' text-white list-none'>NFT</li>
          <SelectForm holder={"Wallet"}></SelectForm>
   
          <SelectForm holder={"Support"}></SelectForm>
    </div>
    
    <div>
   
    </div>
      </div> 
  )
}

export default NavBar
