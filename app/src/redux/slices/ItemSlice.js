import {createSlice, nanoid} from '@reduxjs/toolkit'
import {dateNow} from "../../DateNow.js";

const ItemSlice = createSlice({
    name: 'item',
    initialState: {items: []},
    reducers: {
        add: (state, action) => {
            state.items.push({
                id: nanoid(),
                name: action.payload.name,
                categoryId: action.payload.categoryId,
                finalDate: action.payload.finalDate,
                status: false
            });
        },
        changeStatus: (state, action) => {
            state.items.forEach((e, index) => {
                if (e.id === action.payload) {
                    state.items[index].status = !e.status;
                    state.items[index].completedDate = (e.status) ? dateNow : "";
                    return;
                }
            })
        }
    }
});

export const {add, changeStatus} = ItemSlice.actions
export default ItemSlice.reducer
