import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './\bstore/userSlice'
import cart from './\bstore/cartSlice'

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    }
}) 