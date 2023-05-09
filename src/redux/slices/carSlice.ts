import {createAsyncThunk, createSlice, isFulfilled,isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {CarInterface} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import {ErrorInterface} from "../../interfaces/error.interface";


interface IState {
    cars: CarInterface[]
    trigger: boolean
    carForUpdate: CarInterface | null
    errors:  ErrorInterface | null
}

const initialState: IState = {
    cars: [],
    trigger: false,
    carForUpdate: null,
    errors: null
}

const getAll = createAsyncThunk<CarInterface[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response)
        }
    }
)

const createCar = createAsyncThunk<void, { car: CarInterface }>(
    'carSlice/createCar',
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const deleteCar = createAsyncThunk<void, { id: number }>(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.delete(id)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const updateCar = createAsyncThunk<void, { id: number, car: CarInterface }>(
    'carSlice/updateCar',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const data = await carService.update(id, car)
            console.log(data)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
            console.log(action.payload)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload

            })
            .addCase(updateCar.fulfilled, (state) => {
                state.carForUpdate = null
            })
            .addMatcher(isFulfilled(createCar,updateCar,deleteCar), state => {
                state.trigger = ! state.trigger
                state.errors = null

            })
            .addMatcher(isRejectedWithValue(createCar,updateCar),(state, action)=>{
                state.errors= action.payload
                state.carForUpdate = null
            })
})

const {actions, reducer: carReducer} = carSlice;

const carActions = {
    ...actions,
    getAll,
    createCar,
    deleteCar,
    updateCar
}

export {
    carActions,
    carReducer
}