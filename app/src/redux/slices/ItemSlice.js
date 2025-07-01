import {createSlice, nanoid} from '@reduxjs/toolkit'

const ItemSlice = createSlice({
    name: 'item',
    initialState: {items: [], name: "", categoryId: "", finalDate: "", completedDate: ""},
    reducers: {
        add: (state, action) => {
            state.items.push({
                id: nanoid(),
                name: action.payload.name,
                categoryId: action.payload.categoryId,
                finalDate: action.payload.finalDate,
                status: true
            });
        }
    }
});

export const {add} = ItemSlice.actions
export default ItemSlice.reducer
