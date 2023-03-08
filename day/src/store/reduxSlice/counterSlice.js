import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartItems:[]
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
      addCartItems: (state,action)=>{
        state.cartItems.push(action.payload)
      }
    }

})

export const { increment,addCartItems } = counterSlice.actions

export default counterSlice.reducer