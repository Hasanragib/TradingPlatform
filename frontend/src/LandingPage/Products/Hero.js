import React from 'react';

function Hero() {
    return (  
        <div className='container border-bottom mb-5 text-center'>
            <div className='row mb-5'>
                <h1 className='mt-5' style={{fontSize:'40px'}}>Zerodha Products</h1>
                <p style={{fontSize:'20px'}}>Sleek, modern, and intuitive trading platforms</p>
                <p style={{fontSize:'16px'}} className='mb-5'>Check out our <a href='#' >investment offerings  ➜</a></p>
            </div>
        </div>
    );
}

export default Hero;
