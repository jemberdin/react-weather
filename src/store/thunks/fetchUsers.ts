import { createAsyncThunk } from '@reduxjs/toolkit';
//import { AppDispatch } from '../index';
import { IUser } from '../slices/userSlice';
//import { userSlice } from '../slices/userSlice';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     if (!response.ok) {
//         dispatch(userSlice.actions.usersFetchingError('Could not fetch users data!'))
//     }

//     const data: IUser[] = await response.json();
//     dispatch(userSlice.actions.usersFetchingSuccess(data));
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            return thunkAPI.rejectWithValue('Could not fetch users data!');
        }

        const data: IUser[] = await response.json();
        return data;
    }
);
