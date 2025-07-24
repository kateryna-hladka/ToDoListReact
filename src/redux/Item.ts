import {nanoid} from '@reduxjs/toolkit'
import {dateTimeNow} from "../DateNow";

type Item = {
    data: {
        id: string,
        name: string,
        categoryId?: number,
        finalDate?: string,
        completedDate?: string,
        status: boolean
    }[],
    loading: boolean
};
const initialState: Item = {data: [], loading: false};

const Item = (state: Item = initialState, action): Item => {
    switch (action.type) {
        case 'ADD':
            return {...state, loading: true};
        case 'ADD_SUCCESS':
            return {...state, data: action.payload.data, loading: false}
        case 'CHANGE_STATUS':
            return {...state, loading: true} /*state.map((item: Item): Item => {
                if (item.id === action.payload.id) {
                    const newStatus: boolean = !item.status;
                    return {
                        ...item,
                        status: newStatus,
                        completedDate: newStatus ? dateTimeNow() : ""
                    };
                }
                return item;
            });*/
        default:
            return state;
    }
}

export default Item;