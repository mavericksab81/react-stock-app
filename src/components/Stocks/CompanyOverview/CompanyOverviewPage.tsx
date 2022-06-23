import React, { FC } from 'react';
import '../CompanyPage/CompanyPage.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Modal, Typography } from '@mui/material';
import { ICompany } from '../../../models/company';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#1877f2 !important',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '6px',
  p: 4,
};

export const CompanyOverviewPage: FC<ICompany> = ({ companyInfo }) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ borderRadius: '6px', padding: '24px', border:'1px solid #fff !important', boxShadow: '0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06)', gap: '30px'  }}>
          <div className="header-row">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginTop: '0px' }}>
                <h4 className='label-desc-color'><strong>Financials overview</strong></h4>
            </div>
            <div>
              <Button variant="outlined" style={{color: '#1877f2 !important', border: '1px solid #1877f2'}} onClick={handleOpen}>Add Ratios</Button>
            </div>
          </div>
          <div className="header-row" style={{ gap: '30px', marginTop: '15px' }}>
            <div className='item-container p-10'>
                <span className='label-desc-color'>Market Cap.</span>
                <div className="company_name_id label-desc-color"><strong>₹ {companyInfo.marketCap} Cr.</strong></div>
            </div>
            <div className='item-container p-10'>
                <span className='label-desc-color'>Current Price</span>
                <div className="company_name_id label-desc-color"><strong>₹ {companyInfo.currentPrice}</strong></div>
            </div>
            <div className='item-container p-10'>
              <span className='label-desc-color'>High / Low</span>
              <div className="company_name_id label-desc-color"><strong>₹ {companyInfo.highPrice} / {companyInfo.lowPrice}</strong></div>
            </div>
          </div>
          <div className="header-row" style={{ gap: '30px', marginTop: '15px' }}>
            <div className='item-container  p-10' style={{ border: '1px solid #1877f2', borderRadius: '6px' }}>
              <span className='label-def-color'>Stock P/E</span>
              <div className="company_name_id label-def-color"><strong>{companyInfo.stockPE}</strong></div>
            </div>
            <div className='item-container p-10' style={{ border: '1px solid #1877f2', borderRadius: '6px' }}>
                <span className='label-def-color'>Book Value</span>
                <div className="company_name_id label-def-color"><strong>₹ {companyInfo.bookValue}</strong></div>
            </div>
            <div className='item-container p-10' style={{ border: '1px solid #1877f2', borderRadius: '6px' }}>
                <span className='label-def-color'>Dividend Yield</span>
                <div className="company_name_id label-def-color"><strong>{companyInfo.dividendYield} %</strong></div>
            </div>
          </div>
          <div className="header-row" style={{ gap: '30px', marginTop: '15px' }}>
            <div className='item-container p-10'>
              <span className='label-desc-color'>ROCE</span>
              <div className="company_name_id label-desc-color"><strong>{companyInfo.stockROCE} %</strong></div>
            </div>
            <div className='item-container p-10'>
                <span className='label-desc-color'>ROE</span>
                <div className="company_name_id label-desc-color"><strong>{companyInfo.stockROE} %</strong></div>
            </div>
            <div className='item-container p-10'>
                <span className='label-desc-color'>Face Value</span>
                <div className="company_name_id label-desc-color"><strong>₹ {companyInfo.faceValue}</strong></div>
            </div>
          </div>
        </Box>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
}