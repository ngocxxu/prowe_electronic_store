//rxslice
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Anchor } from 'src/components/Drawer';
import { OtherState } from 'src/types/GeneralTypes';

const initialState: OtherState = {
  activeStep: 0,
  isDrawer: false,
  isOpenModal: false,
  isOpenQuickViewModal: false,
  stateToggleDrawer: {
    anchor: 'right',
    open: false,
  },
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
    toggleDrawer: (
      state,
      action: PayloadAction<{ anchor: Anchor; open: boolean }>
    ) => {
      const { anchor, open } = action.payload;
      state.stateToggleDrawer.anchor = anchor;
      state.stateToggleDrawer.open = open;
    },
    toggleNotification: (state, action) => {
      state.notify = action.payload;
    },
    toggleOpenModal: (state, action) => {
      state.isOpenModal = action.payload;
    },
    toggleOpenQuickViewModal: (state, action) => {
      state.isOpenQuickViewModal = action.payload;
    },
  },
});

export const {
  updateActiveStep,
  toggleDrawer,
  toggleNotification,
  toggleOpenModal,
  toggleOpenQuickViewModal,
} = otherReducer.actions;

export default otherReducer.reducer;
