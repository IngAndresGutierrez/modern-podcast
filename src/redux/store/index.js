import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import rootReducer from '../reducers/rootReducer'

const persistConfig = {
  key: 'esoluzion-challenge-root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: false, // Deshabilita la advertencia sobre el estado no serializable
  }),
})

export const persistor = persistStore(store)
