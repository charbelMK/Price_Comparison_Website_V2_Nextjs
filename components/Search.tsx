import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

function Search() {
  return (
    <form autoComplete="off">
      <div className="flex items-center rounded-lg border-2 border-gray-300 bg-gray-300 px-3  text-gray-600">
        <SearchIcon className="inline h-4 cursor-pointer" />
        
        {/*Search Input*/}
        <input
          className="h-10 bg-gray-300 pl-2 text-sm focus:outline-none w-40 md:w-60 lg:w-80"
          type="search"
          name="search"
          placeholder="Search For Products..."
        />
      </div>
    </form>
  )
}

export default Search
