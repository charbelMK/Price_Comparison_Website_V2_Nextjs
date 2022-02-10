import { CheckIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import Link from 'next/link';

function ProductCard() {
  return <div className=" mx-auto py-3 max-w-[240px]">
            
  <div className="shadow-2xl hover:shadow-purple-200 border hover:border-purple-300 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href="http://jumia.co.ke/sony-computer-entertainment-sony-ps5-playstation-5-console-digital-version-825gb-35335059.html">
          <img className="rounded-t-lg rounded-b-lg hover:opacity-60 w-[200px] h-[150px]" src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/053353/1.jpg?3606" alt=" Product Photo"/>
      </Link>
      <div className="p-5 bg-[#95b5f0]">
          <Link href="http://jumia.co.ke/sony-computer-entertainment-sony-ps5-playstation-5-console-digital-version-825gb-35335059.html" >
              <h5 className="text-gray-900 font-bold hover:opacity-60 cursor-pointer text-md tracking-tight mb-2 dark:text-white">Sony Computer Entertainment Sony PS5 Playstation 5 Console Digital Version 825GB</h5>
          </Link>
          {/* <p className="font-normal text-gray-700 mb-3 dark:text-gray-400"><b>Region : </b>{region}</p>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400"><b>Population : </b>{population}</p>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400"><b>Capital : </b>{capital}</p>
          {currencies.map(currency => {
              const {id, name} = currency;
              return (
                  <p key={id} className="font-normal text-gray-700 mb-3 dark:text-gray-400"><b>Currency </b>: {name}</p>
              )
          })} */}
          
          <div className="flex space-x-5">
              <a href="#" className="text-white bg-pink-400 focus:bg-[#ffff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm rounded-full ml-20 px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <TrashIcon className=" h-6 w-6"/>
              </a>

              <a href="#" className="text-white bg-gray-400 focus:bg-[#14C704] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm rounded-full ml-20 px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <CheckIcon className=" h-6 w-6 "/>
              </a>
          </div>
          
      </div>
  </div>

  
</div>;
}

export default ProductCard;
