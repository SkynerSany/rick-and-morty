import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormSubmitProps } from '../components/form/form-interfaces';

interface IState {
  search: string;
  forms: IFormSubmitProps[];
}

const initialState: IState = {
  search: '',
  forms: [],
};

const appSlice = createSlice({
  name: 'appStore',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    addForm: (state, action: PayloadAction<IFormSubmitProps>) => {
      state.forms.push(action.payload);
    },
  },
});

const { actions, reducer } = appSlice;

export const { setSearch, addForm } = actions;
export default reducer;
