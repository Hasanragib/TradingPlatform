import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (  
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
            <h1 className='mt-5 p-3'>Open a Zerodha account</h1>
            <p className='fw-normal fs-5 mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 fs-5 btn col-3 mx-auto mt-2 mb-5  openAccBtn'>
                    <Link className='openAccLink' to="/signup">
                        Signup for free
                    </Link>
                </button>
            </div>
        </div>  
    );
}

export default OpenAccount;