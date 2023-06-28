import { Inter } from 'next/font/google'
import News from './news'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <News />
      </div>
    </main>
  )
}
