import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='' >
      <Header />

      <div className=' flex justify-betw'>
        <div className=' w-1/2 px-4'>
          <div>
           <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </div>
          <div>
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </div>
          <div>
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </div>
          <div>
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </div>
          <div>
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </div>
          <div>
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </div>
        </div>
      </div>
    </main>
  )
}
