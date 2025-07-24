import {applyMiddleware, combineReducers, createStore} from 'redux';
import Item from "./Item";
import Category from "./Category";
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import categoryEpic from "../epics/categoryEpic";
import addItemEpic from "../epics/addItemEpic";
import itemListEpic from "../epics/ItemListEpic";

const epicMiddleware = createEpicMiddleware();
const rootReducer = combineReducers({
    item: Item,
    category: Category
});
const rootEpic = combineEpics(
    categoryEpic,
    addItemEpic,
    itemListEpic
);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
