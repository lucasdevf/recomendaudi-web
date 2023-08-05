import Link from 'next/link'
import { AndroidLogo, AppleLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-3 gap-32">
          <div>
            <span className="text-sm font-semibold">CATEGORIAS</span>

            <div className="grid grid-cols-2 w-fit gap-20 mt-2">
              <div className="flex flex-col gap-2 font-medium text-gray-700">
                <Link href="#">Academias</Link>
                <Link href="#">Bares</Link>
                <Link href="#">Restaurantes</Link>
                <Link href="#">Clínicas</Link>
                <Link href="#">Pet</Link>
                <Link href="#">Oficinas</Link>
              </div>

              <div className="flex flex-col gap-2 font-medium text-gray-700">
                <Link href="#">Academias</Link>
                <Link href="#">Bares</Link>
                <Link href="#">Restaurantes</Link>
                <Link href="#">Clínicas</Link>
                <Link href="#">Pet</Link>
                <Link href="#">Oficinas</Link>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold">APP RECOMENDAUDI</span>

            <p className="mt-2">
              Se preferir, também pode baixar o nosso app, disponível para
              Android e iOS:
            </p>

            <div className="flex gap-3 mt-2">
              <Link href="#">
                <AppleLogo weight="fill" size={28} />
              </Link>

              <Link href="#">
                <AndroidLogo weight="fill" size={28} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-20 text-gray-600">
          <p>© 2023 RecomendaUdi | Todos os direitos reservados</p>

          <p>Uberlândia-MG </p>
        </div>
      </div>
    </footer>
  )
}
