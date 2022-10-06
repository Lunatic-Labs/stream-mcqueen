import { async } from "@firebase/util"
import {
    configureStore,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit"
import axios from "axios"
import { API_KEY, TMBD_BASE_URL } from "../utils/constants"


const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],

}

export const getGenres = createAsyncThunk("lipscombplus/genres", async()=> {
    const {data} = await axios.get(
        `${TMBD_BASE_URL}/genre/movie/list?api_key${API_KEY}`
        )
        console.log(data)
        //return data
})

const LipscombPlusSlice = createSlice({
    name: "LipscombPlus",
    initialState,
    extraReducers:(builder)=> {
        builder.addCase(getGenres.fulfilled,(state,action)=> {
            state.genres = action.payload;
            state.genresLoaded = true;
        })
    },
})

export const store = configureStore({
    reducer: {
        lipscombplus: LipscombPlusSlice.reducer,
    },
})