import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='' >
      <Header />

      <div>
        <ul>
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
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </main>
  )
}
