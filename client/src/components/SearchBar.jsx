import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/villes`)
      .then((res) => res.data)
      .then((data) => {
        setCities(data);
      })
      .catch((err) => console.log("Error", err));
  }, [query]);

  const filteredList = cities.filter((city) => {
    if (query === "") {
      return "";
    } else {
      return city.nom.toLowerCase().includes(query);
    }
  });

  const displayDetails = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex border-4 border-neutral-900 rounded mb-6">
          <form>
            <input
              onChange={(e) => {
                handleSearch(e);
              }}
              value={query}
              type="text"
              className="px-4 py-4 w-80 placeholder-zinc-900 bg-transparent focus:outline-none"
              placeholder="Rechercher une ville..."
            />
          </form>
          <button
            disabled={filteredList.length > 1 ? true : false}
            // onClick={() => displayDetails(filteredList[0].id)}
            // onClick={() => alert("Ca marche !")}
            className="py-4 px-4 text-white bg-gray-900 border-4-neutral-900 "
          >
            Go !
          </button>
        </div>
        <ul className="flex">
          {filteredList &&
            filteredList.map((city) => (
              <li
                key={city.id}
                className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline"
              >
                <div
                  onClick={() => displayDetails(city.id)}
                  className="text-xl font-medium"
                >
                  {city.nom}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default SearchBar;
