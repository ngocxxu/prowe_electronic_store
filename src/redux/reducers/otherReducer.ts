//rxslice
import { createSlice } from '@reduxjs/toolkit';
import { OtherState } from 'src/types/GeneralTypes';

const initialState: OtherState = {
  activeStep: 0,
};

const otherReducer = createSlice({
  name: 'otherReducer/updateActiveStepAction', //ten reducer/actioname
  initialState, //giá trị mặc định của reducer (stateDefault)
  reducers: {
    updateActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
  },
});

export const { updateActiveStep } = otherReducer.actions;

export default otherReducer.reducer;
