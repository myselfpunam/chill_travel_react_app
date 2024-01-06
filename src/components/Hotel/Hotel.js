import React from 'react';

import { useLoaderData } from 'react-router-dom';
import HotelCard from '../../HotelCard/HotelCard';

const Hotel = () => {
  const hotels = useLoaderData();
  return (
    <div className='text-light bg-light'>

      <div className="container mb-4">
      <div className="row ">
        <div className="col-md-7 mt-4">

          <h2 className='text-dark mb-4'>Available Hotel For You</h2>
          {
            hotels.map(hotel => <HotelCard
              key={hotel._id}
              hotel={hotel}></HotelCard>)
          }

        </div>
        <div className="col-md-5 mt-4">
          
        </div>
      </div>
      </div>

    </div>
  );
};

export default Hotel;