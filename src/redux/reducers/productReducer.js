// import {
//   SORT_PRODUCT,
// } from '../const';

const initialState = {
  // dataProductList: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SORT_PRODUCT:
    //   state.dataProductList = action.payload;
    //   return { ...state };

    default:
      return state;
  }
};
