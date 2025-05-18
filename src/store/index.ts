import {configureStore} from "@reduxjs/toolkit";
import homeReducer from './slices/homeSlice'

const rootReducer = {
    home: homeReducer,
}

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
