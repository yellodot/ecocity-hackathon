import React from 'react'

function SearchBar() {
  return (
      <>   
         <div className="flex items-center justify-center ">
          <div className="flex border-2 border-neutral-700 rounded">
          <form>
            <input type="text" className="px-4 py-2 w-80 placeholder-zinc-900" placeholder="Rechercher une ville..."/>
          </form>
          <button className="px-4 text-white bg-gray-900 border-l ">
             Go !
          </button>
          </div>
        </div>     
      </>
  )
}

export default SearchBar