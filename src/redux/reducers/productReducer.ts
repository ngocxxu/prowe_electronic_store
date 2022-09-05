import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductAPI } from 'src/types/GeneralTypes';

interface InitialStateProduct {
  dataAllProducts: IProductAPI[];
}

const initialState: InitialStateProduct = {
  dataAllProducts: [
    {
      _id: '630993fb7bf16e2b4d5cff9c',
      name: 'Xiaomi Poco F4',
      description:
        'Flagship 4nm Snapdragon® 8 Gen 1 Smart 120W HyperCharge 120Hz flat AMOLED display',
      price: {
        raw: 650,
      },
      categories: ['Mobiles', 'Tablets'],
      inventory: 30,
      sale: 0,
      is: {
        hot: false,
        new: false,
        sale: false,
        available: false,
      },
      image: {
        main: 'https://specs-tech.com/wp-content/uploads/2021/07/Xiaomi-Poco-F4-2.jpg',
        library: [
          'https://specs-tech.com/wp-content/uploads/2021/07/Xiaomi-Poco-F4-2.jpg',
          'https://m.media-amazon.com/images/I/41T92QRpW-L._AC_SL1001_.jpg',
          'https://m.media-amazon.com/images/I/51Jd+uGiZBL._AC_SL1001_.jpg',
          'https://m.media-amazon.com/images/I/61qC7BIjHiL._AC_SL1001_.jpg',
        ],
      },
    },
  ],
};

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getAllProductsApiAction: (state, action: PayloadAction<IProductAPI[]>) => {
      state.dataAllProducts = action.payload;
    },
  },
});

export const { getAllProductsApiAction } = productReducer.actions;

export default productReducer.reducer;
