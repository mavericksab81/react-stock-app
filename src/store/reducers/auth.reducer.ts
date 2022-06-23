import { REHYDRATE } from "redux-persist"
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions/auth.actions"

const initialState = {
    currentUser: null,
    isLoggingIn: false,
    message: null
}

const authReducer = (state: any = initialState, action: any) => {
    switch(action.type) {
        case REHYDRATE: {
            return {
                ...state,
                currentUser: action.payload?.currentUser,
                message: action.payload?.message,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state, 
                currentUser: action.payload.currentUser,
                message: action.payload?.message,
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                currentUser: null,
                message: action.payload?.message
            }
        }
        case LOGOUT: {
            return {
                ...state,
                currentUser: null,
                message: null
            }
        }
        default: {
            return state;
        }
    }
}

export default authReducer;