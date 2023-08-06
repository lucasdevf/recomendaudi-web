import Link from 'next/link'
import { UserCircle } from 'phosphor-react'

import logoImage from '@/assets/logo.png'
import Image from 'next/image'
import { CategoriesHeader } from '../shared/CategoriesHeader'

export function Header() {
  return (
    <div className="flex items-center border-b border-gray-200 h-20 bg-white">
      <header className="flex items-center justify-between w-full p-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-1">
          <Image src={logoImage} alt="" />

          <h1 className="font-semibold">
            RECOMENDA<span className="text-amber-500">UDI</span>
          </h1>
        </Link>

        <ul className="flex flex-1 gap-10 items-center justify-center">
          <CategoriesHeader />

          <li className="font-medium">
            <Link href="#">Lojas</Link>
          </li>

          <li className="font-medium">
            <Link href="#">Seus favoritos</Link>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <button className="bg-gray-700 hover:bg-gray-950 text-white font-semibold rounded-full p-2 px-4 text-sm">
            Baixe nosso app
          </button>

          <button className="flex items-center gap-1 font-medium">
            <UserCircle size={20} />
            Acesse sua conta
          </button>
        </div>
      </header>
    </div>
  )
}
