import {ItemDate} from "./redux/Item";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export default function ItemSection({list, reverse}: { list: ItemDate[], reverse?: boolean }) {
    const dispatch = useDispatch();
    const handleClick = (e): void => {
        let targetValue = e.target.value.split(',');
        dispatch({type: 'CHANGE_STATUS', payload: {id: (targetValue[0]), status: targetValue[1]}});
    };
    const reverseDate = (date?: string): string => {
        if (!date) return "";
        date = date.split('T')[0];
        return date.split('-').reverse().join('.');
    }
    useEffect(() => {
        dispatch({type: "GET_ITEMS"});
    }, [dispatch]);
    if (reverse && list.length > 0)
        list = list.sort((prev, next) => {
            return +new Date(next.completedDate) - +new Date(prev.completedDate);
        });
    if (list.length > 0)
        return (
            <div className="task">
                {list.map((e: any) => {
                    let isCompletedDate = e.completedDate !== undefined && e.completedDate !== null;
                    return <div key={e.id}>
                        <div className="check">
                            <button value={[e.id, !isCompletedDate]}
                                    onClick={handleClick}> {!isCompletedDate ? "✓" : "-"}</button>
                            <span className={isCompletedDate ? "done" : ""}>{e.name}</span>
                        </div>
                        {(e?.category?.name !== undefined) ?
                            <span className="category-name">{e?.category?.name}</span> : null}
                        {(e.finalDate !== null && !isCompletedDate) ?
                            <span className="category-date">до: {reverseDate(e.finalDate)}</span> :
                            (isCompletedDate) ?
                                <span
                                    className="category-date">завершено: {reverseDate(e.completedDate?.split(' ')[0])}</span> : null
                        }
                    </div>
                })}
            </div>
        );
    else return <></>
}