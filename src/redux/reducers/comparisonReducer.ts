import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComparison } from 'src/types/GeneralTypes';

interface InitialStateProduct {
  dataComparison: IComparison;
  isLoadingComparisonButton: boolean;
  comparisonId: string;
  isClearAllComparison: boolean;
}

const initialState: InitialStateProduct = {
  dataComparison: {
    comparisonItems: [],
  },
  isLoadingComparisonButton: false,
  comparisonId: '',
  isClearAllComparison: false,
};

const comparisonReducer = createSlice({
  name: 'comparisonReducer',
  initialState,
  reducers: {
    getComparisonApiAction: (state, action: PayloadAction<IComparison>) => {
      state.dataComparison = action.payload;
    },
    toggleLoadingComparisonButton: (state, action) => {
      state.isLoadingComparisonButton = action.payload;
    },
    setComparisonId: (state, action) => {
      state.comparisonId = action.payload;
    },
    toggleClearAllComparison: (state, action) => {
      state.isClearAllComparison = action.payload;
    },
  },
});

export const {
  getComparisonApiAction,
  toggleLoadingComparisonButton,
  setComparisonId,
  toggleClearAllComparison,
} = comparisonReducer.actions;

export default comparisonReducer.reducer;
