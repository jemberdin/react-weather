import { createAsyncThunk } from '@reduxjs/toolkit';
import { Weather } from '../slices/currentWeatherSlice';

export const fetchCurrentWeather = createAsyncThunk(
    'current_weather',
    async (city: string, thunkAPI) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=24d49705591b52338c968b133a36fe4b`
        );

        if (!response.ok) {
            return thunkAPI.rejectWithValue('Could not fetch current weather data!');
        }

        const data: Weather = await response.json();
        return data;
    }
);