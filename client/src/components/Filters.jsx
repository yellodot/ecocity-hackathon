import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios';

function Filters() {

  const [data, setData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/villes`)
    .then(res => res.data)
    .then(data => {
      setData(data);
    })
    .catch((err) => console.log('Error', err));
  },[])

  console.log('data',data)

  function handleFiltersChange(e) {
    setSelectedFilters([...selectedFilters,e.target.value]);
    setActiveFilter(e.target.name);
  }

  console.log('active filter',activeFilter)

  console.log('selected filters',selectedFilters)

  function getFilteredHabitants() {
    if (!selectedFilters) {
      return '';
    }
    return data.filter((city) => 
      {
          switch (selectedFilters[0]) {
            case 'inf-100':
              return city.nb_habitant < 100000;
            case '100-300':
              return (city.nb_habitant > 100000 && city.nb_habitant < 300000) ;
            case 'plus-300':
              return city.nb_habitant > 300000;
            default:
              console.log(`Error in switch cases`);
          }
      }
    );
  }

  const filteredList = useMemo(getFilteredHabitants,[selectedFilters, data])

  return (
    <>
      <div className='pt-16 w-screen flex justify-center'>
        <ul className='flex pr-4 w-2/3'>
          <li className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
            <div 
              className="text-xl font-medium">
              Espaces verts
            </div>
          </li>
          <li className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
            <div> 
                <select 
                onChange={(e) => handleFiltersChange(e)}
                disabled={activeFilter ? true : false}
                className="py-2 px-3 underline text-xl font-medium bg-transparent" name="habitants">
                    <option value="">
                        Nombre d'habitants
                    </option>
                    <option value="inf-100">
                        Moins de 100000
                    </option>
                    <option value="100-300">
                        Entre 100000 et 300000
                    </option>
                    <option value="plus-300">
                        Plus de 300000
                    </option>
                </select>
            </div>
          </li>
          <li className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
            <div>
              <select 
                  onChange={(e) => handleFiltersChange(e)}
                  disabled={activeFilter ? true : false}
                  className="py-2 px-3 underline text-xl font-medium bg-transparent" name="air">
                      <option value="">
                          Qualité de l'air
                      </option>
                      <option value="mauvaise">
                          Mauvaise
                      </option>
                      <option value="moyenne">
                          Moyenne
                      </option>
                      <option value="bonne">
                          Bonne
                      </option>
                  </select>
            </div>
          </li>
          <li className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
            <div>
            <select 
                  onChange={(e) => handleFiltersChange(e)}
                  className="py-2 px-3 underline text-xl font-medium bg-transparent" name="velo">
                      <option value="">
                          Pistes cyclables
                      </option>
                      <option value="peu">
                          Peu d'aménagement
                      </option>
                      <option value="beaucoup">
                          Beaucoup de pistes
                      </option>
                  </select>
            </div>
          </li>
          <li className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
            <div 
              className="text-xl font-medium">
              Label écologique
            </div>
          </li>
        </ul>

        <div>
          {
            filteredList.map((city) => city.nom)
          }
        </div>


      </div>
    </>
  )
}

export default Filters