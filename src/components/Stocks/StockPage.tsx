import { Container } from '@mui/material';
import React, { useState } from 'react';
import { ICompanyDetails } from '../../models/company-details';
import NavbarPage from '../NavbarPage/NavbarPage';
import { CompanyPage } from './CompanyPage/CompanyPage';
import StockIndices from './StockIndices/StockIndices';
import './StockPage.css';

export const StockPage = () => {

  const [companyInfo, setCompanyInfo] = useState<ICompanyDetails>({
    name: 'Tata Motors Ltd.',
    companyUrl: 'tatamotors.com',
    bseId: '500570',
    nseId: 'TATAMOTORS',
    about: `Tata Motors Group is a leading global automobile manufacturer. Part of the illustrious multi-national conglomerate, the Tata group, it offers a wide and diverse portfolio of cars, sports utility vehicles, trucks, buses and defence vehicles to the world.
            It has operations in India, the UK, South Korea, South Africa, China, Brazil, Austria and Slovakia through a strong global network of subsidiaries, associate companies and Joint Ventures (JVs), including Jaguar Land Rover in the UK and Tata Daewoo in South Korea. [1]`,
    marketCap: '151,998',
    stockPE: 30,
    currentPrice:  425,
    bookValue: 135,
    stockROE: -22.9,
    stockROCE: 5.82,
    faceValue: 2.00,
    dividendYield: 0.00,
    highPrice: 537,
    lowPrice: 268,
    lastPrice:  425,
    sector: 'Auto - LCVs & HCVs',
    founder: 'Jehangir Ratanji Dadabhoy Tata',
    keyPerson: 'Natarajan Chandrasekaran',
    headquarter: 'Mumbai, Maharashtra',
    founded: 1945,
    parent: 'Tata Group',
    division: 'Tata Motor Cars'
  });



  return (
    <>
      <NavbarPage />
      <div className='flex flex-col'>
        <div style={{ margin: '20px 0px 0px 0px', width: '100%' }}>
          <StockIndices />
        </div>
      </div>
      <Container style={{ maxWidth: '90vw !important', transform: 'translate(10px, 100px)', backgroundColor: 'rgb(0, 30, 60)', paddingLeft: '0' }}>
          <CompanyPage companyInfo={companyInfo} />
      </Container>
    </>
  )
};