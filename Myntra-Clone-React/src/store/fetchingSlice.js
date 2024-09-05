import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
       state.fetchDone = true;
    },
    markFetchStart: (state) => {
      state.currentlyFetching = true;
    },
    markFetchFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});
export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
