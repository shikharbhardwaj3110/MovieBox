import React, { useState, useEffect } from 'react';
import Navbar from '../UI/Navbar';
import axios from 'axios';
import '../UI/Header.css';
import { useParams } from 'react-router-dom';
import Slider from './Slider';

const Header = () => {

    let { type, id } = useParams();

    let baseUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=cc18f3a1e6cefbc48661a9004ba8e756&language=en-US`;

    console.log(type, id)

    const [featured, setFeatured] = useState({})

    const getFeatured = async () => {
        const result = await axios.get(baseUrl)
        console.log(result.data)
        setFeatured(result.data)
        //console.log(result.data.results[0])
        //setFeatured(result.data.results[0]);
    }

    console.log("should render similar for media and id :",type, id)

    useEffect(() => {
        getFeatured()
    }, [type, id])

    const HeaderStyle = {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.95) ), url(https://image.tmdb.org/t/p/original${featured.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat'
    }

    const renderFeatured = () => {
        return (
            <div className="">
                <div className="row text-light my-5">
                    <div className="col-md-8 col-12 order-2 mt-md-0 mt-2 d-flex flex-column">
                        <span className="header-featured-title">{featured.title || featured.name}</span>
                        <div className='d-flex mt-2'>
                            {
                                featured.genres ? featured.genres.map((genre, index) => {
                                    return (
                                        <div className={`border px-2 py-1 rounded bg-dark ${index!=0 ? 'ms-2' : 'ms-0'}`} key={index}>
                                            {genre.name}
                                        </div>
                                    )
                                })
                                    :
                                    null

                            }
                        </div>



                        <p className="header-featured-description mt-md-4 mt-3">{featured.overview}</p>
                        <div className='mt-md-4 mt-2'>
                            <button className="btn btn-warning rounded">Add to Watchlist</button>
                            <button className="btn btn-light rounded ms-3">Watch Trailer</button>
                        </div>
                    </div>
                    <div className="col-4 order-1 d-none d-md-flex">
                        <img src={`https://image.tmdb.org/t/p/original/${featured.poster_path}`} width="350" className='rounded img-fluid'></img>
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
                <Slider action="Similar" mediaType={type} mediaId={id}/>
            </div>

        </div>
    )
}

export default Header