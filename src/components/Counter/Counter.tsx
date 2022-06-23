import { Button } from '@mui/material'
import React, { useReducer, useRef, useEffect } from 'react';

const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'start':
        return { ...state, isRunning: true };
      case 'stop':
        return { ...state, isRunning: false };
      case 'reset':
        return { isRunning: false, time: 0 };
      case 'tick':
        return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  }

const Counter = () => {
    const initialState = {
        isRunning: false,
        time: 0
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const idRef: any = useRef(0);

    useEffect(() => {
        if (!state.isRunning) {
          // console.log("useEffect executed (component mounted)");
          return;
        }
        idRef.current = setInterval(() => dispatch({ type: 'tick' }), 1000);
        return () => {
        clearInterval(idRef.current);
        // console.log("useEffect executed (component un-mounted)")
        idRef.current = 0;
        };
    }, [state.isRunning]);

    return (
        <>
        <h4 style={{display: 'flex', width: '100%', justifyContent: 'center', placeContent: 'center', gap: '20px'}}>
            Timer: {state.time}s
        </h4>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center', placeContent: 'center', gap: '20px'}}>
            <Button variant="contained" onClick={() => dispatch({ type: 'start' })} >Start</Button>
            <Button variant="contained" onClick={() => dispatch({ type: 'stop' })} >Stop</Button>
            <Button variant="contained" onClick={() => dispatch({ type: 'reset' })} >Reset</Button>
        </div>
        </>    
    )
}

export default Counter
