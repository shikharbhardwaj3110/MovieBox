import React from 'react';
import { BiFilm } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="d-flex align-items-center justify-content-between pt-3">
            <div className="d-flex align-items-center">
                <BiFilm size={30} color="#d8c700" onClick={()=> {navigate('/')}}/>
                <span className="ms-1 navbar-title text-light" onClick={()=> {navigate('/')}}>MovieBox</span>
            </div>


            <div className="dropdown d-md-none">
                <AiOutlineMenu size={25} className="dropdown-toggle" data-bs-toggle="dropdown" color='white' />

                <ul className="dropdown-menu">
                    <NavLink exact to="/"  className="dropdown-item">Home</NavLink>
                    <NavLink to="/movies" className="dropdown-item">Movies</NavLink>
                    <NavLink to="/tv" className="dropdown-item">TV</NavLink>
                </ul>
            </div>


            <div className="d-none d-md-flex">
                <NavLink exact to="/" className="link text-light navbar-link">Home</NavLink>
                <NavLink to="/movies" className={({ isActive }) => (isActive ? "ms-4 link-active text-light navbar-link" : "ms-4 link text-light navbar-link")}>Movies</NavLink>
                <NavLink to="/tv" className={({ isActive }) => (isActive ? "ms-4 link-active text-light navbar-link" : "link ms-4 text-light navbar-link")}>TV</NavLink>
            </div>
        </div>
    )
}

export default Navbar