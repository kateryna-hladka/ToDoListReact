export type ItemDate = {
    id: string,
    name: string,
    categoryId?: number,
    finalDate?: string,
    completedDate?: string,
    status: boolean
};

type Item = {
    completedItems: ItemDate[],
    notCompletedItems: ItemDate[],
    loading: boolean
};
const initialState: Item = {completedItems: [], notCompletedItems: [], loading: false};

const Item = (state: Item = initialState, action): Item => {
    switch (action.type) {
        case 'GET_ITEMS':
        case 'CHANGE_STATUS':
        case 'ADD':
            return {...state, loading: true};
        case 'GET_COMPLETED_ITEMS_SUCCESS':
            return {...state, completedItems: action.payload.data, loading: false}
        case 'ADD_SUCCESS':
        case 'GET_NOT_COMPLETED_ITEMS_SUCCESS':
            return {...state, notCompletedItems: action.payload.data, loading: false}

        case 'CHANGE_STATUS_SUCCESS':
            const updatedItem = action.payload.data;
            const newCompleted = updatedItem.status
                ? [...state.completedItems, updatedItem]
                : state.completedItems.filter(item => item.id !== updatedItem.id);
            const newNotCompleted = !updatedItem.status
                ? [...state.notCompletedItems, updatedItem]
                : state.notCompletedItems.filter(item => item.id !== updatedItem.id);
            return {
                ...state,
                loading: false,
                completedItems: newCompleted,
                notCompletedItems: newNotCompleted
            };
        default:
            return state;
    }
}

export default Item;