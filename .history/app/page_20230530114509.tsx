import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' bg-[#230251]' >
      <Header />

      <div className=' bg-[#19013A] mt-10' >
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

        <div className=' w-[1380px] mx-auto rounded-lg m-8 space-x-3  flex  p-10 bg-[#5237B1] '>
          
          <div className=' p-5'>
          <Image
src="/assets/yellow padlock with key.png"
alt=''
width={150}
height={200}
/>
</div>

<div className=' text-center items-center mt-5  '>
  <h1 className=' whitespace-pre-wrap  text-white text-[40px] leading-[47px]'>Manage your money with exceptional
privacy & security</h1>
  <p className=' mt-4  break-words text-[#D4D4D4] text-[20px] leading-[23px]'>The BillerVest Wallet is non-custodial: we are not in possession of any personal data. 
Your funds are stored and safe on your device, We guarantee ultimate privacy and security of your Money.</p>
</div>
<div className=' p-5'>
<Image 
src="/assets/gold bitcoin.png"
alt=''
width={150}
height={200}
/>
</div>


          </div>
          
      </div>
    </main>
  )
}
