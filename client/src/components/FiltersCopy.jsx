import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios';
import CityCard from './CityCard'

function Filters() {

  const [data, setData] = useState([]);
  const [filterHabitants, setFilterHabitants] = useState('');
  const [filterAir, setFilterAir] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/villes`)
    .then(res => res.data)
    .then(data => {
      setData(data);
    })
    .catch((err) => console.log('Error', err));
  },[])

  const isDataSelected = (city, selectedItems, itemKey) => {
    if(selectedItems === filterHabitants) {
      switch (filterHabitants) {
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
    return !selectedItems.length || selectedItems.includes(city[itemKey].toLowerCase());
  };
  
  const filteredCities = useMemo(() => {
    return data.filter((city) => {
      console.log('filt',city)
      return (
        isDataSelected(city, filterHabitants, 'nb_habitant') 
        &&
        isDataSelected(city, filterAir, 'qualite_air')
      );
    });
  }, [filterHabitants,filterAir]);

  const handleChangeHabitant = (e) => {
    setFilterHabitants(e.target.value);
  }

  const handleChangeAir = (e) => {
    setFilterAir(e.target.value);
  }

  console.log(filterHabitants)
  console.log(filterAir)
  console.log(filteredCities)

  return (
    <>
      <div className='pt-16 w-screen flex flex-col justify-center items-center'>
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
                onChange={(e) => handleChangeHabitant(e)}
                value={filterHabitants}
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
                  onChange={(e) => handleChangeAir(e)}
                  value={filterAir}
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
          {/* <li className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
            <div>
            <select 
                  onChange={(e) => handleChangeVelo(e)}
                  value={}
                  className="py-2 px-3 underline text-xl font-medium bg-transparent" name="velo">
                      <option value="">
                          Pistes cyclables
                      </option>
                      <option value="peu">
                          Peu de pistes
                      </option>
                      <option value="beaucoup">
                          Beaucoup de pistes
                      </option>
                  </select>
            </div>
          </li> */}
          <li className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
            <div 
              className="text-xl font-medium">
              Label écologique
            </div>
          </li>
        </ul>
          <div>
            <ul className='flex flex-col'>
              {
                filteredCities?.map((city) => 
                <li className='pb-6'>
                  <CityCard nom={city.nom} score={city.score} />
                </li>
                )
              }
            </ul>
          </div>
      </div>
    </>
  )
}

export default Filters