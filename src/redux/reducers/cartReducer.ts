import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart } from 'src/types/GeneralTypes';

interface InitialStateProduct {
  dataCart: ICart;
}

const initialState: InitialStateProduct = {
  dataCart: {
    idCart: '',
    totalItems: 0,
    subTotal: 0,
    lineItems: [],
    discount: [], 
  },
};

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    getCartApiAction: (state, action: PayloadAction<ICart>) => {
      state.dataCart = action.payload;
    },
  },
});

export const { getCartApiAction } = cartReducer.actions;

export default cartReducer.reducer;
