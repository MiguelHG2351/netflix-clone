import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className="flex gap-2 px-4 py-2">
      <div className="logo flex shrink-0 items-stretch">
        <Image
          src="/images/logos/netflix.png"
          width={20}
          height={36}
          alt="Netflix Logo"
          className="inline-block align-middle"
        />
      </div>
      <form className="flex-1 flex items-stretch h-9 bg-white/30">
        <label htmlFor="search" className='flex items-center px-2'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <g opacity="0.7">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3852 8.00252C13.3852 11.0845 10.8438 13.5284 7.77802 13.5284C4.71222 13.5284 2.17081 11.0845 2.17081 8.00252C2.17081 4.92056 4.71222 2.47663 7.77802 2.47663C10.8438 2.47663 13.3852 4.92056 13.3852 8.00252ZM11.9229 14.146C10.7347 14.9171 9.3099 15.3661 7.77802 15.3661C3.62728 15.3661 0.262451 12.0693 0.262451 8.00252C0.262451 3.93572 3.62728 0.638916 7.77802 0.638916C11.9287 0.638916 15.2936 3.93572 15.2936 8.00252C15.2936 9.6757 14.724 11.2185 13.7645 12.4551L16.2996 14.9389C16.8052 15.4343 16.7982 16.2506 16.284 16.7372C15.7966 17.1985 15.0317 17.1919 14.5523 16.7222L11.9229 14.146Z"
                fill="white"
              />
            </g>
          </svg>
        </label>
        <input type="text" placeholder="Search" className='bg-transparent outline-none border-none w-full' id="search" />
      </form>
      <div className="shrink-0 flex items-stretch h-[36px]">
        <Image
          src="/images/logos/netflix-profile.jpg"
          width={1000}
          height={1000}
          alt="Netflix Logo"
          className="inline-block w-auto h-auto align-middle"
        />
      </div>
    </header>
  )
}
