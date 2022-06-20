import { Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/auth.actions';
import Counter from '../Counter/Counter';

const HomePage = () => {
    const { username } = useSelector((state: any) => state.auth.currentUser);
    useSelector((state: any) => console.log(state));
    const dispatch: any = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '15px'}}>
                <h3>Welcome, {username}</h3>
                <Button variant="contained" onClick={handleLogout} style={{height: '35px'}}>Logout</Button>
            </div>
            <Counter />
        </>
        
    )
}

export default HomePage;
