import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig: any = {
    key: 'main-root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

const Persistor = persistStore(store);

export { Persistor };
export default store;