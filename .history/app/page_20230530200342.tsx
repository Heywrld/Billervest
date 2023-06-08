import { motion } from "framer-motion"

import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' bg-[#230251]' >
      <Header />

      <div className=' bg-[#19013A] mt-10 py-5'  >
        <div className=' flex justify-between p-10'>
          
           <Image
            src="/assets/binance.svg"
            alt=''
            width={165}
            height={50} 
            />
          
          <Image
            src="/assets/huobi.svg"
            alt=''
            width={165}
            height={50} 
            />
          
          
          <Image
            src="/assets/trustee.svg"
            alt=''
            width={165}
            height={50} 
            />
        
          
          <Image
            src="/assets/guarda.svg"
            alt=''
            width={165}
            height={50} 
            />
          
          <Image
            src="/assets/exodus.svg"
            alt=''
            width={165}
            height={50} 
            />
          
          <Image
            src="/assets/atomicwallet.svg"
            alt=''
            width={165}
            height={50} 
            />
          
        </div>

        <div className=' flex justify-between p-10'>
          
           <Image
            src="/assets/okex.svg"
            alt=''
            width={165}
            height={50} 
            />
          
          <Image
            src="/assets/edge.svg"
            alt=''
            width={165}
            height={50} 
            />
          
          
          <Image
            src="/assets/simplex.svg"
            alt=''
            width={165}
            height={50} 
            />
        
          
          <Image
            src="/assets/ledger.svg"
            alt=''
            width={165}
            height={50} 
            />
          
          <Image
            src="/assets/cakewallet.svg"
            alt=''
            width={165}
            height={50} 
            />
          
          <Image
            src="/assets/trezor.svg"
            alt=''
            width={165}
            height={50} 
            />
          
        </div>

        <div className=' w-[1380px] mx-auto rounded-lg m-8 space-x-3  flex  p-10  bg-[#5237B1] '>
          
          <div className=' p-5 animate-bounce'>
          <Image
src="/assets/yellow padlock with key.png"
alt=''
width={150}
height={200}
/>
</div>

<div className=' text-center items-center mt-5 p-7 '>
  <h1 className=' whitespace-pre-wrap  text-white text-[40px] leading-[47px]'>Manage your money with exceptional
privacy & security</h1>
  <p className=' mt-4  break-words text-[#D4D4D4] text-[20px] leading-[23px]'>The BillerVest Wallet is non-custodial: we are not in possession of any personal data. 
Your funds are stored and safe on your device, We guarantee ultimate privacy and security of your Money.</p>
</div>
<div className=' p-5 animate-bounce'>
<Image 
src="/assets/gold bitcoin.png"
alt=''
width={150}
height={200}
/>
</div>
</div>


          <div className="  flex flex-col  mt-2 items-center md:flex-row px-12 py-5 text-center pt-5">
          <div className='w-[40%]    animate-pulse'>
          <Image 
         src="/assets/headerimage.png"
         alt=""
         width={200}
         height={300}
         className=" w-[61%]   "
         />
          </div>
        
        <div className=" just ">
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
          
         
      </div>
          
      </div>
    </main>
  )
}
