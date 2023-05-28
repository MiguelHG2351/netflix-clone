import Header from '@/components/home/Header'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="relative">
        <Header />
        
        {children}
      </main>
      <footer></footer>
    </>
  )
}
