import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CarInterface} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import {AxiosError} from "axios";


interface IState{
    cars: CarInterface[]
}
const initialState:IState = {
    cars:[],
}

const getAll = createAsyncThunk<CarInterface[],void>(
    'carSlice/getAll',
    async(_,{rejectWithValue})=> {
       try {
           const {data} = await carService.getAll()
           return data
       }catch (e){
           const err = e as AxiosError
           return rejectWithValue(err.response?.data)
       }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.cars = action.payload
            })

})

const {actions, reducer: carReducer} = carSlice;

const carActions = {
    ...actions,
    getAll
}

export {
    carActions,
    carReducer
}