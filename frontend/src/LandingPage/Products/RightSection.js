import React from 'react';

function RightSection({image1URL, product1Name, product1Description, learn1More, kite1Connect}) {
    return (  
        <div className='container mx-5'>
            <div className='row mx-5'>
                <div className='col-2'></div>
                <div className='col-4 p-5 ml-5 mt-5' >
                    <h3 className="fs-2 mt-5">{product1Name}</h3>
                    <p style={{ lineHeight: "1.9" }}>{product1Description}</p>
                    <div className="mt-4">
                        {learn1More && <a href={learn1More}>Learn More ➜</a>}
                        {kite1Connect && <a href={kite1Connect}>kite Connect  ➜</a>}
                    </div>
                </div>
                <div className='col-6 ml-5'>
                    <img src={image1URL} style={{width:'100%'}}  alt="Product" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
