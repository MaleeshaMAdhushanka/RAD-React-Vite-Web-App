import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface ProductState {
  list: [],
  error: string | null | undefined

}

//type ekai object ekak asiign kara
const initialState: ProductState = {
    list:[],
    error: null,

}

export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async () => {
        const  response = await fetch('./product-data.json');
        return  await  response.json();

    }
)

//producr ekata related dewal maintain karana nisa
//udin define karapu init
const  productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers:{},
    extraReducers:(builder) => {
          builder.addCase(getAllProducts.pending,  () => {
              alert("Product data is still loading...");
          }) .addCase(getAllProducts.fulfilled, (state, action) => {
              state.list = action.payload;
          }) .addCase(getAllProducts.rejected, (state, action) => {
              state.error = action.error.message;
              alert("Error loading :" + state.error);
          })
    }
});

export default productSlice.reducer;