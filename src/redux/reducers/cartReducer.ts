import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart, TCheckoutFormValues } from 'src/types/GeneralTypes';

interface InitialStateProduct {
  dataCart: ICart;
  dataFormCheckout: TCheckoutFormValues;
  isLoadingButton: boolean;
  isClearAllCart: boolean;
  productId: string;
}

export const DataFormCheckout = {
  country: '',
  name: '',
  address: '',
  apartment: '',
  city: '',
  zip: '',
  shippingMethod: '',
  cardNumber: '',
  expYear: '',
  expMonth: '',
  CVCAndCVV: '',
};

const initialState: InitialStateProduct = {
  dataCart: {
    idCart: '',
    totalItems: 0,
    subTotal: 0,
    lineItems: [],
    discount: [],
  },
  dataFormCheckout: DataFormCheckout,
  isLoadingButton: false,
  productId: '',
  isClearAllCart: false,
};

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    getCartApiAction: (state, action: PayloadAction<ICart>) => {
      state.dataCart = action.payload;
    },
    getDataFormCheckoutApiAction: (
      state,
      action: PayloadAction<TCheckoutFormValues>
    ) => {
      state.dataFormCheckout = action.payload;
    },
    toggleLoadingButton: (state, action) => {
      state.isLoadingButton = action.payload;
    },
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
    toggleClearAllCart: (state, action) => {
      state.isClearAllCart = action.payload;
    },
  },
});

export const {
  getCartApiAction,
  getDataFormCheckoutApiAction,
  toggleLoadingButton,
  setProductId,
  toggleClearAllCart,
} = cartReducer.actions;

export default cartReducer.reducer;
