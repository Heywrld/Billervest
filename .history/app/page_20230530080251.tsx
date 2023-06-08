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

        <div>
          <Image
          src="/assets/yellow padlock with key.png"
          alt=''
          width={50}
          height={50}
          />
          <div></div>
          <Image 
          src="/assets/yellow padlock w.png"
          alt=''
          width={50}
          height={50}
          />
        </div>
      </div>
    </main>
  )
}
