'use client'
import { useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Shimmer from '../effects/Shimmer'

export default function Header() {
  const handlerClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  return (
    <header className="flex flex-col absolute z-10 top-0 left-0 right-0">
      <div className="flex gap-2 px-4 py-2">
        <div className="logo flex shrink-0 items-stretch">
          <Image
            src="/images/logos/netflix.png"
            width={20}
            height={36}
            alt="Netflix Logo"
            className="inline-block align-middle h-auto"
          />
        </div>
        <form className="flex-1 flex items-stretch h-9 bg-white/30 rounded-md">
          <label htmlFor="search" className="flex items-center px-2">
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
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none border-none w-full"
            id="search"
          />
        </form>
        <div className="shrink-0 flex items-stretch h-[36px]">
          <Shimmer
            src="/images/logos/netflix-profile.png"
            width={48}
            height={48}
            alt="Netflix Logo"
            className="inline-block w-auto align-middle"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-8">
        <Link className="text-sm font-medium text-white/70 select-none" href="/">
          TV Show
        </Link>
        <Link className="text-sm font-medium text-white/70 select-none" href="/">
          Movies
        </Link>
        <div onClick={handlerClick} className="text-sm font-bold select-none cursor-pointer">
          <span className='mr-1 font-medium text-white/70'>Categories</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            className="inline-block align-baseline"
          >
            <path
              d="M6.37801 10.5228C6.42648 10.5734 6.49133 10.6148 6.56699 10.6434C6.64265 10.672 6.72684 10.6869 6.8123 10.6869C6.89777 10.6869 6.98196 10.672 7.05762 10.6434C7.13327 10.6148 7.19813 10.5734 7.2466 10.5228L12.0017 5.58497C12.0567 5.52802 12.089 5.46131 12.095 5.39209C12.101 5.32288 12.0805 5.2538 12.0357 5.19237C11.991 5.13094 11.9236 5.07951 11.8411 5.04366C11.7585 5.0078 11.6638 4.9889 11.5674 4.98901H2.05724C1.961 4.9893 1.86669 5.00844 1.78445 5.04438C1.70221 5.08032 1.63515 5.13169 1.59049 5.19298C1.54582 5.25427 1.52525 5.32315 1.53096 5.39222C1.53668 5.46129 1.56848 5.52793 1.62294 5.58497L6.37801 10.5228Z"
              className='fill-white/70'
            />
          </svg>
        </div>
      </div>
    </header>
  )
}
