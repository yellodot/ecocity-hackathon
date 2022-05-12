import React from 'react'
import './/CityCard.css';
import { Link } from 'react-router-dom';

const CityCard = ( {nom, score }) => {
  return (
      <div className='cityCardContainer'>
          <div className='leftContainer'>
            <h1 className='name'>{nom}</h1>
            <p> classLorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempora dicta, possimus saepe ullam facilis quasi recusandae sapiente expedita quae!</p>
            <div className='linkCard'>
                <div className='linkDetail'>
                    <Link to="/detail" className="link">
                        Découvrir la ville
                    </Link>
                </div>
                <a href="https://www.seloger.com/">Trouver un logement</a>
            </div>
          </div>
          <div className='rightContainer'>
            <h1 className='name score'>{score}/100</h1>
          </div>
      </div>


  )
}

export default CityCard