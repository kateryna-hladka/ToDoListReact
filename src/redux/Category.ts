type Category = {
    data: { id: number, name: string }[],
    loading: boolean
}
const initialState: Category = {data: [], loading: false};
const Category = (state: Category = initialState, action) => {
    switch (action.type) {
        case "GET":
            return {...state, loading: true}
        case "GET_SUCCESS":
            return {...state, data: action.payload.data, loading: false}
        default:
            return state;
    }
};

export default Category;