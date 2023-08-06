import { categories } from '@/utils/categories'
import * as Popover from '@radix-ui/react-popover'
import Image from 'next/image'
import Link from 'next/link'

import { CaretDown } from 'phosphor-react'

export function CategoriesHeader() {
  return (
    <Popover.Root>
      <Popover.Trigger className="flex items-center gap-x-1">
        <li className="flex items-center gap-1 font-medium">
          Categorias
          <CaretDown size={16} />
        </li>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={5}
          className="border left-1/2 -translate-x-1/2 border-gray-300 p-5 absolute bg-white shadow-lg mt-3 w-[30vw] rounded-md"
        >
          <p className="text-sm font-semibold mb-5">MAIS POPULARES</p>

          <div className="grid grid-cols-2 w-full">
            {categories.map((category) => (
              <Link
                href="#"
                key={category.name}
                className="flex items-center gap-2 mb-5 last:mb-0"
              >
                <div className="relative w-10 h-10 rounded-md overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="whitespace-nowrap overflow-hidden font-medium">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>

          <button className="bg-gray-700 hover:bg-gray-950 text-white font-semibold rounded p-2 text-sm mt-5 w-full">
            Ver todas categorias
          </button>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
