import React, { useEffect, useState } from 'react'
import { Navbar, Container } from 'react-bootstrap'

function StockIndices() {
  const [indices, setIndices] = useState<any>({
    sensex: '',
    nifty50: {},
    bankNifty: '',
    niftyIt: ''
  });
  useEffect(() => {
    fetch('./all_indices.json', {
        method: 'GET',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            const res = myJson.body.data.filter((item: any) => item.index === 'NIFTY 50' || item.index === 'NIFTY BANK' || item.index === 'NIFTY IT')
            // console.log(res)
            setIndices({
                sensex: '',
                nifty50: res[0],
                bankNifty: res[1],
                niftyIt: res[2]
            })
        });
  }, [])
  return (
    <>
        <Navbar bg="blue">
            <Container style={{transform: 'none'}}>
                <Navbar.Brand style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <span className="indices-label">
                        SENSEX {indices.sensex.index}{'  '}
                        <span style={{backgroundColor: indices.nifty50.percentChange > 0 ? 'springgreen' : 'red', padding: '5px', fontWeight: 'bold'}}>{indices.nifty50.last}</span>{'  '}
                        <span style={{color: indices.nifty50.percentChange > 0 ? 'springgreen' : 'red'}}>
                            {indices.nifty50.variation > 0 ? '+' : ''}{indices.nifty50.variation}{'  '}
                            ({indices.nifty50.percentChange > 0 ? '+' : ''}{indices.nifty50.percentChange}%)
                        </span>
                    </span>
                    <span className="indices-label">
                        {indices.nifty50.index}{'  '}
                        <span style={{backgroundColor: indices.nifty50.percentChange > 0 ? 'springgreen' : 'red', padding: '5px', fontWeight: 'bold'}}>{indices.nifty50.last}</span>{'  '}
                        <span style={{color: indices.nifty50.percentChange > 0 ? 'springgreen' : 'red'}}>
                            {indices.nifty50.variation > 0 ? '+' : ''}{indices.nifty50.variation}{'  '}
                            ({indices.nifty50.percentChange > 0 ? '+' : ''}{indices.nifty50.percentChange}%)
                        </span>
                    </span>
                    <span className="indices-label">
                        {indices.bankNifty.index}{'  '}
                        <span style={{backgroundColor: indices.bankNifty.percentChange > 0 ? 'springgreen' : 'red', padding: '5px', fontWeight: 'bold'}}>{indices.bankNifty.last}</span>{'  '}
                        <span style={{color: indices.bankNifty.percentChange > 0 ? 'springgreen' : 'red'}}>
                            {indices.bankNifty.variation > 0 ? '+' : ''}{indices.bankNifty.variation}{'  '}
                            ({indices.bankNifty.percentChange > 0 ? '+' : ''}{indices.bankNifty.percentChange}%)
                        </span>
                    </span>
                    <span className="indices-label">
                        {indices.niftyIt.index}{'  '}
                        <span style={{backgroundColor: indices.niftyIt.percentChange > 0 ? 'springgreen' : 'red', padding: '5px', fontWeight: 'bold'}}>{indices.niftyIt.last}</span>{'  '}
                        <span style={{color: indices.niftyIt.percentChange > 0 ? 'springgreen' : 'red'}}>
                            {indices.niftyIt.variation > 0 ? '+' : ''}{indices.niftyIt.variation}{'  '}
                            ({indices.niftyIt.percentChange > 0 ? '+' : ''}{indices.niftyIt.percentChange}%)
                        </span>
                    </span>
                </Navbar.Brand>
            </Container >
        </Navbar>
    </>
  )
}

export default StockIndices