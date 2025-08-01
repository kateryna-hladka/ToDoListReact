import {applyMiddleware, combineReducers, createStore} from 'redux';
import Item from "./item/Item";
import Category from "./category/Category";
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import categoryEpic from "./category/categoryEpic";
import addItemEpic from "./item/addItemEpic";
import itemListEpic from "./item/itemListEpic";
import updateItemEpic from "./item/updateItemEpic";

const epicMiddleware = createEpicMiddleware();
const rootReducer = combineReducers({
    item: Item,
    category: Category
});
const rootEpic = combineEpics(
    categoryEpic,
    addItemEpic,
    itemListEpic,
    updateItemEpic
);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
