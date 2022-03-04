import { createSlice } from '@reduxjs/toolkit';

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        isFetched: false,
        quotes: [],

    },
    reducers: {
        onGetQuotes: state => {
            state.isLoading = true;
        },
        onSuccessQuotes: (state, { payload }) => {
            state.isLoading = false;
            state.quotes = payload.quotes;
        },
        onFailedQuotes: state => {
            state.isLoading = false;
            state.users = [];
        }
    }
});

export const {
    onGetQuotes,
    onSuccessQuotes,
    onFailedQuotes
} = quotesSlice.actions;

export default quotesSlice.reducer;