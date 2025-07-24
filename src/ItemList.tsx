import {useSelector, useDispatch} from 'react-redux';
import {RootState} from "./redux/store";
import {useEffect} from "react";
import ItemSection from "./ItemSection";

export default function ItemList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "GET_ITEMS"});
    }, [dispatch]);
    const completedItems = useSelector((state: RootState) => state.item.completedItems);
    const notCompletedItems = useSelector((state: RootState) => state.item.notCompletedItems);
    return (<>
            <ItemSection list={notCompletedItems}/>
            <ItemSection list={completedItems} reverse={true}/>
        </>
    );
}