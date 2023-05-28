'use client'
import Image from "next/image"



export default function Home() {
  return (
    <>
      <section className="relative">
          <Image
            src="/images/logos/stranger-poster.png"
            width={375}
            height={541}
            className="max-w-full h-auto"
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
              <button className="inline-flex flex-col items-center hidden-tap active:opacity-20 transition-opacity">
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
              <button className="bg-slate-100 flex items-center rounded-md text-black px-4 py-2 gap-x-2 hidden-tap active:opacity-20 transition-opacity">
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
              <button className="inline-flex flex-col items-center hidden-tap active:opacity-20 transition-opacity">
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
        <section className="p-2">
          <h2 className="text-base font-medium">Continue Watching for Eron</h2>

        </section>
    </>
  )
}
