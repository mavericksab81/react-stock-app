import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/auth.actions';
import { StockPage } from '../Stocks/StockPage';
import TabsPage from '../Tabs/TabsPage';
import './HomePage.css';

const getPosts = () => {
    try {
        axios.get('http://localhost:4000/api/users', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic2FieWEuc2FjaGk4Nzg5QGdtYWlsLmNvbSIsImNyZWF0ZWQiOiJUaHUgSnVuIDE2IDIwMjIgMjA6MTM6NDQgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpIiwiZXhwaXJlc0luIjoiMWgiLCJpYXQiOjE2NTUzOTA2MjR9.ebJIwBmE_dOgNpd2zQMUJ2EeUWlDuPaEaZEI8sqFBH8'
            }
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    } catch (error) {
        console.error(error);
    }
}

const HomePage = () => {
    const {currentUser} = useSelector((state: any) => state.auth);
    console.log(currentUser);
    useEffect(() => {
        try {
            axios.get('http://localhost:4000/api/users', {
                headers: {
                    'Authorization': `Bearer ${currentUser.token}`
                }
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        } catch (error) {
            console.error(error);
        }
        return () => {
            
        };
    }, [])
    const { username } = useSelector((state: any) => state.auth.currentUser);
    const dispatch: any = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }
    const tabDetails = [
        {key: 'overview', name: 'Overview'},
        {key: 'chart', name: 'Charts'},
        {key: 'analysis', name: 'Analysis'}
    ]

    return (
        <div style={{padding: '0 60px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '15px'}}>
                <h3>Welcome, {username}</h3>
                <Button variant="contained" className='btn-home' onClick={handleLogout}>Logout</Button>
            </div>
            {/* <Counter /> */}
            {/* <Async promiseFn={getPosts}>
                <Async.Pending>Loading...</Async.Pending>
                <Async.Rejected>
                    {(error) => `Error: ${error.message}`}
                </Async.Rejected>
                <Async.Fulfilled>
                    {(data) => JSON.stringify(data, null, 2)}
                </Async.Fulfilled>
            </Async> */}
            {/* <TabsPage /> */}
            {/* {tabDetails.map((tabDetail, index) => (
                <TabsPage tabDetail={tabDetail} index={index} />
            ))} */}
            <TabsPage />
        </div>
        
    )
}

export default HomePage;
