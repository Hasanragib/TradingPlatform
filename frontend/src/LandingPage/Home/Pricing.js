import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-2 p-5 mb-5 '>
            <div className='row align-items-center'>
                <div className='col-5'>
                    <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                    <p className='fs-6'>We pioneered the concept of discount broking and price <br/> transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing &nbsp;<i class="fa fa-long-arrow-right fa-lg"></i></a>
                </div>
                
                <div className='col-6'>
                    <div className='row mt-5'>
                        <div className='col-4 text-center'>
                            <img src='media/images/accountOpenPrice.svg' alt='Account Open Price' style={{width:"130px"}}/>
                            <p className='small text-muted' style={{fontSize:"75%"}}> Free account opening</p>
                        </div>
                        <div className='col-4 text-center'>
                            <img src='media/images/accountOpenPrice.svg'  alt='Account Open Price' style={{width:"130px"}}/>
                            <p className='small text-muted' style={{ fontSize: '75%'}}>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-4 text-center'>
                            <img src='media/images/intradyF&O.svg' alt='Account Open Price' style={{width:"130px"}}/>
                            <p className='small text-muted' style={{ fontSize: '75%'}}>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );
}

export default Pricing;