import { Star } from 'phosphor-react'
import { amber, gray } from 'tailwindcss/colors'

export function Comment() {
  return (
    <div className="mb-5 pb-5 border-b last:border-none border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <Star color={amber['500']} weight="fill" />
          <Star color={amber['500']} weight="fill" />
          <Star color={amber['500']} weight="fill" />
          <Star color={amber['500']} weight="fill" />
          <Star color={gray['400']} weight="fill" />
        </div>

        <span className="text-xs font-medium text-gray-600">04 AGO 2023</span>
      </div>

      <p>
        Produto muito bom, com a ressalva de que tem uma capacidade ideal para
        se carregar o recipiente - menos do que ela, e não processa direito;
        mais, idem. Dito isto, com a prática se faz um ótimo uso.
      </p>
    </div>
  )
}
