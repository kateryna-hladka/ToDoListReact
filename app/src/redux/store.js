import {configureStore} from '@reduxjs/toolkit'
import ItemSlice from './slices/ItemSlice.js'

export default configureStore({
        reducer: {
            item: ItemSlice
        }
    }
)
