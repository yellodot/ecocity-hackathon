import React from 'react';

const Filter = ({setActiveFilter, filter, activeFilter}) => {
    return (
      <div>
      <div>
        <select 
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
        >
          <option value=''>ESPACES VERTS</option>
        {filter.map((filt) => (
          <option key={filt} value={filt}>
                {filt}
          </option>
        ))}
        </select>
      </div>
      </div>
    )
  }

export default Filter