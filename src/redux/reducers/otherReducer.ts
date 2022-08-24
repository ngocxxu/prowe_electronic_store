//rxslice
import { createSlice } from '@reduxjs/toolkit';
import { OtherState } from 'src/types/GeneralTypes';

const initialState: OtherState = {
  activeStep: 0,
  isDrawer: false,
};

const otherReducer = createSlice({
  name: 'otherReducer/updateActiveStepAction', //ten reducer/actioname
  initialState, //giá trị mặc định của reducer (stateDefault)
  reducers: {
    updateActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
    toggleDrawer: (state, action) => {
      state.isDrawer = action.payload;
    },
  },
});

export const { updateActiveStep, toggleDrawer } = otherReducer.actions;

export default otherReducer.reducer;
