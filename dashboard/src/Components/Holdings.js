import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';
import { VerticalGraph } from './VerticalGraph';

function Holdings() {

    const [allHoldings, setAllHoldings] = useState([]);
    const [totalInvestment, setTotalInvestment] = useState(0);
    const [totalProfitLoss, setTotalProfitLoss] = useState(0);

    useEffect(()=> {
        axios.get("http://localhost:3002/allHoldings").then((res)=>{
            setAllHoldings(res.data);

            // Calculating total investment and profit/loss after data is fetched.
                let investment = 0;
                let profitLoss = 0;
                res.data.forEach(stock => {
                    investment += stock.avg * stock.qty;
                    profitLoss += (stock.price - stock.avg) * stock.qty;
                });
                setTotalInvestment(investment);
                setTotalProfitLoss(profitLoss);
        })
        .catch((error) => {
            console.log("Error fetching holdings:", error);
        });
    }, []);  // Empty dependency array means it runs once on mount.

  //VerticalGraph.
    const labels = allHoldings.map((subArray)=> subArray["name"]);
    
    const data = {
        labels,
        datasets: [
            {
                label: 'Stock Price',
                data: allHoldings.map((stock) => stock.price ),
                backgroundColor: 'rgba(255, 61, 103, 0.5)',
            }
        ]
    };

    const isTotalProfit = totalProfitLoss >= 0;
    const totalProfClass = isTotalProfit ? "profit" : "loss";

    return ( 
        <>
            <h3 className='title'>Holdings ({allHoldings.length})</h3>

            <div className='order-table'>
                <table>
                    <tr>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Avg. cost</th>
                        <th>LTP</th>
                        <th>Cur. val</th>
                        <th>P&L</th>
                        <th>Net chg.</th>
                        <th>Day chg.</th>
                    </tr>

                    {allHoldings.map((stock, index)=>{
                        const curValue = stock.price * stock.qty;
                        const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                        const profClass = isProfit ? "profit" : "loss";
                        const isDayLoss = parseFloat(stock.day) < 0;    
                        const dayClass = isDayLoss ? "loss" : "profit";

                        return (
                            <tr key={index}>
                                <td>{stock.name}</td>
                                <td>{stock.qty}.</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td>{curValue.toFixed(2)}</td>
                                <td className={profClass}>
                                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                                </td>
                                <td className={profClass}>{stock.net}</td>
                                <td className={dayClass}>{stock.day}</td>
                            </tr>
                        )
                    })}
                </table>

                <div className='row'>
                <div className='col'>
                    <h5>
                        {totalInvestment.toFixed(2)}
                    </h5>
                    <p>Total Investment</p>
                </div>
                <div className='col'>
                    <h5 className={totalProfClass}>
                        {totalProfitLoss.toFixed(2)}
                        </h5>
                        <p>Total Profit</p>
                </div>
            </div>
            </div>

            <VerticalGraph data={data} />
        </>

    );
}

export default Holdings;