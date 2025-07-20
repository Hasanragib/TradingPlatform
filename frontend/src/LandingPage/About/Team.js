import React from 'react';

function Team() {
    return (  
        <div className='Container px-5 mx-5 mb-5'>
            <div className='row mb-3 text-center'>
                <h2 className='text-center' style={{fontSize:'2.2rem', lineHeight:'1.5', color:'#424242'}}>People</h2>
            </div>
            <div className='row mx-5 ' style={{fontSize:'1rem', lineHeight:'1.8', color:'#424242'}}>
                <div className='col text-center mx-5'  >
                    <img src='media/images/nithinKamath.jpg' style={{borderRadius:'100%', width:'40%'}} />
                    <h3 className=' mt-5'>Nithin Kamath</h3>
                    <h6>Founder, CEO</h6>
                </div>
                <div className='col mt-2 mx-5'  >
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. </p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). </p> 

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
    );
}

export default Team;