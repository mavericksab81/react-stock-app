import React, { FC } from 'react';
import './CompanyPage.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Link } from '@mui/material';
import TabsPage from '../../Tabs/TabsPage';
import { ICompany } from '../../../models/company';


export const CompanyPage: FC<ICompany> = ({ companyInfo }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ padding: '0', marginLeft: '0', marginRight: '0'}}>
        <Box sx={{ borderRadius: '6px', padding: '24px', border:'1px solid #1877f2', boxShadow: '0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)', gap: '30px'  }}>
            <div className="header-row">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: '30px' }}>
                    <h1 className='label-desc-color' style={{ fontSize: '4rem', lineHeight: '1.225', letterSpacing: '-0.022em' }}>{companyInfo.name}</h1>
                    <div className="company_name_price label-desc-color"> ₹ {companyInfo.lastPrice}</div>
                </div>
                <div>
                    <Button variant="outlined">Follow</Button>
                </div>
            </div>
            <div className="header-row">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: '30px' }}>
                    <span className='label-desc-color'>Sector: <strong>{companyInfo.sector}</strong></span>
                    <Link href="#" underline="none" className="company_name_url">{companyInfo.companyUrl}</Link>
                    <span className='label-desc-color'>BSE: <strong>{companyInfo.bseId}</strong></span>
                    <span className='label-desc-color'>NSE: <strong>{companyInfo.nseId}</strong></span>
                </div>
            </div>
        </Box>
        <TabsPage />
      </Container>
    </React.Fragment>
  );
}