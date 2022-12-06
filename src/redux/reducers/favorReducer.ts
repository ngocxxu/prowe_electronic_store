import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavor } from 'src/types/GeneralTypes';

interface InitialStateProduct {
  dataFavor: IFavor;
}

const initialState: InitialStateProduct = {
  dataFavor: {
    idFavor: '',
    favorItems: [],
  },
};

const favorReducer = createSlice({
  name: 'favorReducer',
  initialState,
  reducers: {
    getFavorApiAction: (state, action: PayloadAction<IFavor>) => {
      state.dataFavor = action.payload;
    },
  },
});

export const { getFavorApiAction } = favorReducer.actions;

export default favorReducer.reducer;
