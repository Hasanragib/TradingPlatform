import React from 'react';

function Universe() {
    return (  
        <div className='container mt-5'>
            <div className='row text-center fs-5 mb-5'>
                <p>Want to know more about our technology stack? Check out the <a href='#'>Zerodha.tech</a> blog.</p>
            </div>
            <div className='row text-center'>
                <h2 className='mb-4'>The Zerodha Universe</h2>
                <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mb-5'>
                    <a href='#'><img src='media/images/zerodhaFundhouse.png' className='mb-3' style={{width:'40%'}} />
                    <br/>
                    <span style={{fontSize:'13px', color:'#9b9b9b'}}>
                        Our asset management venture
                        <br/>
                        that is creating simple and transparent index
                        <br/>
                        funds to help you save for your goals.
                    </span>
                    <br/>
                    </a>
                </div>
                <div className='col-4 p-3 mb-5'>
                    <a href='#'><img src='media/images/sensibullLogo.svg' className='mb-4' style={{width:'45%'}} />
                    <br/>
                    <span style={{fontSize:'13px', color:'#9b9b9b'}}>
                        Options trading platform that lets you
                        <br/>
                        create strategies, analyze positions, and examine
                        <br/>
                        data points like open interest, FII/DII, and more.
                    </span>
                    <br/>
                    </a>
                </div>
                <div className='col-4 p-2 mb-5'>
                    <a href='#'><img src='media/images/tijori.svg' className='mb-3' style={{width:'30%'}} />
                    <br/>
                    <span style={{fontSize:'13px', color:'#9b9b9b'}}>
                        Personalized advice on life
                        <br/>
                        and health insurance. No spam
                        <br/>
                        and no mis-selling.
                    </span>
                    <br/>
                    </a>
                </div>
                <div className='col-4 p-3 mb-5'>
                    <a href='#'><img src='media/images/streakLogo.png' className='mb-3' style={{width:'40%'}} />
                    <br/>
                    <span style={{fontSize:'13px', color:'#9b9b9b'}}>
                        Systematic trading platform
                        <br/>
                        that allows you to create and backtest
                        <br/>
                        strategies without coding.
                    </span>
                    <br/>
                    </a>
                </div>
                <div className='col-4 p-3 mb-5'>
                    <a href='#'><img src='media/images/smallcaseLogo.png' className='mb-4' style={{width:'45%'}} />
                    <br/>
                    <span style={{fontSize:'13px', color:'#9b9b9b'}}>
                        Thematic investing platform
                        <br/>
                        that helps you invest in diversified
                        <br/>
                        baskets of stocks on ETFs.
                    </span>
                    <br/>
                    </a>
                </div>
                <div className='col-4 p-2 mb-5'>
                    <a href='#'><img src='media/images/dittoLogo.png' className='mb-3' style={{width:'38%'}} />
                    <br/>
                    <span style={{fontSize:'13px', color:'#9b9b9b'}}>
                        Our asset management venture
                        <br/>
                        that is creating simple and transparent index
                        <br/>
                        funds to help you save for your goals.
                    </span>
                    <br/>
                    </a>
                </div>
                <button className=' p-2 fs-5 btn btn-primary col-3 mx-auto' style={{marginBottom:'80px'}}>Signup for free</button>
            </div>
        </div>
    );
}

export default Universe;