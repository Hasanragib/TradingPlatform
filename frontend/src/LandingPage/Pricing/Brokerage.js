import React from 'react';
import { useState, useEffect } from 'react';


const Brokerage = () => {
  const equityData = [
    { "": "Brokerage", "Equity delivery": "Zero Brokerage", "Equity intraday": "0.03% or Rs. 20/executed order whichever is lower", "F&O - Futures": "0.03% or Rs. 20/executed order whichever is lower", "F&O - Options": "Flat Rs. 20 per executed order" },
    { "": "STT/CTT", "Equity delivery": "0.1% on buy & sell", "Equity intraday": "0.025% on the sell side", "F&O - Futures": "0.02% on the sell side", "F&O - Options": "<ul><li>0.125% of the intrinsic value on options that are bought and exercised</li><li>0.1% on sell side (on premium)</li></ul>" },
    { "": "Transaction charges", "Equity delivery": "NSE: 0.00297%<br>BSE: 0.00375%", "Equity intraday": "NSE: 0.00297%<br>BSE: 0.00375%", "F&O - Futures": "NSE: 0.00173%<br>BSE: 0", "F&O - Options": "NSE: 0.03503% (on premium)<br>BSE: 0.0325% (on premium)" },
    { "": "GST", "Equity delivery": "18% on (brokerage + SEBI charges + transaction charges)", "Equity intraday": "18% on (brokerage + SEBI charges + transaction charges)", "F&O - Futures": "18% on (brokerage + SEBI charges + transaction charges)", "F&O - Options": "18% on (brokerage + SEBI charges + transaction charges)" },
    { "": "SEBI charges", "Equity delivery": "₹10 / crore", "Equity intraday": "₹10 / crore", "F&O - Futures": "₹10 / crore", "F&O - Options": "₹10 / crore" },
    { "": "Stamp charges", "Equity delivery": "0.015% or ₹1500 / crore on buy side", "Equity intraday": "0.003% or ₹300 / crore on buy side", "F&O - Futures": "0.002% or ₹200 / crore on buy side", "F&O - Options": "0.003% or ₹300 / crore on buy side" }
  ];

  const currencyData = [
    { "": "Brokerage", "Currency Futures": "0.02% or Rs. 15/executed order whichever is lower", "Currency Options": "Flat Rs. 10 per executed order" },
    { "": "STT", "Currency Futures": "N/A", "Currency Options": "N/A" },
    { "": "Transaction charges", "Currency Futures": "NSE: 0.00090%", "Currency Options": "NSE: 0.00265%" },
    { "": "GST", "Currency Futures": "18% on (brokerage + SEBI charges + transaction charges)", "Currency Options": "18% on (brokerage + SEBI charges + transaction charges)" },
    { "": "SEBI charges", "Currency Futures": "₹10 / crore", "Currency Options": "₹10 / crore" },
    { "": "Stamp charges", "Currency Futures": "₹200 / crore on buy side", "Currency Options": "₹100 / crore on buy side" }
  ];

  const commodityData = [
    { "": "Brokerage", "Commodity Futures": "0.03% or Rs. 20/executed order whichever is lower", "Commodity Options": "Flat Rs. 20 per executed order" },
    { "": "CTT", "Commodity Futures": "0.01% on sell side (Non-Agri)", "Commodity Options": "0.05% on sell side (Non-Agri)" },
    { "": "Transaction charges", "Commodity Futures": "MCX: 0.0026%", "Commodity Options": "MCX: 0.0005%" },
    { "": "GST", "Commodity Futures": "18% on (brokerage + SEBI charges + transaction charges)", "Commodity Options": "18% on (brokerage + SEBI charges + transaction charges)" },
    { "": "SEBI charges", "Commodity Futures": "₹10 / crore", "Commodity Options": "₹10 / crore" },
    { "": "Stamp charges", "Commodity Futures": "₹200 / crore on buy side", "Commodity Options": "₹100 / crore on buy side" }
  ];

  const [activeTab, setActiveTab] = useState('equity');
  const [tableData, setTableData] = useState(equityData);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'equity':
        setTableData(equityData);
        break;
      case 'currency':
        setTableData(currencyData);
        break;
      case 'commodity':
        setTableData(commodityData);
        break;
      default:
        setTableData(equityData);
    }
  };

  const populateTable = () => {
    if (tableData.length === 0) {
      return <tr><td colSpan="5" className="text-center">No data available.</td></tr>;
    }

    const headers = Object.keys(tableData[0]);

    return (
      <>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header} className="text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              {headers.map(header => (
                <td key={header} className='border-0 text-left' dangerouslySetInnerHTML={{ __html: rowData[header] !== undefined ? rowData[header] : '' }} />
              ))}
            </tr>
          ))}
        </tbody>
      </>
    );
  };

  useEffect(() => {
    // Initialize Bootstrap tabs (optional, as data-bs-toggle handles basic behavior)
    const tabElms = document.querySelectorAll('#myTab a');
    tabElms.forEach(tabEl => {
      tabEl.addEventListener('show.bs.tab', (event) => {
        const tab = event.target.id.split('-')[0];   // Get 'equity', 'currency', 'commodity'
        handleTabChange(tab);
      });
    });
  }, []);

  return (
    <div className="container mt-5 mb-5 text-muted">
      <ul className="nav nav-tabs " id="myTab">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'equity' ? 'active' : ''}`}
            id="equity-tab"
            data-bs-toggle="tab"
            href="#equity"
            role="tab"
            aria-controls="equity"
            aria-selected={activeTab === 'equity'}
            onClick={() => handleTabChange('equity')}
            style={{fontSize:'1.3rem', fontWeight:'500'}}
          >
            Equity
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'currency' ? 'active' : ''}`}
            id="currency-tab"
            data-bs-toggle="tab"
            href="#currency"
            role="tab"
            aria-controls="currency"
            aria-selected={activeTab === 'currency'}
            onClick={() => handleTabChange('currency')}
            style={{fontSize:'1.3rem', fontWeight:'500'}}
          >
            Currency
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'commodity' ? 'active' : ''}`}
            id="commodity-tab"
            data-bs-toggle="tab"
            href="#commodity"
            role="tab"
            aria-controls="commodity"
            aria-selected={activeTab === 'commodity'}
            onClick={() => handleTabChange('commodity')}
            style={{fontSize:'1.3rem', fontWeight:'500'}}
          >
            Commodity
          </a>
        </li>
      </ul>

      <div className="tab-content mt-4 text-muted table-responsive-sm" id="myTabContent">
        <div className={`tab-pane fade ${activeTab === 'equity' ? 'show active' : ''}`} id="equity" role="tabpanel" aria-labelledby="equity-tab">
          <div className="table-responsive-sm">
            <table className="table border">
              {populateTable()}
            </table>
          </div>
        </div>
        <div className={`tab-pane fade ${activeTab === 'currency' ? 'show active' : ''}`} id="currency" role="tabpanel" aria-labelledby="currency-tab">
          <div className="table-responsive-sm text-left">
            <table className="table border">
              {populateTable()}
            </table>
          </div>
        </div>
        <div className={`tab-pane fade ${activeTab === 'commodity' ? 'show active' : ''}`} id="commodity" role="tabpanel" aria-labelledby="commodity-tab">
          <div className="table-responsive-sm">
            <table className="table border">
              {populateTable()}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;