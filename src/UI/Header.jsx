import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './Header.css';
import Buttons from '../components/Buttons';

const Header = () => {

  const [featured, setFeatured] = useState({})

  const getFeatured = async () => {
    const result = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=1`)
    setFeatured(result.data.results[0]);
  }

  useEffect(() => {
    getFeatured()
  }, [])

  const HeaderStyle = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.95) ), url(https://image.tmdb.org/t/p/original${featured.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition : '50%',
    backgroundRepeat : 'no-repeat'
  }

  const renderFeatured = () => {
    return (
      <div className="">
        <div className="row text-light my-5">
          <div className="col-md-7 col-12 order-md-1 order-2 mt-md-0 mt-3 d-flex flex-column justify-content-center">
            <span className="header-featured-title">{featured.title || featured.name}</span>
            <p className="header-featured-description mt-md-4 mt-3">{featured.overview}</p>
            <div className='mt-md-5 mt-3'>
              <button className="btn btn-warning rounded">Add to Watchlist</button>
              <button className="btn btn-light rounded ms-3">Watch Trailer</button>
            </div>
          </div>
          <div className="col-md-5 col-12 order-1 order-md-2 text-center d-none d-md-flex">
            <img src={`https://image.tmdb.org/t/p/original/${featured.poster_path}`} width="300" className='rounded'></img>
          </div>
        </div>
      </div>

    )
  }

  return (
    <div className="" style={HeaderStyle}>
      <div className="container">
        <Navbar />
        {renderFeatured()}
      </div>

    </div>
  )
}

export default Header