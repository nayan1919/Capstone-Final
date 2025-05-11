// Importing configureStore from Redux Toolkit to configure the Redux store
import { configureStore } from '@reduxjs/toolkit';
// Importing the authReducer (from the authSlice file) to manage authentication-related state
import authReducer from './slices/authSlice';

// Configuring the Redux store using configureStore
export const store = configureStore({
  reducer: {
    // Defining the reducer for the 'auth' slice, which will manage authentication state
    auth: authReducer,
  },
});
