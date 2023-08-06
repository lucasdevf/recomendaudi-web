import { CategoryDTO } from '@/dto/CategoryDTO'
import { api } from '@/http/api'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { CategoriesLoading } from '../loadings/CategoriesLoading'

export function Categories() {
  const c = [
    {
      label: 'Bares',
      imageUrl:
        'https://pr1.nicelocal.br.com/wYRk9lgukNCqG5UO32_YlQ/587x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2TlYLq8Di27YMHCjIzNpuv0QvEUtSeamvRMysnzryXQdXARCQbwVBqR3USp5aHf6kw',
    },
    {
      label: 'Restaurantes',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1g6AXjvqChG0nDVwx1PaOPwLGz0cH-mVC8QasjfeBaRV1zN_RpX0h6dDQXd980SxwfLP5nksgrL-YgLHsM8guhOjPuSWA3PjaOmlT-FMYLs22tGeBI4T0tC5PTONqY4cMkgBsZcelo0wu8o2LJ9I0elSvdz2UTdV2tf1cC1weH4pgRQmmcy2bYov9og/s16000/20221019_193929.jpg',
    },
    {
      label: 'iPhones',
      imageUrl:
        'https://cdn.thewirecutter.com/wp-content/media/2022/10/whichiphone-2048px-2681-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
    },
    {
      label: 'Carros',
      imageUrl:
        'https://conteudo.imguol.com.br/c/entretenimento/1a/2021/04/14/ford-mustang-mach-1-1618431285090_v2_1170x540.jpg',
    },
    {
      label: 'Roupas masculinas',
      imageUrl:
        'https://assets.b9.com.br/wp-content/uploads/2022/01/Amazon-2-1280x720.png',
    },
  ]

  async function fetchCategories() {
    const response = await api.get('/categories', {
      params: {
        page: 1,
        limit: 5,
      },
    })

    return response.data
  }

  const {
    data: categories,
    error,
    isLoading,
  } = useQuery<CategoryDTO[]>('categories', fetchCategories)

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-sm font-semibold">CATEGORIAS</h1>

      {isLoading && <CategoriesLoading />}

      {categories && (
        <div className="grid grid-cols-5 gap-10 mt-5">
          {categories.map((category) => (
            <Link
              href="#"
              key={category.id}
              className="p-4 rounded shadow h-64 relative overflow-hidden"
            >
              <Image
                src={category.image}
                alt=""
                fill
                className="w-full h-full object-cover brightness-[65%] hover:scale-105 transition-all"
              />

              <p className="text-white text-lg absolute bottom-5 font-semibold">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
