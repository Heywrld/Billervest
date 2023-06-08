import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='' >
      <Header />

      <div >
        <div className=' flex justify-between p-10'>
          
           <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          
          <Image
            src="/assets/huobi.svg"
            alt=''
            width={50}
            height={50} 
            />
          
          
          <Image
            src="/assets/.svg"
            alt=''
            width={50}
            height={50} 
            />
        
          
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          
        </div>
      </div>
    </main>
  )
}
