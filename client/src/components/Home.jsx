import React from 'react'
import SearchBar from './SearchBar'
import CityList from './CityList'

function Home() {
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-emerald-500 w-screen h-screen'>
      <div className='flex justify-center items-center text-6xl font-bold text-slate-900 text-center py-12 my-14 w-2/3'>
        Trouvez la ville proche de vos préoccupations écologiques avec EcoCity.fr
      </div>
      <SearchBar />
      <CityList />
    </div>
    </>
  )
}

export default Home