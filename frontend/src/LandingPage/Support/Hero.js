import React from 'react';

function Hero() {
    return (  
        <section className='container-fluid px-5' id='supportHero'>
            <div className='p-3 mb-1' id='supportWrapper'>
                <h3 className='fs-4'><a href='#'>Support Portal</a></h3>
                <a className='tickets' href='#'><span>Track tickets</span></a>
            </div>
            <div className='row p-5 searchTicket'>
                <div className='col-6 mb-5 searchLeft '>
                    <h3 className='fs-4 mb-5'>Search for an answer or browse help topics to create a ticket</h3>
                    <textarea type='text' placeholder='Eg: how do I activate F&O...' style={{width:'100%',marginBottom:'3%'}} />
                    <a className='ticket' href=''><span>Track account opening</span></a>  
                    <a className='ticket' href=''><span>Track segment activation</span></a>
                    <a className='ticket' href=''><span>Intraday margins</span></a><br/>
                    <a className='ticket' href=''><span>Kite user manual</span></a>
                </div>
                <div className='col-6 p-5 mb-5 searchRight'>
                    <h3 className='fs-4'>Featured</h3>
                    <ol className='list fs-5'>
                        <li><a className='anchor' href=''>Latest Intraday leverages and Square-off timings</a> </li>
                        <li><a className='anchor' href=''>Surveillance measure on scrips - May 2025</a> </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;