import { configureStore } from '@reduxjs/toolkit';
import { api } from '../components/api/api';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
