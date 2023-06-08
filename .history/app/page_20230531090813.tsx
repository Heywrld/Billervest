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



          
      </div>



      <div className="  flex items-center mt-2 md:flex-row px-12 py-5 text-center pt-5">
          <div className=' w-1/2 px-10 animate-pulse '>
          <Image 
         src="/assets/buyandsellphone.png"
         alt=""
         width={200}
         height={300}
         className=" w-[270px] h-[539px]    "
         />
          </div>
        
        <div className=" w-1/2">
          <h1 className=" flex text-[52px] text-white font-[600px]  mb-10 mr-20">Buy  and sell crypto with credit card & bank account</h1>
         
          <ul className=' space-y-2 mb-3  text-[#00FBFF] text-[15px]'>
            <li className=' flex space-x-3'>
            <Image 
            src="/assets/Ellipse.svg"
            alt=''
            width={10}
            height={10}
            />
            <span>Billervest allows Users to buy/sell crypto using bank accounts and Visa/Master card</span>
            </li>
            <li className=' flex space-x-3'>
            <Image 
            src="/assets/Ellipse.svg"
            alt=''
            width={10}
            height={10}
            />
            <span> This feature also applies to Billervest wallet</span>

            </li>
            
            <li className=' flex space-x-3'>
            <Image 
            src="/assets/Ellipse.svg"
            alt=''
            width={10}
            height={10}
            />
            <span>Buying cryptocurrency with fiat money is just a click away</span>
            </li>
            
          </ul>
        
          
          <div className=" flex space-x-2 mt-16">
            <button className="  bg-[#7049F7] text-[14px] px-16 py-4 rounded-[5px] text-white  flex items-center space-x-2 ">Get Wallet</button>
            <button className="  bg-[#1A1A1A] tex-[14px] text-white px-8 py-4 rounded-[5px] flex items-center space-x-2 ">Try BillerVest</button>
          </div>
        </div> 
          </div>
    </main>
  )
}
