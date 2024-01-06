import React from 'react';
import { IoIosStar } from "react-icons/io";
const HotelCard = ({ hotel }) => {
  return (

    <div className=' mb-5'>
      <div className='row  g-4'>
      <div className="col-md-4">
        <img
          src={hotel.thumbnail_url}
          className="d-block w-100 h-100 rounded-top"
          alt=""
        />

      </div>
      <div className="col-md-8">
        <div>
          <h2 className='text-dark'>{hotel.title}</h2>
          <p className='text-dark mt-4 mb-5'>{hotel.details}</p>
          <div className='mt-5 row text-dark'>
            <div className="col">Rating : {hotel.rating.number} (5) <IoIosStar className='text-warning' /></div>
            <div className="col">Price : {hotel.price} $/night</div>
          </div>
        </div>
      </div>
    </div>
      

    </div >

  );
};

export default HotelCard;