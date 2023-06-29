import { Inter } from 'next/font/google'
import News from './news'
import Box from '@mui/material/Box';
import Navbar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center  p-24">
        
        <News />
      </div>
    </main>
  )
}
