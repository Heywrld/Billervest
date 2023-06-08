import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='' >
      <Header />

      <div>
        <div>
          <Image 
          src="/assets/bi"
          alt=''
          />
        </div>
      </div>
    </main>
  )
}
