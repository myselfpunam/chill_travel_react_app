import React, { useEffect, useState } from 'react';
import './Home.css'
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {
  const [categories , setCategories] = useState([])
  useEffect(()=>{
    fetch('https://travel-guru-server-99vcxvsoc-punam-bhuyans-projects.vercel.app/categories')
    .then(res=> res.json())
    .then(data=>setCategories(data))
  },[])
  return (
    <div className='container mt-5 pb-5'>
      <h1 className='text-title text-center mt-5 mb-5'>Welcome To Chill Travel</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        categories.map(category => <HomeCard 
        key= {category.id}
        category={category}></HomeCard>)
      }
      </div>
      
    </div>
  );
};

export default Home;