import Head from 'next/head'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
// import Imagecarousel from '../components/Imagecarousel'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Price Guide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" min-h-screen bg-[url('https://www.indiumsoftware.com/wp-content/uploads/2018/04/5-ways-big-data-in-e-commerce.jpg')] bg-contain bg-no-repeat">
        {/* Navigation Bar */}
        <Navbar hideSearch/>

        {/* Body */}
        <div className="flex-inline max-w-2xl pl-10 pt-10 font-serif md:pl-24 lg:pl-40">
          <h1 className=" pb-5 text-7xl text-blue-400">
            Simple. Fast. Intuitive.
          </h1>
          <h2 className="text-xl font-light text-pink-400">
            <span className="italic !text-blue-300">Price Guide</span> is your
            guide to the best online deals!
          </h2>
          <h2 className="pb-10 text-xl font-light text-pink-400">
            Compare product prices across online stores...
          </h2>
        </div>
        {/* Search bar*/}
        <div className="flex space-x-2 pl-10 md:pl-24 lg:pl-40">
          <Search />
          <button
            className="text-sm rounded-l-lg rounded-r-full bg-purple-700 px-4 text-white transition duration-500 ease-in-out
                      hover:bg-pink-400
                      hover:text-black"
                      data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search"
          >
            Search {'->'}{' '}
          </button>
        </div>

        {/* Image Carousel */}
        <div>
          {/* <Imagecarousel/> */}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}
