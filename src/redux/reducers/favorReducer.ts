import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavor } from 'src/types/GeneralTypes';

interface InitialStateProduct {
  dataFavor: IFavor;
  isLoadingFavourButton: boolean;
}

const initialState: InitialStateProduct = {
  dataFavor: {
    idFavor: '',
    favorItems: [],
  },
  isLoadingFavourButton: false,
};

const favorReducer = createSlice({
  name: 'favorReducer',
  initialState,
  reducers: {
    getFavorApiAction: (state, action: PayloadAction<IFavor>) => {
      state.dataFavor = action.payload;
    },
    toggleLoadingFavourButton: (state, action) => {
      state.isLoadingFavourButton = action.payload;
    },
  },
});

export const { getFavorApiAction, toggleLoadingFavourButton } =
  favorReducer.actions;

export default favorReducer.reducer;
