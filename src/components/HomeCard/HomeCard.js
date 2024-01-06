import React from 'react';
import './HomeCard.css'
import { Link } from 'react-router-dom';
import { FaArrowRightToBracket } from "react-icons/fa6";
const HomeCard = ({ category }) => {

  return (
    <div className="col">
      <div className="card rounded-5">
        <Link to={`/category/${category.id}`}><img src={category.img} className="place-img card-img-top rounded-5  " alt="..." /></Link>
        <h1 className='card-text'>{category.name}</h1>
      </div>
      <Link to={`/category/${category.id}`}><button type="button" className="btn-card btn-warning mt-2 rounded-5">Book Now &nbsp; <FaArrowRightToBracket /> </button></Link>
    </div>
  );
};

export default HomeCard;