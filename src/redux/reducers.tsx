import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormSubmitProps } from '../components/form/form-interfaces';
import { IMessage } from '../components/message/message-interfaces';

interface IState {
  search: string;
  forms: IFormSubmitProps[];
  messages: IMessage[];
  modal: JSX.Element | null;
}

const initialState: IState = {
  search: '',
  forms: [],
  messages: [],
  modal: null,
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
    setMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages.push(action.payload);
      setTimeout(() => {
        state.messages = state.messages.filter((_, i) => 0 !== i);
      }, 3000);
    },
    setModal: (state, action: PayloadAction<JSX.Element | null>) => {
      state.modal = action.payload;
    },
    removeModal: (state) => {
      state.modal = null;
    },
  },
});

const { actions, reducer } = appSlice;

export const { setSearch, addForm, setMessage, setModal, removeModal } = actions;
export default reducer;
