import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = 'https://dummyjson.com/'

const getProducts = createAsyncThunk('products', async (endpoint) => {
    const response = await axios.get(`${baseUrl}${endpoint}`);
    return response.data;
})

const getProductById = createAsyncThunk('productById', async (id) => {
    const response = await axios.get(`${baseUrl}products/${id}`);
    return response.data;
})


const productSlice = createSlice({

    name: "product",

    initialState: {
        products: [],
        product: {},
        error: null,
        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // get product by id
            .addCase(getProductById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})
export { getProductById, getProducts };
export default productSlice.reducer;


