import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavor } from 'src/types/GeneralTypes';

interface InitialStateProduct {
  dataFavor: IFavor;
  isLoadingFavourButton: boolean;
  favourId: string;
  isClearAllFavour: boolean;
}

const initialState: InitialStateProduct = {
  dataFavor: {
    idFavor: '',
    favorItems: [],
  },
  isLoadingFavourButton: false,
  favourId: '',
  isClearAllFavour: false,
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
    setFavourId: (state, action) => {
      state.favourId = action.payload;
    },
    toggleClearAllFavour: (state, action) => {
      state.isClearAllFavour = action.payload;
    },
  },
});

export const {
  getFavorApiAction,
  toggleLoadingFavourButton,
  setFavourId,
  toggleClearAllFavour,
} = favorReducer.actions;

export default favorReducer.reducer;
