import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './TabsPage.css';
import { CompanyAboutPage } from '../Stocks/CompanyAbout/CompanyAboutPage';
import { CompanyOverviewPage } from '../Stocks/CompanyOverview/CompanyOverviewPage';
import CompanyChartPage from '../Stocks/CompanyCharts/CompanyChartPage';
import { ICompanyDetails } from '../../models/company-details';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      style={{ padding: '24px 0 !important'}}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsPage() {
  const [value, setValue] = React.useState(0);
  const tabs = [
    {
      name: 'About',
      href: '/about'
    },
    {
        name: 'Overview',
        href: '/overview'
    },
    {
        name: 'Chart',
        href: '/chart'
    },
    {
        name: 'Ratios',
        href: '/ratios'
    },
    {
        name: 'Investors',
        href: '/investors'
    },
    {
        name: 'Balance Sheet',
        href: '/balance-sheet'
    },
    {
        name: 'Profit & Loss',
        href: '/profit-loss'
    },
    {
        name: 'Technicals',
        href: '/technicals'
    },
    {
        name: 'Peers',
        href: '/peers'
    },
    {
        name: 'Quarters',
        href: '/quarters'
    },
    {
        name: 'News',
        href: '/news'
    },
    {
      name: 'Documents',
      href: '/documents'
  },
  ]
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

  const [priceVolData, setPriceVolData] = useState<any>([]);

  useEffect(() => {
    fetch('./tata_power_historical_data.json', {
        method: 'GET',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then((response) => {
            return response.json();
        })
        .then(data => {
          
          data.body.prices.forEach((element: any) => {
            priceVolData.push({
              date: element['Date'],
              // high: element['High Price'],
              // low: element['Low Price']
              vol: element['Volume']
            })
          });
        });
        console.log(priceVolData);
  }, [priceVolData])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '24px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabs.map((tab, index) => (
              <Tab key={tab.name} label={tab.name} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {value === 0 ? <CompanyAboutPage companyInfo={companyInfo}  /> : ''}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {value === 1 ? <CompanyOverviewPage companyInfo={companyInfo}  /> : ''}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {value === 2 ? <CompanyChartPage priceVolData={priceVolData} /> : ''}
      </TabPanel>
    </Box>
  );
}