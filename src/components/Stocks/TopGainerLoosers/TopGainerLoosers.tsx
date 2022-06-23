import React, { useEffect, useState } from 'react'
import { Card, Tab, Tabs } from 'react-bootstrap'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export const TopGainerLoosers = (props: any) => {
  console.log(props);
  const { data } = props;
  const [rowDataBankNifty] = useState<any>([]);
  const [rowDataNifty50] = useState<any>([]);
  const [rowDataNiftyNext50] = useState<any>([]);
  const rowStyle = { background: 'green' };
  const [key, setKey] = useState('home');

  const [colDefs] = useState<any>([
        { field: 'companyName', sortable: true, filter: true  },
        { field: 'high', sortable: true, filter: true  },
        { field: 'low', sortable: true, filter: true  },
        { field: 'lastPrice', sortable: true, filter: true  },
        { field: 'prevPrice', sortable: true, filter: true  },
        { field: 'perChange', sortable: true, filter: true  }
    ]);

  useEffect(() => {
    data['BANKNIFTY'].data.map((item:any) => {
        return rowDataBankNifty.push({
            companyName: item.symbol,
            high: item.high_price,
            low: item.low_price,
            lastPrice: item.ltp,
            prevPrice: item.prev_price,
            perChange: item.perChange
        });
    });
    data['NIFTY'].data.map((item:any) => {
        return rowDataNifty50.push({
            companyName: item.symbol,
            high: item.high_price,
            low: item.low_price,
            lastPrice: item.ltp,
            prevPrice: item.prev_price,
            perChange: item.perChange
        });
    });
    data['NIFTYNEXT50'].data.map((item:any) => {
        return rowDataNiftyNext50.push({
            companyName: item.symbol,
            high: item.high_price,
            low: item.low_price,
            lastPrice: item.ltp,
            prevPrice: item.prev_price,
            perChange: item.perChange
        });
    });
  }, []);

  const getRowStyle = (params: any) => {
    if (params.node.rowIndex % 2 === 0) {
        return { background: 'red' };
    }
  };

  return (
    <Card style={{ width: '40vw', height: 'auto', borderRadius: '10px', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)' }} className='flex-col'>
        <Card.Body>
            <Card.Title style={{textAlign: 'center', fontWeight: 'bold'}}>{props.header}
            </Card.Title>
            <Card.Text style={{textAlign: 'justify', fontSize: '12px', fontWeight: 500}}></Card.Text>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" activeKey={key}
                onSelect={(k: any) => setKey(k)} className="mb-3">
                <Tab eventKey="home" title="Bank Nifty">
                    <div className="ag-theme-material" style={{height: 300, width: 600}}>
                        {/* <AgGridReact rowData={rowDataBankNifty} columnDefs={colDefs}></AgGridReact> */}
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Nifty 50">
                    <div className="ag-theme-material" style={{height: 300, width: 600}}>
                        {/* <AgGridReact rowData={rowDataNifty50} columnDefs={colDefs}></AgGridReact> */}
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Nifty Next 50">
                    <div className="ag-theme-material" style={{height: 300, width: 600}}>
                        {/* <AgGridReact rowData={rowDataNiftyNext50} columnDefs={colDefs}></AgGridReact> */}
                    </div>
                </Tab>
            </Tabs>
        </Card.Body>
    </Card>
  )
}