
import { Inter } from 'next/font/google'

import { CardProducts } from '@/styles/Home.style'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <CardProducts >
        <div>
          Estrutura Inicial do projeto.
        </div>
      </CardProducts>


    </>
  )
}
