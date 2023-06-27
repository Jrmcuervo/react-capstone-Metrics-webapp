import { configureStore } from '@reduxjs/toolkit';

const initialState = {
};

const store = configureStore({
    reducer: {
    },
    preloadedState: initialState,
});

export default store;