import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'src/types/GeneralTypes';

interface InitialStateProduct {
  dataAllProducts: IProduct[];
  dataSearchAllProducts: IProduct[];
  dataProduct: IProduct;
  isPendingAllProduct: boolean;
  isPendingProduct: boolean;
}

export const dataProduct = {
  _id: '',
  name: '',
  description: '',
  price: {
    raw: 650,
  },
  categories: ['Mobiles', 'Tablets'],
  inventory: 30,
  sale: 0,
  avgReviews: 0,
  is: {
    hot: false,
    new: false,
    sale: false,
    available: false,
    delete: false,
  },
  image: {
    main: '',
    library: [],
  },
};

const initialState: InitialStateProduct = {
  dataAllProducts: [
    // {
    //   _id: '',
    //   name: '',
    //   description: '',
    //   price: {
    //     raw: 650,
    //   },
    //   categories: ['', ''],
    //   inventory: 30,
    //   sale: 0,
    //   avgReviews: 0,
    //   is: {
    //     hot: false,
    //     new: false,
    //     sale: false,
    //     available: false,
    //     delete: false,
    //   },
    //   image: {
    //     main: 'https://specs-tech.com/wp-content/uploads/2021/07/Xiaomi-Poco-F4-2.jpg',
    //     library: [
    //       'https://specs-tech.com/wp-content/uploads/2021/07/Xiaomi-Poco-F4-2.jpg',
    //       'https://m.media-amazon.com/images/I/41T92QRpW-L._AC_SL1001_.jpg',
    //       'https://m.media-amazon.com/images/I/51Jd+uGiZBL._AC_SL1001_.jpg',
    //       'https://m.media-amazon.com/images/I/61qC7BIjHiL._AC_SL1001_.jpg',
    //     ],
    //   },
    // },
  ],
  dataSearchAllProducts: [],
  dataProduct: dataProduct,
  isPendingAllProduct: false,
  isPendingProduct: false
};

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getAllProductsApiAction: (state, action: PayloadAction<IProduct[]>) => {
      state.dataAllProducts = action.payload;
    },
    getProductApiAction: (state, action: PayloadAction<IProduct>) => {
      state.dataProduct = action.payload;
    },
    togglePendingAllProduct: (state, action) => {
      state.isPendingAllProduct = action.payload;
    },
    togglePendingProduct: (state, action) => {
      state.isPendingAllProduct = action.payload;
    },
    getSearchAllProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.dataSearchAllProducts = action.payload;
    },
  },
});

export const {
  getAllProductsApiAction,
  getProductApiAction,
  togglePendingAllProduct,
  togglePendingProduct,
  getSearchAllProducts
} = productReducer.actions;

export default productReducer.reducer;
