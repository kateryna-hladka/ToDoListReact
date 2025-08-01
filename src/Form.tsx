import {useEffect, useState} from 'react';
import {dateNow} from "./DateNow";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";

export default function Form() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        categoryId: "",
        finalDate: ""
    });

    const handleChange = (e): void => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const [storage, setStorage] = useState(localStorage.getItem("storage"));
    const changeStorage = (e): void => {
        localStorage.setItem("storage", e.target.value);
        setStorage(localStorage.getItem("storage"));
    }
    const handleSubmit = (e): void => {
        e.preventDefault();
        if ((formData.name.trim().length > 0 && formData.name.trim().length <= 5000) &&
            (formData.categoryId === "" || +(formData.categoryId) > 0) &&
            (formData.finalDate === "" || formData.finalDate >= dateNow)) {
            dispatch({type: 'ADD', payload: (formData)});
            setFormData({name: "", categoryId: "", finalDate: ""});
        }
    };

    useEffect(() => {
        dispatch({type: "GET"});
    }, [dispatch]);
    const categories = useSelector((state: RootState) => state.category.data);

    return (
        <>
            <form>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        {storage == "xml" ? "XML Сховище" : "База Даних"}
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <button type="submit" name="storageType" value="db" className="dropdown-item"
                                    onClick={changeStorage}>
                                База Даних
                            </button>
                        </li>
                        <li>
                            <button type="submit" name="storageType" value="xml" className="dropdown-item"
                                    onClick={changeStorage}>
                                XML Сховище
                            </button>
                        </li>
                    </ul>
                </div>
            </form>
            <form className="create-item" onSubmit={handleSubmit}>
                <input type="text" placeholder="Що потрібно виконати?" className="form-control"
                       required name="name" value={formData.name} onChange={handleChange}/>
                <select className="form-select" name="categoryId" value={formData.categoryId} onChange={handleChange}>
                    <option value="" disabled>Оберіть категорію</option>
                    {categories.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}
                </select>
                <input type="date" className="form-control" min={dateNow} name="finalDate" value={formData.finalDate}
                       onChange={handleChange}/>
                <button className="btn">Додати</button>
            </form>
        </>
    );
}