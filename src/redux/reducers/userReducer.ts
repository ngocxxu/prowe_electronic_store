//rxslice
import { createSlice } from '@reduxjs/toolkit';
import { UserState } from 'src/types/GeneralTypes';

const initialState: UserState = {
  myInfo: {
    _id: '',
    email: '',
    password: '',
    idCart: '',
    idFavor: '',
    isAdmin: false,
  },
};

const userReducer = createSlice({
  name: 'userReducer/user', //ten reducer/actioname
  initialState, //giá trị mặc định của reducer (stateDefault)
  reducers: {
    getMyInfo: (state, action) => {
      state.myInfo = action.payload;
    },
  },
});

export const { getMyInfo } =
  userReducer.actions;

export default userReducer.reducer;
