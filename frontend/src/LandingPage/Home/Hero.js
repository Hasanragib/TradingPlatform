import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div>
                    <img src='media/images/homeHero.png' alt='Hero Pic' className='mb-5' style={{width:"60%",maxHeight:"45vh", textAlign:"center"}}  />
                </div>
            <h1 className='mt-5'>Invest In Everything</h1>
            <p className='fw-normal fs-3'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className=' p-2 fs-5 btn btn-primary col-3 mx-auto mb-5' onSubmit={<signup/>}>
                <Link className='heroBtn' to="/signup">
                    Signup for free
                </Link>
            </button>
            </div>
        </div>  
    );
}
        
export default Hero;