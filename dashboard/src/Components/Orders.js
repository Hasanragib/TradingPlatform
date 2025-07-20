import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';

function Orders() {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3002/allOrders").then ((res)=>{
            setAllOrders(res.data);
        })
        .catch((error) => {
            console.log("Error fetching Positions:", error);
        });
    }, []);   // Empty dependency array means it runs once on mount.

    return (
        <>
            <div className='orders-table'>
                <table>  
                        <tr>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Amount</th>
                        </tr>

                    {allOrders.map((stock, index)=>{
                        return (
                                <tr key={index}>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.price.toFixed(2)}<span style={{fontSize:'60%', paddingLeft:'3%'}}>{stock.mode}</span></td>
                                </tr>
                        )
                    })}
                </table>
            </div>
        </>
    );
}

export default Orders;