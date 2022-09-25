import { configureStore } from '@reduxjs/toolkit';
import { persistSliceDragons } from './sliceDragons';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


export const store = configureStore({
    reducer: {
      dragons: persistSliceDragons,
    },
    middleware: getDefaultMiddleware => [ ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),],
  });
  
  export const persistor = persistStore(store)
