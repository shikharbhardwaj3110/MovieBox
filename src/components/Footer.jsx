import React from 'react';
import FooterImg from '../assets/footer.jpg';
import { BiFilm } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    const links = ["Home", "Contact us","About us", "Live", "FAQ", "Privacy Policy", "Terms of service"]

    const navigate = useNavigate();

    const FooterStyle = {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.75) ), url('${FooterImg}')`,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        position : 'static',
        bottom: 0,
        width : '100vw'
        
    }

    return (
        <div className='text-light pt-5 pb-1 text-center' style={FooterStyle}>
            <div className='d-flex justify-content-center align-items-center mt-4'>
                <BiFilm size={40} color="#d8c700" onClick={() => { navigate('/') }} />
                <span className='footer-title ms-2'>MovieBox</span>
            </div>
            <div className='row'>
                <div className='col-md-7 col-11 m-auto'>
                    <div class="row mt-4">
                        {
                            links.map((link) => {
                                return (
                                    <div className='col-md-4 col-6 px-3 py-2 text-md-center text-start'>
                                        <Link to="/" className='footer-link'>{link}</Link>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
                <div className='text-center pt-3'>
                    <h6>Created by <a href="https://www.linkedin.com/in/shikhar-bhardwaj-8080ba180/" className='ms-1'>Shikhar Bhardwaj</a></h6>
                </div>

            </div>

            {/* <div>
                <h5>Created by <a href='https://github.com/shikharbhardwaj3110?tab=repositories' className='ms-2'>Shikhar Bhardwaj</a></h5>
            </div> */}


        </div>
    )
}

export default Footer;