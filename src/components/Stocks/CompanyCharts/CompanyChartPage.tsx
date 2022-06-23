import { CssBaseline, Box, Container } from '@mui/material';

import React from 'react';
import { BarChart, Line, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, CartesianGrid, ComposedChart } from 'recharts';

function CompanyChartPage(priceVolData: any) {
    console.log(priceVolData)
	const width: number = 1600;
	const data = [
		{
		  name: "Page A",
		  uv: 4000,
		  pv: 2400,
		  amt: 2400
		},
		{
		  name: "Page B",
		  uv: 3000,
		  pv: 1398,
		  amt: 2210
		},
		{
		  name: "Page C",
		  uv: 2000,
		  pv: 9800,
		  amt: 2290
		},
		{
		  name: "Page D",
		  uv: 2780,
		  pv: 3908,
		  amt: 2000
		},
		{
		  name: "Page E",
		  uv: 1890,
		  pv: 4800,
		  amt: 2181
		},
		{
		  name: "Page F",
		  uv: 2390,
		  pv: 3800,
		  amt: 2500
		},
		{
		  name: "Page G",
		  uv: 3490,
		  pv: 4300,
		  amt: 2100
		}
	  ];
  return (
    <>
      <CssBaseline />
      <ResponsiveContainer width="100%" height="100%">
        <Box>
			<ComposedChart
				width={width}
				height={500}
				data={priceVolData['priceVolData']}
				margin={{
					top: 5,
					right: 0,
					left: 30,
					bottom: 5,
				}}
			>
				{/* <CartesianGrid strokeDasharray="3 3" /> */}
				<CartesianGrid stroke="#f5f5f5" />
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip />
				<Legend />
				{/* <Bar dataKey="low" stackId="a" fill="red" /> */}
				{/* <Bar dataKey="vol" stackId="a" fill="#82ca9d" /> */}
				<Bar dataKey="vol" stackId="a" barSize={20} fill="#413ea0" />
          		<Line type="monotone" dataKey="vol" stroke="#ff7300" activeDot={{ r: 8 }} />
			</ComposedChart>
        </Box>
      </ResponsiveContainer>
    </>
  )
}

export default CompanyChartPage