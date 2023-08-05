import { Images } from '@/components/shared/Images'
import { Rating } from '@/components/shared/Rating'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  InstagramLogo,
  MapPinLine,
  ShareNetwork,
  Star,
  WhatsappLogo
} from 'phosphor-react'

export default function Details() {
  return (
    <div className="mb-10">
      <Head>
        <title>RecomendaUdi | Detalhes de Neiva Bar</title>
      </Head>

      <main className="flex flex-col flex-1 mt-10 max-w-7xl mx-auto">
        <div className="flex items-start gap-5">
          <div className="relative max-w-[80px] min-w-[80px] h-20">
            <Image
              src="https://static.wixstatic.com/media/f1c288_0d44eebac9394f05912545653564002e~mv2.jpg/v1/fill/w_560,h_560,al_c,lg_1,q_80,enc_auto/f1c288_0d44eebac9394f05912545653564002e~mv2.jpg"
              alt=""
              fill
              className="rounded-full"
            />
          </div>

          <div>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-semibold">NEIVA BAR</h1>

                <Link
                  href="#"
                  className="flex items-center gap-1 mt-1 text-gray-600 hover:text-black"
                >
                  <InstagramLogo />

                  <span>neivabar</span>
                </Link>
              </div>

              <div className="flex items-center gap-5">
                <button className="flex items-center gap-1 group text-sm">
                  <ShareNetwork
                    weight="fill"
                    className="text-gray-600"
                    size={16}
                  />

                  <span className="font-medium">Compartilhar</span>
                </button>

                <button className="flex items-center gap-1 group text-sm">
                  <Star
                    weight="fill"
                    className="text-gray-600 group-hover:text-amber-500"
                    size={16}
                  />

                  <span className="font-medium">Favoritar</span>
                </button>
              </div>
            </div>

            <p className="mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>

            <div className="flex items-center justify-between mt-5">
              <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 p-2 rounded text-white font-semibold">
                <WhatsappLogo weight="fill" size={20} />
                Chamar no Whatsapp
              </button>

              <div className="flex items-center gap-5">
                <button className="flex items-center gap-1 text-sm">
                  <MapPinLine
                    weight="fill"
                    className="text-gray-600"
                    size={16}
                  />

                  <span className="font-medium">
                    Rua do Teste Nº 40, bairro Teste
                  </span>
                </button>

                <button className="text-sm text-blue-600 font-semibold">
                  Abrir no mapa
                </button>
              </div>
            </div>
          </div>
        </div>

        <Images />

        <Rating />
      </main>
    </div>
  )
}
