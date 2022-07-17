import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCurrentWeather } from '../thunks/fetchCurrentWeather';

export interface Weather {
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
    }
}

interface CurrentWeather {
    weather: Weather;
    location: string,
    isLoading: boolean;
    error: string
};


const initialState: CurrentWeather = {
    weather: {
        main: {
          temp: 0,
          feels_like: 0,
          pressure: 0,
        },
    },
    location: 'tallinn',
    isLoading: false,
    error: ''
};

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCurrentWeather.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.weather = action.payload;
        },
        [fetchCurrentWeather.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCurrentWeather.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default currentWeatherSlice.reducer;
