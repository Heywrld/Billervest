import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='' >
      <Header />

      <div className=' flex justify-center'>
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
