const Category = (state:{id: number, name: string}[] = [{id: 1, name: "Покупки"}, {id: 2, name: "Робота"}], action) => {
    switch (action.type) {
        case "GET":
        default:
            return state;
    }
};

export default Category;