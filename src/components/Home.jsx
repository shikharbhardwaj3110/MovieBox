import React from 'react';
import Slider from './Slider';
import Header from '../UI/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="text-light py-3 container">
        <Slider action="Trending Movies" type="movie"/>
        <Slider action="Upcoming Movies" type="movie"/>
        <Slider action="Top Rated TV" type="tv"/>
      </div>
    </>

  )
}

export default Home