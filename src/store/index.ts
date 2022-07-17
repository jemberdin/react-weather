import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import currentWeatherSlice from "./slices/currentWeatherSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        current_weather: currentWeatherSlice
    } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
