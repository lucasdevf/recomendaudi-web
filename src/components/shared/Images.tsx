import Image from 'next/image'

export function Images() {
  return (
    <section className="mt-10">
      <h1 className="font-semibold text-xl">Fotos do local</h1>

      <div className="flex items-center gap-2 mt-5">
        <div className="relative w-56 h-56 rounded-l-md overflow-hidden">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ab/21/e5/salao-do-bar.jpg?w=500&h=400&s=1"
            alt=""
            fill
          />
        </div>

        <div className="relative w-56 h-56 overflow-hidden">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ab/21/e5/salao-do-bar.jpg?w=500&h=400&s=1"
            alt=""
            fill
          />
        </div>

        <div className="relative w-56 h-56 overflow-hidden">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ab/21/e5/salao-do-bar.jpg?w=500&h=400&s=1"
            alt=""
            fill
          />
        </div>

        <div className="relative w-56 h-56 overflow-hidden">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ab/21/e5/salao-do-bar.jpg?w=500&h=400&s=1"
            alt=""
            fill
          />
        </div>

        <div className="relative w-56 h-56 rounded-r-md overflow-hidden">
          <Image
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ab/21/e5/salao-do-bar.jpg?w=500&h=400&s=1"
            alt=""
            fill
          />
        </div>
      </div>
    </section>
  )
}
