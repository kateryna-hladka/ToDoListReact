import {Category} from "./Category.js";
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {changeStatus} from "./redux/slices/ItemSlice.js";

export default function ItemList() {
    const tasks = useSelector((state) => [...state.item.items].sort((prev, next) => {
        if (!prev.status && next.status)
            return -1;
        if (prev.status && !next.status)
            return 1;
        if (prev.status && next.status)
            return new Date(prev.completedDate) - new Date(next.completedDate);
        else
            return 1;
    }));
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(changeStatus(e.target.value));
    };
    let deleteClassName = false;
    if (tasks.length > 0)
        return (
            <div className="task">
                {tasks.map((e) => {
                    let isCompletedDate = e.completedDate !== undefined && e.completedDate !== "";
                    return <div key={e.id} className={isCompletedDate && !deleteClassName ? "item completed" : "item"}>
                        {deleteClassName = isCompletedDate}
                        <div className="check">
                            <button value={e.id}
                                    onClick={handleClick}> {!isCompletedDate ? "✓" : "-"}</button>
                            <span className={isCompletedDate ? "done" : ""}>{e.name}</span>
                        </div>
                        {(e.categoryId !== "") && (
                            <span className="category-name">{Category.map((c) => {
                                if (e.categoryId !== "" && +e.categoryId === c.id) return c.name ?? null;
                            })}</span>)}
                        {(e.finalDate !== "" && !isCompletedDate) ?
                            <span className="category-date">до: {e.finalDate.split('-').reverse().join('.')}</span> :
                            (isCompletedDate) ?
                                <span
                                    className="category-date">завершено: {e.completedDate.split('-').reverse().join('.')}</span> : null
                        }
                    </div>
                })}
            </div>
        );
    else return <></>
}