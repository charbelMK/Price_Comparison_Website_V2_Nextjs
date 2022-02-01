import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'

function Navbar() {
  return (
    <header className=" mx-auto flex max-w-7xl items-center justify-between">
      <div className="flex items-center space-x-1 lg:space-x-7">
        {/*Header Left -- Logo*/}
        <div className="relative h-20 w-24 cursor-pointer pt-3 opacity-80 hover:opacity-100 transition duration-450 ease-in-out">
          <Link href="/">
            <Image
              src="https://i.pinimg.com/564x/84/1b/ef/841bef3fd2401c4189172a7e0dc1fa67.jpg"
              height={58}
              width={70}
              className="rounded-2xl"
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="Price Guide"
            />
          </Link>
        </div>

        {/*Header Center -- Search*/}
        <div className='hidden'>
          <Search />
        </div>
      </div>

      {/*Header Right*/}
      <div className="flex lg:space-x-5 space-x-2 bg-black bg-opacity-40 py-2 px-2 rounded-full">
        {/* Home Icon */}
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer hover:fill-slate-300 transition duration-450 ease-in-out active:fill-slate-300"
            viewBox="0 0 20 20"
            fill="currentColor"
            
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>

        {/* About Icon */}
        <Link href="/About">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer hover:fill-slate-300 transition duration-450 ease-in-out active:fill-slate-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        {/* Contact Icon */}
        <Link href="/Contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer hover:fill-slate-300 transition duration-450 ease-in-out active:fill-slate-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
