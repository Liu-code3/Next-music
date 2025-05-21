import {configureStore} from "@reduxjs/toolkit";
import homeReducer from './slices/homeSlice'
import { homeApi } from './services/homeApi'

const rootReducer = {
    home: homeReducer,
    [homeApi.reducerPath]: homeApi.reducer, // 添加 RTK Query reducer
}

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(homeApi.middleware),  // 添加 RTK Query 中间件
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
