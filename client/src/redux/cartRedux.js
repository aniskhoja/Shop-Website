import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: null,
    },
    reducers: {
        addProduct: (state, action) => {
            if (state.products.some(item => item._id === action.payload._id)) {
                state.products = [...state.products.filter(item => item._id !== action.payload._id), action.payload]
            } else {
                state.quantity += 1
                state.products.push(action.payload)
            }
            state.total = Number([...state.products.map(item => item.price * item.quantity)])
        }
    }
});

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer;