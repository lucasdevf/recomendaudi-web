import { Star } from 'phosphor-react'
import { amber, gray } from 'tailwindcss/colors'
import { Comment } from './Comment'

export function Rating() {
  return (
    <section className="grid grid-cols-3 mt-10">
      <div>
        <h1 className="font-semibold text-xl mb-5">Avaliação</h1>

        <div className="flex items-center gap-5">
          <span className="text-7xl font-medium">4.7</span>

          <div>
            <div className="flex items-center gap-1 mt-5">
              <Star color={amber['500']} weight="fill" />
              <Star color={amber['500']} weight="fill" />
              <Star color={amber['500']} weight="fill" />
              <Star color={amber['500']} weight="fill" />
              <Star color={gray['400']} weight="fill" />
            </div>

            <p className="mt-2 text-sm text-gray-600 font-medium">
              1.000 avaliações
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <p className="font-semibold text-xl mb-5">Comentários (5)</p>

        <div>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>

        <button className="font-medium text-blue-600">
          Ver todos comentários
        </button>
      </div>
    </section>
  )
}
