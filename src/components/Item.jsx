import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ data, type }) => {

    let dataType;
    if(type=="Movies") {
        dataType = "movie";
    }
    else {
        dataType = "tv";
    }

    return (
        <div className='col-sm-6 col-6 col-md-3 col-lg-2  text-center mt-2'>
            <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt={data.title || data.name} className="img-fluid rounded"></img>
            <div className='item-title mt-1'>
                <Link className='item-title-text' to={`/${dataType}/${data.id}`}>{data.title || data.name}</Link>
                
            </div>

        </div>
    )
}

export default Item