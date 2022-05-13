import React from 'react'

function FilterVelo() {
  return (
    <li className="cursor-pointer flex flex-col mr-4 py-2 px-4 mx-auto w-full items-center justify-center bg-transparent underline">
    <div>
    <select 
          // onChange={(e) => handleFiltersChange(e)}
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
  </li>
  )
}

export default FilterVelo