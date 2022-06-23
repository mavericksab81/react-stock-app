import axios from "axios";
import { history } from "../../helpers/history";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGOUT = 'LOGOUT';


const login = (data: any) => (dispatch: any) => {
    const { email, password} = data;
    axios.post('http://localhost:4000/api/login', { email, password })
    .then(response => {
        if (response.data.status === 200) {
            dispatch({ type: LOGIN_SUCCESS, payload: { currentUser: response.data.user , message: response.data.message } });
            history.push('/home');
        } else {
            dispatch({ type: LOGIN_FAILURE, payload: { message : response.data.message } })
        }
    }).catch((error: any) => {
        dispatch({ type: LOGIN_FAILURE, error  })
    });
}

const createUser = (data: any) => (dispatch: any) => {
    const { email, username, password} = data;
    axios.post('http://localhost:4000/api/signup', { email, username, password })
    .then(response => {
        if (response.data.status === 201) {
            dispatch({ type: REGISTER_SUCCESS, payload: { currentUser: response.data.user } });
            history.push('/home');
        } else {
            dispatch({ type: REGISTER_FAILURE, payload: { message : response.data.message } })
        }
    }).catch((error: any) => {
        dispatch({ type: REGISTER_FAILURE, error  })
    });
}

const logout = () => (dispatch: any) => {
    localStorage.clear();
    dispatch({ type: LOGOUT, payload: { currentUser: null, message : 'User logged out.' } })
    history.push('/');
}

export {
    login,
    createUser,
    logout
}