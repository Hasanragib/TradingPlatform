import React from 'react';

function CreateTicket() {
    return (  
        <div className='container mt-5'>
            <div className='row' style={{marginLeft:'7%'}}>
                <h2 className='fs-4 text-muted mb-5'>To create a ticket, select a relevant topic</h2>
                <div className='col-4'>
                    <h3 className='fs-5 mb-4'> <a href='#' style={{color:'black'}}><i class="fa fa-plus-circle"></i>&nbsp;&nbsp;Account Opening</a> </h3>
                    <div style={{paddingLeft:'6.9%', lineHeight:'2.2rem'}}>
                        <a href='#' >Resident individual</a><br />
                        <a href='#'>Minor</a><br />
                        <a href='#'>Non Resident Indian (NRI)</a><br />
                        <a href='#'>Company, Partnership, HUF and LLP</a><br />
                        <a href='#'>Glossary</a>
                    </div>
                </div>
                <div className='col-4'>
                    <h3 className='fs-5 mb-4'> <a href='#' style={{color:'black'}}><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Your Zerodha Account</a> </h3>
                    <div style={{paddingLeft:'6.9%', lineHeight:'2.2rem'}}>
                        <a href='#' >Your Profile</a><br />
                        <a href='#'>Account modification</a><br />
                        <a href='#'>Client Master Report (CMR) and Depository<br/> Participant (DP)</a><br />
                        <a href='#'>Nomination</a><br />
                        <a href='#'>Transfer and conversion of securities</a>
                    </div>
                </div>
                <div className='col-4'>
                    <h3 className='fs-5 mb-4'> <a href='#' style={{color:'black'}}><i class="fa fa-bar-chart" aria-hidden="true"></i> Kite</a> </h3>
                    <div style={{paddingLeft:'6.9%', lineHeight:'2.2rem'}}>
                        <a href='#' >IPO</a><br />
                        <a href='#'>Trading FAQs</a><br />
                        <a href='#'>Margin Trading Facility (MTF) and Margins</a><br />
                        <a href='#'>Charts and orders</a><br />
                        <a href='#'>Alerts and Nudges</a><br />
                        <a href='#'>General</a>
                    </div>
                </div>
            </div>
            <div className='row' style={{marginLeft:'7%', marginBottom:'7rem'}}>
                <div className='col-4 mt-5'>
                    <h3 className='fs-5 mb-4'> <a href='#' style={{color:'black'}}><i class="fa fa-folder" aria-hidden="true"></i>&nbsp;&nbsp;Funds</a> </h3>
                    <div style={{paddingLeft:'6.9%', lineHeight:'2.2rem'}}>
                        <a href='#' >Add money</a><br />
                        <a href='#'>Withdraw money</a><br />
                        <a href='#'>Add bank accounts</a><br />
                        <a href='#'>eMandates</a><br />
                    </div>
                </div>
                <div className='col-4 mt-5'>
                    <h3 className='fs-5 mb-4'> <a href='#' style={{color:'black'}}><i class="fa fa-circle-o-notch" aria-hidden="true"></i>&nbsp;&nbsp;Console</a> </h3>
                    <div style={{paddingLeft:'6.9%', lineHeight:'2.2rem'}}>
                        <a href='#' >Portfolio</a><br />
                        <a href='#'>Corporate actions</a><br />
                        <a href='#'>Funds statement</a><br />
                        <a href='#'>Reports</a><br />
                        <a href='#'>Profile</a><br />
                        <a href='#'>Segments</a>
                    </div>
                </div>
                <div className='col-4 mt-5'>
                    <h3 className='fs-5 mb-4'> <a href='#' style={{color:'black'}}><i class="fa fa-circle-thin" aria-hidden="true"></i>&nbsp; Coin</a> </h3>
                    <div style={{paddingLeft:'6.9%', lineHeight:'2.2rem'}}>
                        <a href='#' >Understanding mutual funds and Coin</a><br />
                        <a href='#'>Coin app</a><br />
                        <a href='#'>Coin web</a><br />
                        <a href='#'>Transactions and reports</a><br />
                        <a href='#'>National Pension Scheme (NPS)</a><br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;