import React, { useState, useContext } from 'react';

import { Tooltip } from '@mui/material';
import { Grow } from '@mui/material';

import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { watchlist } from '../Data/data.js';
import GeneralContext from "./GeneralContext";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { DoughnutChart } from './DoughnutChart.js';


const labels = watchlist.map((subArray) => subArray["name"]);

function WatchList() {
    //DoughnutChart.
    const data = {
        labels,
        datasets: [
            {
                label: 'Price',
                data: watchlist.map((stock)=> stock.price),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
        }
    ]
    }; 

    return ( 
        <div className='watchlist-container'>
            <div className='search-container'>
                <input 
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Search eg:infy, bse, nifty fut weekly, gold mcx'
                    className='search'
                />
                <span className='counts'>{watchlist.length} / 50</span>
            </div>

            <ul className='list'>
                {watchlist.map((stock, index)=> {
                    return (
                    <WatchListItem stock={stock} key={index} />
                )})}
            </ul>

            <DoughnutChart data={data} />
        </div>
    );
}

export default WatchList;


//
    const WatchListItem = ({stock}) => {
    const [showWatchListActions, setShowWAtchListActions] = useState(false);

    const handleMouseEnter = (e) => {
        setShowWAtchListActions(true);
    };

    const handleMouseLeave = (e) => {
        setShowWAtchListActions(false);
    };

    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='item'>
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className='item-info'>
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown ? (
                        < KeyboardDoubleArrowDownIcon className='down' />
                    ) : ( 
                        <  KeyboardDoubleArrowUpIcon className='up' />
                            ) }
                    <span className='price'>{stock.price}</span>
                </div>
            </div>
            { showWatchListActions && < WatchListActions uid={stock.name} />}
        </li>
    );
 };

const WatchListActions = ({uid}) => {

    const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openBuyWindow(uid);
  };

    return (
        <span className='actions'>
            <span>
                <Tooltip 
                    title="Buy"
                    placement="top"
                    arrow
                    Transition={Grow}
                    onClick={handleBuyClick}
                >
                    <button className='buy'>Buy</button>
                </Tooltip>

                <Tooltip 
                    title="Sell"
                    placement="top"
                    arrow
                    Transition={Grow}
                    onClick={handleSellClick}
                >
                    <button className='sell'>Sell</button>
                </Tooltip>
                <Tooltip 
                    title="Analytics"
                    placement="top"
                    arrow
                    Transition={Grow}
                >
                    <button className='action'>
                        <BarChartIcon  className='icon' />
                    </button>
                </Tooltip>
                <Tooltip 
                    title="More"
                    placement="top"
                    arrow
                    Transition={Grow}
                >
                    <button className='action'>
                        <MoreHorizIcon className='icon'/>
                    </button>
                </Tooltip>
            </span>
        </span>
    )
 };