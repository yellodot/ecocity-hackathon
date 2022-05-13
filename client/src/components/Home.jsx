import React from 'react'
import FiltersCopy from './FiltersCopy'
import SearchBar from './SearchBar'

function Home() {
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-emerald-500 w-screen'>
      <div className='flex justify-center items-center text-6xl font-bold text-slate-900 text-center py-12 my-14 w-2/3'>
        Trouvez la ville proche de vos préoccupations écologiques avec EcoCity.fr
      </div>
      <SearchBar />
      <FiltersCopy />
    </div>
    </>
  )
}

export default Home