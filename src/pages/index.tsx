import { Categories } from '@/components/shared/Categories'
import { Health } from '@/components/shared/Health'
import { Night } from '@/components/shared/Night'
import { NotFound } from '@/components/shared/NotFound'
import Head from 'next/head'
import { MagnifyingGlass } from 'phosphor-react'
import { gray } from 'tailwindcss/colors'

export default function Home() {
  return (
    <div>
      <Head>
        <title>RecomendaUdi | Os melhores lugares e lojas de Uberlândia</title>
      </Head>

      <main className="max-w-7xl mx-auto mt-10">
        <h1 className="text-3xl leading-normal">
          Encontre os melhores lugares, lojas e profissionais <br />{' '}
          <span className="font-medium">de Uberlândia</span>
        </h1>

        <div className="flex items-center justify-between bg-white shadow-sm mt-10 rounded overflow-hidden w-[30vw] pr-4">
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="outline-none p-4 w-full"
          />

          <MagnifyingGlass size={20} color={gray['400']} />
        </div>
      </main>

      <Categories />

      <Night />

      <Health />

      <NotFound />
    </div>
  )
}
