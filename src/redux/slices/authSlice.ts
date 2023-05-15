import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";

import {ILogReg} from "../../interfaces/logReg.interface";
import {authService} from "../../services/auth.service";
import {AxiosError} from "axios";
import {IError} from "../../interfaces/error.interface";
import {ITokens} from "../../interfaces/tokens.interface";
import {IUser} from "../../interfaces/user.interface";

interface IState {
    error: IError | null
    me: IUser

}

const initialState: IState = {
    error: null,
    me: null

}


const register = createAsyncThunk<void, ILogReg>(
    'authSlice/register',
    async (user, {rejectWithValue}) => {
        try {
            await authService.registration(user)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const me = createAsyncThunk<IUser,void>(
    'authSlice/me',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authService.me()
            return  data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const logIn = createAsyncThunk<ITokens, ILogReg>(
    'authSlice/logIn',
    async (user, {rejectWithValue}) => {
        try {
            await authService.login(user)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(me.fulfilled,(state, action)=>{
                state.me = action.payload
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
            })
})

const {reducer: authReducer, actions} = authSlice

const authActions = {
    ...actions,
    register,
    logIn,
    me
}

export {
    authActions,
    authReducer
}