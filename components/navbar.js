import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/angel-with-sword.png" alt="angel-with-sword"/>
        <span className="ml-3 text-xl">Jesus Christ Family</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        
        <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
        <Link href={'/sevenseals'} className="mr-5 hover:text-gray-900">Seven Seals</Link>
        <Link href={'/ages'} className="mr-5 hover:text-gray-900">Church Ages</Link>
        <Link href={'/messages'} className="mr-5 hover:text-gray-900">Messages</Link>
        <Link href={'/search'} className="mr-5 hover:text-gray-900">Search</Link>
        {/* <Link href={'/quotes'} className="mr-5 hover:text-gray-900">Quotes</Link> */}
        {/* <button className="inline-flex  items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">Get App
      <svg fill="none" stroke="currentColor" strokellinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
      </nav>
      
    </div>
  </header>
  )
}

export default Navbar