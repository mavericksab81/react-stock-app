import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import authReducer from "./auth.reducer";

const userPersistConfig = {
    key: 'user',
    storage,
    blacklist: ['isLoggingIn']
  }

const rootReducer = combineReducers({
    auth: persistReducer(userPersistConfig, authReducer)
});

export default rootReducer;