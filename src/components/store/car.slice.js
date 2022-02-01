import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from '../../services';


export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const data = await carService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'cars/createCar',
    async ({data:newCar, id}, {dispatch}) => {
        try {
            const data = await carService.create(newCar);
            dispatch(addCar({data}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'cars/deleteCarThunk',
    async ({id}, {dispatch})=>{
        try {
            await carService.deleteById(id)
            dispatch(deleteCar({id}))
        }catch (e) {
            console.log(e);
        }
    }
)

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },

        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload

        }
    }
})

const carReducer = carSlice.reducer;
const {addCar, deleteCar} = carSlice.actions;

export default carReducer

export const carActions = {
    addCar, deleteCar
}
