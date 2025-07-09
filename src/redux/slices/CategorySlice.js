import {createSlice} from '@reduxjs/toolkit';

const CategorySlice = createSlice({
    name: 'category',
    initialState: {categories: [{id: 1, name: "Покупки"}, {id: 2, name: "Робота"}]},
});

export default CategorySlice.reducer