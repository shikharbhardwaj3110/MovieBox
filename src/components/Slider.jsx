import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Slider = ({ action, type, mediaType, mediaId }) => {

    const sliderRef = useRef(null)
    const slider = sliderRef.current;
    
    if (slider) {
        let mouseDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
            mouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };
        let stopDragging = function (event) {
            mouseDown = false;
        };

        slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if (!mouseDown) { return; }
            const x = e.pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
        });

        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);
    }


    const [items, setItems] = useState([])

    const getItems = async () => {

        let result;
        if (action == "Trending Movies") {
            result = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
        }
        else if (action == "Upcoming Movies") {
            result = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        }
        else if (action == "Top Rated TV") {
            result = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        }
        else if(action == "Similar") {
            result = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${mediaId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        }

        setItems(result.data.results);
    }

    useEffect(() => {
        getItems();
    }, [mediaType, mediaId])


    const renderItems = () => {
        return (
            items.map((item) => {
                return (
                    <div className='d-inline-block slider-box text-center'>
                        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} height="100%" className='rounded'></img>
                        <div className='slider-title-wrapper py-1 text-center px-1'>
                            <Link className='slider-title' to={`/${mediaType || type}/${item.id}`}>{item.title || item.name}</Link>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className="mt-4 text-light">
            <h5 className='ms-2 action'>{action}</h5>

            <div class="mt-4 slider-wrapper" ref={sliderRef}>

                {renderItems()}


            </div>

        </div>
    )
}

export default Slider