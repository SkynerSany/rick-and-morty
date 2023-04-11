import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../components/api/api';
import { ICharacter } from '../components/api/api-interfaces';
import { IFormSubmitProps } from '../components/form/form-interfaces';
import { IMessage } from '../components/message/message-interfaces';

interface IState {
  search: string;
  forms: IFormSubmitProps[];
  messages: IMessage[];
  modal: JSX.Element | null;
  cards: ICharacter[];
}

const initialState: IState = {
  search: '',
  forms: [],
  messages: [],
  modal: null,
  cards: [],
};

const appSlice = createSlice({
  name: 'appStore',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCards: (state, action: PayloadAction<ICharacter[]>) => {
      state.cards = [...action.payload];
    },
    addForm: (state, action: PayloadAction<IFormSubmitProps>) => {
      state.forms.push(action.payload);
    },
    setMessage: (state, action: PayloadAction<IMessage>) => {
      state.messages.push(action.payload);
    },
    removeMessage: (state) => {
      state.messages.shift();
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

const rootReducer = combineReducers({
  store: reducer,
  [api.reducerPath]: api.reducer,
});

export const { setSearch, addForm, setMessage, setModal, removeModal, removeMessage, setCards } =
  actions;
export default rootReducer;
