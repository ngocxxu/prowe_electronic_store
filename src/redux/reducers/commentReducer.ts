import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'src/types/GeneralTypes';

interface InitialStateProduct {
  dataComment: IComment[];
}

const initialState: InitialStateProduct = {
  dataComment: [
    {
      userId: {
        _id: '',
        email: '',
        password: '',
        idCart: '',
        idFavor: '',
        isAdmin: false,
      },
      content: '',
      rate: 5,
      createdAt: '',
      updatedAt: '',
    },
  ],
};

const commentReducer = createSlice({
  name: 'commentReducer',
  initialState,
  reducers: {
    getCommentApiAction: (state, action: PayloadAction<IComment[]>) => {
      state.dataComment = action.payload;
    },
  },
});

export const { getCommentApiAction } = commentReducer.actions;

export default commentReducer.reducer;
