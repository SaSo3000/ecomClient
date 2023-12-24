import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity: 0,
        total:0,
        size:"",
        color:"",
    },
    reducers:{
         addProduct:(state,action)=>{
            state.quantity+=1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
            state.size = action.payload.size;
            state.color = action.payload.color;
         }
    }
});

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer;