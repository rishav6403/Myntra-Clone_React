import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchingSlice";
import bagSlice from "./bagSlice";


const myntraStore = configureStore({
    reducer :{
        items: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag:bagSlice.reducer,
    }
})

export default myntraStore;