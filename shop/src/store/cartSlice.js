import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name: 'cart',
    initialState:
        [
            { id: 11, name: '나이키', count: 2 },
            { id: 12, name: '아디다스', count: 1 },
        ],
    reducers: {
        addCount(state, action) {
            let index = state.findIndex(item => item.id === action.payload);
            state[index].count++
        },
        addItem(state, action) {
            let item = state.find(item => item.id === action.payload.id);

            console.log(action.payload)

            if (item) {
                item.count += 1;
            } else {
                let newItem = { 
                    id: action.payload.id, 
                    name: action.payload.title, 
                    count: 0 
                }
                state.unshift(newItem)
            }
        },
    }
})
export let { addCount, addItem } = cart.actions

export default cart