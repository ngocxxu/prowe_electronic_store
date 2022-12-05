//rxslice
import { createSlice } from '@reduxjs/toolkit';
import { OtherState } from 'src/types/GeneralTypes';

const initialState: OtherState = {
  activeStep: 0,
  isDrawer: false,
  isOpenModal: false,
  notify: {
    isNotification: false,
    severity: 'info',
    message: '',
  },
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
    toggleNotification: (state, action) => {
      state.notify = action.payload;
    },
    toggleOpenModal: (state, action) => {
      state.isOpenModal = action.payload;
    },
  },
});

export const {
  updateActiveStep,
  toggleDrawer,
  toggleNotification,
  toggleOpenModal,
} = otherReducer.actions;

export default otherReducer.reducer;
