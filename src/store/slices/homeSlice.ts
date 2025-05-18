import { createSlice } from "@reduxjs/toolkit";

interface IHomeSlice {
    id: string;
    defaultKey: string;
    configKey: { [key: string]: string }[]
}
const initialState: IHomeSlice = {
    id:'',
    defaultKey: '',
    configKey: []
}


const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {}
})

export default HomeSlice.reducer;
