import { Outlet } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-slate-100 flex flex-col justify-between selection:bg-[#00f0ff] selection:text-black">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
