import { MagnifyingGlass } from 'phosphor-react'
import { gray } from 'tailwindcss/colors'

export function NotFound() {
  return (
    <div className="mt-10 bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl leading-normal font-medium">
          Não encontrou o que procurava?
        </h1>

        <div className="flex items-center justify-between bg-white shadow-sm mt-5 rounded overflow-hidden w-[30vw] pr-4">
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="outline-none p-4 w-full"
          />

          <MagnifyingGlass size={20} color={gray['400']} />
        </div>
      </div>
    </div>
  )
}
