import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['dragons'],
  };

const initialState = {
  dragons: [],
  favorites: [],
};

export const sliceDragons = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    setDragons(state, { payload }) {
      state.dragons = payload;
    },
    setFavorites(state, { payload }) {
      state.favorites = payload;
    },
    clearFavorites(state){
      state.favorites = []
    },
  },
});

export const { setDragons, setFavorites } = sliceDragons.actions;

export const persistSliceDragons  = persistReducer(
    persistConfig,
    sliceDragons.reducer
)