import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 p-5 mb-5 '>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-5'>
                        <img src='media/images/education.svg' alt='Account Open Price' style={{height:"290px"}}/>
                </div>
                <div className='col-5'>
                    <h1 className='mb-4 fs-2'>Free and open market education</h1>
                    <p className='fs-6'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity &nbsp;<i class="fa fa-long-arrow-right fa-lg"></i></a>
                    <p className=' mt-4 fs-6'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A &nbsp;<i class="fa fa-long-arrow-right fa-lg"></i></a>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );
}

export default Education;