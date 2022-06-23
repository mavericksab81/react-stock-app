import React, { FC } from 'react';
import '../CompanyPage/CompanyPage.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ICompany } from '../../../models/company';


export const CompanyAboutPage: FC<ICompany> = ({ companyInfo }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ borderRadius: '6px', padding: '24px', border:'1px solid #fff !important', boxShadow: '0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)', gap: '30px'  }}>
          <div className="header-row">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginTop: '0' }}>
                {/* <span className='label-desc-color'><strong>About the company</strong></span> */}
                {/* <p className='label-desc-color' style={{ textAlign: 'justify', letterSpacing: '0.5px', fontSize: '14px', marginTop: '10px' }}>Tata Motors Limited is an Indian multinational automotive manufacturing company, headquartered in the city of Mumbai, India which is part of Tata Group. Formerly known as Tata Engineering and Locomotive Company (TELCO), the company was founded in 1945 as a manufacturer of locomotives.
                The company manufactured its first commercial vehicle in 1954 in a collaboration with Daimler-Benz AG, which ended in 1969.
                Tata Motors entered the passenger vehicle market in 1988 with the launch of the TataMobile followed by the Tata Sierra in 1991, 
                becoming the first Indian manufacturer to achieve the capability of developing a competitive indigenous automobile.
                In 1998, Tata launched the first fully indigenous Indian passenger car, the Indica, and in 2008 launched the Tata Nano, the world's most affordable car. 
                Tata Motors acquired the South Korean truck manufacturer Daewoo Commercial Vehicles Company in 2004.
                </p> */}
            </div>
          </div>
          <div className="header-row" style={{ gap: '30px', marginTop: '15px' }}>
            <div className='item-container'>
                <span className='label-desc-color'>Founder</span>
                <div className="company_name_id label-desc-color"><strong>{companyInfo.founder}</strong></div>
            </div>
            <div className='item-container'>
                <span className='label-desc-color'>Founded</span>
                <div className="company_name_id label-desc-color"><strong>{companyInfo.founded}; {2022-1945} years ago.</strong></div>
            </div>
            <div className='item-container'>
                <span className='label-desc-color'>Key Person</span>
                <div className="company_name_id label-desc-color"><strong>{companyInfo.keyPerson}</strong></div>
            </div>
          </div>
          <div className="header-row" style={{ gap: '30px', marginTop: '15px' }}>
            <div className='item-container'>
                <span className='label-desc-color'>Headquarter</span>
                <div className="company_name_id label-desc-color"><strong>{companyInfo.headquarter}</strong></div>
            </div>
            <div className='item-container'>
                <span className='label-desc-color'>Parent</span>
                <div className="company_name_id label-desc-color"><strong>{companyInfo.parent}</strong></div>
            </div>
            <div className='item-container'>
                <span className='label-desc-color'>Division</span>
                <div className="company_name_id label-desc-color"><strong>{companyInfo.division}</strong></div>
            </div>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}