import React from 'react';
import City from './City';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Filter from './Filter';

const CityList = () => {

    const [cities, setCities] = useState([]);

    const url = "http://localhost:8000/api/villes"; 

    useEffect(() => {
        axios
          .get(url)
          .then((res) => res.data)
          .then((data) => setCities(data));
      }, []);

      const [activeFilter, setActiveFilter] = useState("");
    const filter = cities.reduce(
    (acc, city) =>
      acc.includes(city.espace_vert) ? acc : acc.concat(city.espace_vert),
    []
  );

  return (
    <div>
     <div>
        <Filter
        filter={filter}
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      </div>
      <div>
        <ul>
            {cities &&
            cities.map((city) =>
            !activeFilter || activeFilter == city.espace_vert ? (
            <div key={city.id}>
                <City city={city} />
            </div>
            ) : null
            )}
        </ul>
    </div>
    </div>
  )
}

export default CityList