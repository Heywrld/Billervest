import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='' >
      <Header />

      <div>
        <ul className=' flex item'>
          <li>
           <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </li>
          <li>
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </li>
          <li>
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </li>
          <li>
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </li>
          <li>
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </li>
          <li>
          <Image
            src="/assets/binance.svg"
            alt=''
            width={50}
            height={50} 
            />
          </li>
        </ul>
      </div>
    </main>
  )
}
