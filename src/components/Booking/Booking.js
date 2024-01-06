import React, { useState } from 'react';
import './Booking.css'
import { Link, useLoaderData } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.module.css'
import ReactDatePicker from 'react-datepicker';
import { SlCalender } from "react-icons/sl";
const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const category = useLoaderData();
  return (
    <div className='container mt-5'>
      <div className='row row-cols-1 row-cols-md-2 g-3  mt-5'>
        <div className="col mt-4">
          <h2 className='text-title'>{category.name}</h2>
          <p className='text-paragraph'>{category.p}</p>
        </div>
        <div className="box col p-4 rounded-5  mt-4">
          <form class="row g-3 mt-4">
            <div class="col-md-6 d-flex flex-column ">
              <label for="inputEmail4" class="form-label">From</label> 
              <div ><ReactDatePicker className='date-btn' selected={selectedDate} onChange={date=>setSelectedDate(date)} dateFormat="dd-MM-yyyy" minDate={new Date()}></ReactDatePicker> <SlCalender  className='date-icon text-primary fs-4' /></div>
            </div>
            <div class="col-md-6 d-flex flex-column">
              <label for="inputPassword4" class="form-label">To</label>
              <div><ReactDatePicker selected={selectedDate} onChange={date=>setSelectedDate(date)}  dateFormat="dd-MM-yyyy" minDate={new Date()}></ReactDatePicker> <SlCalender className='text-primary fs-4' /></div>
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Origin</label>
              <input disabled type="text" class="form-control" id="inputAddress" placeholder="Dhaka" />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Destination</label>
              <input disabled type="text" class="form-control" id="inputAddress2" placeholder={category.name} />
            </div>
            
            <div class="col-12 mb-4">
              <Link to={`/hotelInfo/${category.id}`}><button type="submit" class="btn btn-primary">Go for Hotel booking</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;