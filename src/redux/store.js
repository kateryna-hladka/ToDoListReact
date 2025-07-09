import {configureStore} from '@reduxjs/toolkit'
import ItemSlice from './slices/ItemSlice.js'
import CategorySlice from "./slices/CategorySlice.js";

export default configureStore({
        reducer: {
            item: ItemSlice,
            category: CategorySlice
        }
    }
)
