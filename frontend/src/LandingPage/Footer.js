import React from 'react';

function Footer() {
    return (  
        <footer className='bg-light border-top'>
        <div className='container  mt-5'>
            
            <div className='row mb-5 mt-5'>
                <div className='col'>
                    <img src="../media/images/logo.svg" alt='Logo' style={{width:"40%"}} />
                    <p className='text-muted mt-3' style={{fontSize:"87%"}}>© 2010 - 2025, Zerodha Broking Ltd. <br/>All rights reserved.</p>
                    <ul className='social mt-4 '>
                        <li><a href='https://x.com/'><img src='media/images/X-logo.svg' alt='X' style={{width:"80%"}} /></a></li>
                        <li><a href='https://www.facebook.com/'><i class="fa fa-facebook-official fa-lg" ></i></a></li>
                        <li><a href='https://www.instagram.com/'><i class="fa fa-instagram fa-lg" ></i></a></li>
                        <li><a href='https://www.linkedin.com/'><i class="fa fa-linkedin-square fa-lg"></i></a></li>
                    </ul>  
                </div>
                <div className='col'>
                    <p className='fw-bold text-muted mb-4'>Company</p>
                    <div className='Links'>
                        <p><a href='' className='footerAnc'>About</a><br/></p>
                        <p><a href='' className='footerAnc' >Products</a><br/></p>
                        <p><a href='' className='footerAnc' >Pricing</a><br/></p>
                        <p><a href=''className='footerAnc' >Referral programme</a><br/></p>
                        <p><a href=''className='footerAnc' >Careers</a><br/></p>
                        <p><a href='' className='footerAnc'>Zerodha.tech</a><br/></p>
                        <p><a href='' className='footerAnc'>Open Source</a><br/></p>
                        <p><a href='' className='footerAnc'>Press & media</a><br/></p>
                        <p><a href='' className='footerAnc'>Zerodha Cares (CSR)</a><br/></p>
                    </div>
                </div>
                <div className='col'>
                    <p className='fw-bold text-muted mb-4'>Support</p>
                        <p><a href='' className='footerAnc'>Contact us</a></p>
                        <p><a href='' className='footerAnc'>Support portal</a></p>
                        <p><a href='' className='footerAnc'>Z-Connect blog</a></p>
                        <p><a href='' className='footerAnc'>List of charges</a></p>
                        <p><a href='' className='footerAnc'>Downloads & resources</a></p>
                        <p><a href='' className='footerAnc'>Videos</a></p>
                        <p><a href='' className='footerAnc'>Market overview</a></p>
                        <p><a href='' className='footerAnc'>How to file a complaint?</a></p>
                        <p><a href=''className='footerAnc' >Status of your complaints</a></p>
                </div>
                <div className='col'>
                    <p className='fw-bold text-muted mb-4'>Account</p>
                    <p><a href='' className='footerAnc'>Open an account</a></p>
                    <p><a href='' className='footerAnc'>Fund transfer</a></p>
                </div>
            </div>
            <p className='footerPara'> Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='' className='footAncPara'>complaints@zerodha.com</a>, for DP related to <a href='' className='footAncPara'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF <br/><br/>

            Procedure to file a complaint on <a href='' className='footAncPara'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances <br/><br/>

            <a href='' className='footAncPara'>Smart Online Dispute Resolution</a> | <a href='' className='footAncPara'>Grievances Redressal Mechanism</a> <br/><br/>

            Investments in securities market are subject to market risks; read all the related documents carefully before investing. <br/><br/>

            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month. <br/><br/>

            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='' className='footAncPara'>create a ticket here</a>.</p>
            <div className='footerGrave text-center'>
                <ul>
                    <li><a>NSE</a></li>
                    <li><a>BSE</a></li>
                    <li><a>MCX</a></li>
                    <li><a>Terms & conditions</a></li>
                    <li><a>Policies & procedures</a></li>
                    <li><a>Privacy policy</a></li>
                    <li><a>Disclosure</a></li>
                    <li><a>For investor's attention</a></li>
                    <li><a>Investor charter</a></li>
                </ul>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
