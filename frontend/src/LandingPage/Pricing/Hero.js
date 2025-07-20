import React from 'react';

function Hero() {
    return (  
        <div className='container'>
            <div className='row p-5 text-center'>
                <h1 className='mt-5'>Charges</h1>
                <h3 className='fs-4 text-muted mb-4'>List of all charges and taxes</h3>
            </div>
            <div className='row p-5 mt-5 mb-5'>
                <div className='col-4 p-3 text-center'>
                    <img src='media/images/pricingEquity.svg' style={{width:'70%'}} />
                    <h1 className='mt-3' style={{fontSize:'190%'}}>Free equity delivery</h1>
                    <p className='mt-4' style={{lineHeight:'1.8'}}>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-3 text-center'>
                    <img src='media/images/intradyF&O.svg' style={{width:'70%'}} />
                    <h1 className='mt-3' style={{fontSize:'190%'}}>Intraday and F&O trades</h1>
                    <p className='mt-4' style={{lineHeight:'1.8'}}>Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on intraday trades across<br/> equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-3 text-center'>
                    <img src='media/images/pricingEquity.svg' style={{width:'70%'}} />
                    <h1 className='mt-3' style={{fontSize:'190%'}}>Free direct MF</h1>
                    <p className='mt-4' style={{lineHeight:'1.8'}}>All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP<br/> charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;