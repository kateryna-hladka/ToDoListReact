import {combineReducers, createStore} from 'redux';
import Item from "./Item";
import Category from "./Category";

const rootReducer = combineReducers({
    item: Item,
    category: Category
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
