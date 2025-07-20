import React from 'react';

function Stats() {
    return (
        <div className='container mt-5 p-5 mb-5'>
            <div className='row'>
                <div className='col-5'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='fs-5 text-muted'>That's why 1.5+ crore customers trust Zerodha with<br/> ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-4 mt-5'>No spam or gimmicks</h2>
                    <p className='fs-5 text-muted'>No gimmicks, spam, "gamification", or annoying push<br/> notifications. High quality apps that you use at your<br/> pace, the way you like.</p>
                    <h2 className='fs-4 mt-5'>The Zerodha universe</h2>
                    <p className='fs-5 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                    <h2 className='fs-4 mt-5'>Do better with money</h2>
                    <p className='fs-5 text-muted'>With initiatives like Nudge and Kill Switch, we don't just <br/> facilitate transactions, but actively help you do better<br/> with your money.</p>
                </div>
                <div className='col-7'>
                    <img src='media/images/ecosystem.png' alt='Ecosystem' style={{width:"93%", height:"95%"}} />
                    <div className='text-center fs-5'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products &nbsp;<i class="fa fa-long-arrow-right fa-lg" ></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo &nbsp;<i class="fa fa-long-arrow-right fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;