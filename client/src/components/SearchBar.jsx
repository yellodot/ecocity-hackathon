import React from 'react'
import axios from 'axios';
import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function SearchBar() {

  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();  
    setQuery(e.target.value.toLowerCase())
  }

  console.log(query)

  useEffect(() => {
    axios.get(`http://localhost:8000/api/villes`)
    .then(res => res.data)
    .then(data => {
      setCities(data);
    })
    .catch((err) => console.log('Error', err));
  },[query])

  const filteredList = cities.filter((city) => {
    if (query === '') {
        return '';
    }
    else {
        return city.nom.toLowerCase().includes(query)
    }
  })

  return (
      <>   
         <div className="flex flex-col items-center justify-center ">
          <div className="flex border-2 border-neutral-700 rounded mb-6">
          <form>
            <input 
            onChange={(e) => {handleSearch(e)}}
            value={query}
            type="text" className="px-4 py-2 w-80 placeholder-zinc-900" placeholder="Rechercher une ville..."/>
          </form>
          <button 
          disabled ={filteredList.length > 1 ? true : false}
          // onClick={() => displayDetails(filteredList[0].id)}
          onClick={() => alert('Ca marche !')}
          className="px-4 text-white bg-gray-900 border-l ">
             Go !
          </button>
          </div>
          <ul className='flex'>
            {
              filteredList &&
                filteredList
                .map((city) => 
                  <li  
                    key={city.id}
                    className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
                      <div 
                      // onClick={() => displayDetails(city.id)}
                      className="text-xl font-medium">
                          {city.nom}
                      </div>
                  </li>
                )
            }
          </ul>
        </div>     
      </>
  )
}

export default SearchBar