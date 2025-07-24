import {useSelector, useDispatch} from 'react-redux';
import {RootState} from "./redux/store";
import {ItemDate} from "./redux/Item";
import {useEffect} from "react";
import ItemSection from "./ItemSection";

export default function ItemList() {
    /*const tasks = useSelector((state: RootState) => state.item.data.sort((prev, next) => {
        if (!prev.status && next.status)
            return -1;
        if (prev.status && !next.status)
            return 1;
        if (prev.status && next.status)
            return +new Date(next.completedDate) - +new Date(prev.completedDate);
        else
            return 1;
    }));
    console.log(tasks);*/
    const dispatch = useDispatch();
    /*const handleClick = (e): void => {
        dispatch({type: 'CHANGE_STATUS', payload: {id: (e.target.value)}});
    };
    const reverseDate = (date?: string): string => {
        if (!date) return "";
        return date.split('-').reverse().join('.');
    }*/
/*    let deleteClassName = false;
    const categories = useSelector((state: RootState) => state.category.data);*/
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
    /*if (notCompletedItems.length > 0)
        return (
            <div className="task">
                {notCompletedItems.map((e: ItemDate) => {
                    let isCompletedDate = e.completedDate !== undefined && e.completedDate !== "";
                    return <div key={e.id} className={isCompletedDate && !deleteClassName ? "item completed" : "item"}>
                        {deleteClassName = isCompletedDate}
                        <div className="check">
                            <button value={e.id}
                                    onClick={handleClick}> {!isCompletedDate ? "✓" : "-"}</button>
                            <span className={isCompletedDate ? "done" : ""}>{e.name}</span>
                        </div>
                        {(Number(e.categoryId) !== 0) && (
                            <span className="category-name">{categories.map((c) => {
                                if (e.categoryId !== null && +e.categoryId === c.id) return c.name ?? null;
                            })}</span>)}
                        {(e.finalDate !== "" && !isCompletedDate) ?
                            <span className="category-date">до: {reverseDate(e.finalDate)}</span> :
                            (isCompletedDate) ?
                                <span
                                    className="category-date">завершено: {reverseDate(e.completedDate.split(' ')[0])}</span> : null
                        }
                    </div>
                })}
            </div>
        );
    else return <></>*/
}