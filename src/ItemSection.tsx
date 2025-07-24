import {ItemDate} from "./redux/Item";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {useEffect} from "react";

export default function ItemSection({list}: { list: ItemDate[] }) {
    const dispatch = useDispatch();
    const handleClick = (e): void => {
        dispatch({type: 'CHANGE_STATUS', payload: {id: (e.target.value)}});
    };
    const reverseDate = (date?: string): string => {
        if (!date) return "";
        date = date.split('T')[0];
        return date.split('-').reverse().join('.');
    }
    const categories = useSelector((state: RootState) => state.category.data);
    useEffect(() => {
        dispatch({type: "GET_ITEMS"});
    }, [dispatch]);
    if (list.length > 0)
        return (
            <div className="task">
                {list.map((e: any) => {
                    let isCompletedDate = e.completedDate !== undefined && e.completedDate !== "";
                    return <div key={e.id}>
                        <div className="check">
                            <button value={e.id}
                                    onClick={handleClick}> {!isCompletedDate ? "✓" : "-"}</button>
                            <span className={isCompletedDate ? "done" : ""}>{e.name}</span>
                        </div>
                        {(e?.category?.name !== undefined) ? <span className="category-name">{e?.category?.name}</span> : null}
                        {(e.finalDate !== null && !isCompletedDate) ?
                            <span className="category-date">до: {reverseDate(e.finalDate)}</span> :
                            (isCompletedDate) ?
                                <span
                                    className="category-date">завершено: {reverseDate(e.completedDate.split(' ')[0])}</span> : null
                        }
                    </div>
                })}
            </div>
        );
    else return <></>
}