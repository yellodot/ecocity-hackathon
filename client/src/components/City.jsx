import React from 'react';

const City = ({city}) => {
  return (
    <div>
        <ul>
            <li>
                <div>
                    {city.nom}
                </div>
            </li>
        </ul>
    </div>
  )
}

export default City