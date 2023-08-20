import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  
  return (
    <>
      <section className="relative">
          <Image
            src="/images/logos/stranger-poster.png"
            priority={true}
            width={375}
            height={541}
            className="max-w-full w-full h-auto sm:hidden"
            alt="Stranger Things Poster"
          />
          <Image
            src="/images/poster/stranger-poster-sm.png"
            priority={true}
            width={375}
            height={541}
            className="hidden max-w-full w-full h-auto sm:block"
            alt="Stranger Things Poster"
          />
          <section className="absolute bottom-0 left-0 right-0 flex flex-col items-stretch bg-gradient-cover">
            <div className="flex flex-col items-center gap-y-2">
              <h2 className="text-4xl font-bold text-center w-min">
                Stranger Things 5
              </h2>
              <ul className="flex gap-x-5">
                <li className="text-xs">TV Show</li>
                <li className="text-xs relative before:absolute before:rounded-full before:w-2 before:h-2 before:bg-red-500 before:top-[calc(50%_-_4px)] before:-left-[14px]">
                  Supernatural
                </li>
                <li className="text-xs relative before:absolute before:rounded-full before:w-2 before:h-2 before:bg-red-500 before:top-[calc(50%_-_4px)] before:-left-[14px]">
                  Thriller
                </li>
                <li className="text-xs relative before:absolute before:rounded-full before:w-2 before:h-2 before:bg-red-500 before:top-[calc(50%_-_4px)] before:-left-[14px]">
                  US
                </li>
              </ul>
            </div>
            <div className="flex gap-x-8 self-stretch px-8 py-4 justify-center">
              <button className="inline-flex flex-col items-center hidden-tap active:opacity-20 transition-opacity text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                >
                  <path
                    d="M1.70996 9.75423L6.69185 15.189L19.8259 1.60205"
                    stroke="white"
                    strokeWidth="2.71739"
                  />
                </svg>
                My List
              </button>
              <button className="bg-slate-100 flex items-center rounded-md text-black px-4 py-2 gap-x-2 hidden-tap active:opacity-20 transition-opacity text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M19.7247 9.33743C20.9325 10.0347 20.9325 11.7779 19.7247 12.4752L8.85517 18.7508C7.64744 19.448 6.13778 18.5764 6.13778 17.1819L6.13778 4.63076C6.13778 3.2362 7.64744 2.36459 8.85517 3.06188L19.7247 9.33743Z"
                    fill="black"
                  />
                </svg>
                <span>Play</span>
              </button>
              <button className="inline-flex flex-col items-center hidden-tap active:opacity-20 transition-opacity text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle
                    cx="8.66707"
                    cy="8.75423"
                    r="7.24638"
                    stroke="white"
                    strokeWidth="1.8116"
                  />
                  <rect
                    x="7.60327"
                    y="4.146"
                    width="2.12305"
                    height="2.12305"
                    fill="white"
                  />
                  <rect
                    x="7.60327"
                    y="6.98181"
                    width="2.12649"
                    height="6.37947"
                    fill="white"
                  />
                </svg>
                Info
              </button>
            </div>
          </section>
        </section>
        <section className="py-2 flex flex-col gap-y-4">
          <article className="px-2">
            <h2 className="text-base font-medium mb-4">Continue Watching for Eron</h2>
            <ul className="hidden-scroll flex gap-x-3 items-center whitespace-nowrap overflow-x-auto">
              <li className="flex-shrink-0 h-max relative">
                <div className="absolute right-0 top-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={32} viewBox="0 0 25 32" fill="none">
                    <path d="M23.828 30.7233L1.1848 28.5011V0.880964H23.828V30.7233Z" fill="#EE1520" stroke="#EE1520" strokeWidth="0.905726" />
                  </svg>
                  <div className="info absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-start items-center">
                    <span className="text-[10px] font-bold uppercase">Top</span>
                    <span className="text-xs font-bold leading-[2px]">10</span>
                  </div>
                </div>
                <div className="absolute left-2 top-2">
                  <Image
                    src="/images/logos/netflix.png" className="w-[20px] h-[36px]" width={20} height={36} alt="Netflix original"
                  />
                </div>
                <Link href="/movies/id_movie/hash">
                  <Image className="h-[207px]" width={115} height={207} src="/images/top-list/top-10-1.png" alt="The first movie on top 10" />
                </Link>
              </li>
              <li className="relative flex-shrink-0 h-max">
                <div className="absolute left-2 top-2">
                  <Image
                    src="/images/logos/netflix.png" className="w-[20px] h-[36px]" width={20} height={36} alt="Netflix original"
                  />
                </div>
                <Link href="/movies/id_movie/hash">
                  <Image className="h-[207px]" width={115} height={207} src="/images/top-list/other-serie.png" alt="Another serie in the top 10" />
                </Link>
              </li>
              <li className="relative flex-shrink-0 h-max">
                <div className="absolute right-0 top-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={32} viewBox="0 0 25 32" fill="none">
                    <path d="M23.828 30.7233L1.1848 28.5011V0.880964H23.828V30.7233Z" fill="#EE1520" stroke="#EE1520" strokeWidth="0.905726" />
                  </svg>
                  <div className="info absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-start items-center">
                    <span className="text-[10px] font-bold uppercase">Top</span>
                    <span className="text-xs font-bold leading-[2px]">10</span>
                  </div>
                </div>
                <div className="absolute left-2 top-2">
                  <Image
                    src="/images/logos/netflix.png" className="w-[20px] h-[36px]" width={20} height={36} alt="Netflix original"
                  />
                </div>
                <Link href="/movies/id_movie/hash">
                  <Image className="h-[207px]" width={115} height={207} src="/images/top-list/top-10-2.png" alt="The third movie on top 10" />
                </Link>
              </li>
            </ul>
          </article>
          <article className="px-2">
            <h2 className="text-base font-medium mb-4">My list</h2>
            <ul className="hidden-scroll flex gap-x-3 items-center whitespace-nowrap overflow-x-auto">
              <li className="flex-shrink-0 h-max">
                <Link href="/movies/id_movie/hash">
                  <Image className="h-[164px]" width={109} height={164} src="/images/my-list/my-list-1.png" alt="The first movie on top 10" />
                </Link>
              </li>
              <li className="flex-shrink-0 h-max">
                <Link href="/movies/id_movie/hash">
                  <Image className="h-[164px]" width={109} height={164} src="/images/my-list/my-list-2.png" alt="Another serie in the top 10" />
                </Link>
              </li>
              <li className="flex-shrink-0 h-max">
                <Link href="/movies/id_movie/hash">
                  <Image className="h-[164px]" width={109} height={164} src="/images/my-list/my-list-3.png" alt="The third movie on top 10" />
                </Link>
              </li>
              <li className="flex-shrink-0 h-max">
                <Link href="/movies/id_movie/hash">
                  <Image className="h-[164px]" width={109} height={164} src="/images/my-list/my-list-4.png" alt="The third movie on top 10" />
                </Link>
              </li>
            </ul>
          </article>
          <article className="bg-gradient-shop flex items-center pl-3">
            <div className="flex-1 py-8 flex flex-col justify-center gap-y-2">
              <div className="flex items-center">
                <Image
                  src="/images/logos/netflix.png"
                  width={20}
                  height={36}
                  alt="Netflix original"
                />
                <h2 className="text-2xl">Shop</h2>
              </div>
              <p className="text-xs">Exclusive limited editions of carefully selected high-quality apparel and lifestyle products tied to our shows and brand on a regular basis</p>
              <Link href="/" className="inline-block w-max p-2 px-4 bg-white text-xs text-black font-bold rounded-md">Go to shop</Link>
            </div>
            <ul className="flex-1 hidden-scroll h-max flex gap-x-2 whitespace-nowrap overflow-x-auto">
              <Image
                src="/images/shop/shop-1.png"
                width={129}
                height={195}
                className="flex-shrink-0 w-auto h-[195px]"
                alt="Ejemplo 1 de la tienda"
              />
              <Image
                src="/images/shop/shop-2.png"
                width={129}
                height={195}
                className="flex-shrink-0 w-auto h-[195px]"
                alt="Ejemplo 1 de la tienda"
              />
            </ul>
          </article>
          <article className="px-2">
            <h2 className="text-base font-medium mb-4">Gems for you</h2>
            <ul className="hidden-scroll flex gap-x-3 items-center whitespace-nowrap overflow-x-auto">
              <li className="flex-shrink-0 h-max">
                <Link href="/movies/id_movie/hash">
                  <Image className="h-[164px]" width={109} height={164} src="/images/gems/my-gem-1.png" alt="The first movie on top 10" />
                </Link>
              </li>
              <li className="flex-shrink-0 h-max">
                <Link href="/movies/id_movie/hash">
                  <Image className="h-[164px]" width={109} height={164} src="/images/gems/my-gem-2.png" alt="Another serie in the top 10" />
                </Link>
              </li>
              <li className="flex-shrink-0 h-max">
                <Link href="/movies/id_movie/hash">
                  <Image className="h-[164px]" width={109} height={164} src="/images/gems/my-gem-3.png" alt="The third movie on top 10" />
                </Link>
              </li>
              <li className="flex-shrink-0 h-max">
                <Link href="/movies/id_movie/hash">
                  <Image className="h-[164px]" width={109} height={164} src="/images/gems/my-gem-4.png" alt="The third movie on top 10" />
                </Link>
              </li>
            </ul>
          </article>
        </section>
    </>
  )
}
