import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackToTopButton } from '@/components/BackToTopButton'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0b14] text-slate-100 flex flex-col justify-between selection:bg-[#8b5cf6] selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
