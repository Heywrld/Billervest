import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='' >
      <Header />

      <div>
        <div>
          <Image 
          src="/assets/binanceimages.png"
          alt=''
          width={250}
          height={50}
         className=' w-fu'
          />
        </div>
      </div>
    </main>
  )
}
