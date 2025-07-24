import {applyMiddleware, combineReducers, createStore} from 'redux';
import Item from "./Item";
import Category from "./Category";
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import fetchCategoryEpic from "../epics/fetchCategoryEpic";

const epicMiddleware = createEpicMiddleware();
const rootReducer = combineReducers({
    item: Item,
    category: Category
});
const rootEpic = combineEpics(
    fetchCategoryEpic
);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
