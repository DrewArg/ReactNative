import { configureStore } from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';

import boardGameReducer from './boardGame.slice';

export const store = configureStore({
  reducer: {
    boardGame: boardGameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
