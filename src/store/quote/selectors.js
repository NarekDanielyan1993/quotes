import { createSelector } from '@reduxjs/toolkit';

export const quotesDataSelector = createSelector(state => state.quotesData, a => a);