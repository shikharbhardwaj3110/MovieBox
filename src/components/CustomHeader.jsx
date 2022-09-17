import React, { useState, useEffect } from 'react';
import CustomHeaderImg from '../assets/custom-header.jpg';
import Navbar from '../UI/Navbar';
import './CustomHeader.css';
import { VscSearch } from "react-icons/vsc";
import axios from 'axios';
import Item from './Item';

const CustomHeader = ({ type }) => {

  const customHeaderStyle = {

    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65) ), url('${CustomHeaderImg}')`,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat'

  }

  const [query, setQuery] = useState('')
  const [items, setItems] = useState([])
  const [staticQuery, setstaticQuery] = useState('')

  const handleSearch = async () => {
    console.log("clicked on search")
    let result;
    if (query.length > 0) {
      if (type == "Movies") {
        result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cc18f3a1e6cefbc48661a9004ba8e756&language=en-US&page=1&include_adult=false&query=${query}`)
        setstaticQuery(query)
        setItems(result.data.results)
      }

      else {
        result = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=cc18f3a1e6cefbc48661a9004ba8e756&language=en-US&page=1&include_adult=false&query=${query}`)
        setstaticQuery(query)
        setItems(result.data.results)
      }
    }
    else {
      return;
    }
  }


  return (
    <div>
      <div style={customHeaderStyle}>
        <div className='text-light container' >
          <Navbar />
          <div className='pt-5 pb-3 text-center'>
            <h1 className='custom-header-text'>{type}</h1>
            <p className='mt-3'>Tons of Movies and TV Entertainment for you to discover at your fingertips.</p>
            <div className='search-wrapper rounded d-flex my-4 align-items-center bg-white m-auto'>
              <VscSearch size={22} className="bg-white ms-3 me-3" color='black' onClick={handleSearch} />
              <input placeholder='Search for something...' className='w-100 py-2 border-0 ps-1 rounded' value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                }}>
              </input>
            </div>
          </div>
        </div>
      </div>


      <div className='container text-light'>
        <div className=''>
          {
            staticQuery.length > 0 ? <span className='search-result-info'>Search results for : {staticQuery}</span>
              : null
          }

        </div>

        <div className=' mt-4 row gx-3 pb-4'>
          {
            items.map((item) => {
              return (
                <Item data={item} type={type}/>
              )
            })
          }
        </div>
      </div>


    </div>



  )
}

export default CustomHeader