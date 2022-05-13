import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios';
import CityCard from './CityCard'

function Filters() {

  const [data, setData] = useState([]);
  const [filterHabitants, setFilterHabitants] = useState('');
  const [filterAir, setFilterAir] = useState('');
  const [filterVelo, setFilterVelo] = useState('');
  const [filterTrees, setFilterTrees] = useState('');
  const [filterLabel, setFilterLabel] = useState('');

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
    } else if (selectedItems === filterVelo) {
      switch (filterVelo) {
        case 'peu':
          return city.piste_cyclable < 50;
        case 'beaucoup':
          return city.piste_cyclable >= 50;
        default:
          console.log(`Error in switch cases`);
      }
    } else if (selectedItems === filterTrees){
      switch (filterTrees) {
        case 'peu':
          return city.espace_vert < 1000;
        case 'beaucoup':
          return city.espace_vert > 1000;
        default:
          console.log(`Error in switch cases`);
      }
    } 
    return !selectedItems.length || selectedItems.includes(city[itemKey].toLowerCase());
  };
  
  const filteredCities = useMemo(() => {
    return data.filter((city) => {
      return (
        isDataSelected(city, filterHabitants, 'nb_habitant') 
        &&
        isDataSelected(city, filterAir, 'qualite_air')
        &&
        isDataSelected(city, filterVelo, 'piste_cyclable')
        &&
        isDataSelected(city, filterTrees, 'espace_vert')
        &&
        isDataSelected(city, filterLabel, 'label')
      );
    });
  }, [filterHabitants,filterAir, filterVelo, filterTrees, filterLabel]);

  const handleChangeHabitant = (e) => {
    setFilterHabitants(e.target.value);
  }

  const handleChangeAir = (e) => {
    setFilterAir(e.target.value);
  }

  const handleChangeVelo = (e) => {
    setFilterVelo(e.target.value);
  }

  const handleChangeTrees = (e) => {
    setFilterTrees(e.target.value);
  }

  const handleChangeLabel = (e) => {
    setFilterLabel(e.target.value);
  }

  return (
    <>
      <div className='pt-16 flex flex-col justify-center items-center'>
        <ul className='flex pr-4 w-full'>
          <li className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
            <div>
              <select 
                onChange={(e) => handleChangeTrees(e)}
                value={filterTrees}
                className="cursor-pointer py-2 px-3 underline text-xl font-medium bg-transparent" name="trees">
                    <option value="">
                        Espaces verts
                    </option>
                    <option value="peu">
                        Peu boisé
                    </option>
                    <option value="beaucoup">
                        Très boisé
                    </option>
                </select>
            </div>
          </li>
          <li className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
            <div> 
                <select 
                onChange={(e) => handleChangeHabitant(e)}
                value={filterHabitants}
                className="cursor-pointer py-2 px-3 underline text-xl font-medium bg-transparent" name="habitants">
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
                  className="cursor-pointer py-2 px-3 underline text-xl font-medium bg-transparent" name="air">
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
                  onChange={(e) => handleChangeVelo(e)}
                  value={filterVelo}
                  className="cursor-pointer py-2 px-3 underline text-xl font-medium bg-transparent" name="velo">
                      <option value="">
                          Pistes cyclables
                      </option>
                      <option value="peu">
                          Peu d'aménagements
                      </option>
                      <option value="beaucoup">
                          Beaucoup d'aménagements
                      </option>
                  </select>
            </div>
          </li>
          <li className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
            <div>
            <select 
                  onChange={(e) => handleChangeLabel(e)}
                  value={filterLabel}
                  className="cursor-pointer py-2 px-3 underline text-xl font-medium bg-transparent" name="label">
                      <option value="">
                          Label Ville Verte
                      </option>
                      <option value="vert">
                          Ville écologique
                      </option>
                      <option value="orange">
                          En cours de transition
                      </option>
                      <option value="rouge">
                          Pas de label
                      </option>
                  </select>
            </div>
          </li>
        </ul>
          <div>
            <ul className='flex flex-col'>
              {
                filteredCities?.map((city) => 
                <li className='pb-6'>
                  <CityCard id={city.id} nom={city.nom} score={city.label.toLowerCase()==="vert" ? "80" : city.label.toLowerCase() === "orange" ? "60" : "40"} dechets={city.traitement_dechet} espace={city.espace_vert} qualite={city.qualite_eau}  />
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