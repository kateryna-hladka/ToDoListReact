import {Category} from "./Category.js";
import {useSelector} from 'react-redux';

export default function ItemList() {
    const tasks = useSelector((state) => state.item.items);
    if (tasks.length > 0)
        return (
            <div className="task">
                {tasks.map((e) => {
                    return <div key={e.id} className="item">
                        <div className="check">
                            {(e.completedDate !== "") ? <button>✓</button> :
                                <button>-</button>}
                            <span className={((e.completedDate === "" ? "done" : ""))}>{e.name}</span>
                        </div>
                        {(e.categoryId !== "") && (
                            <span className="category-name">{Category.map((c) => {
                                if (e.categoryId !== "" && +e.categoryId === c.id) return c.name ?? null;
                            })}</span>)}
                        {(e.finalDate !== "" && e.completedDate === undefined) ?
                            <span className="category-date">до: {e.finalDate.split('-').reverse().join('.')}</span> :
                            (e.completedDate !== undefined) ?
                                <span
                                    className="category-date">завершено: {e.completedDate.split('-').reverse().join('.')}</span> : null
                        }
                    </div>
                })}
            </div>
        );
    else return <></>
}