import React, {useState} from 'react';
import {dateNow} from "./DateNow.js";
import {useDispatch, useSelector} from "react-redux";
import {add} from "./redux/slices/ItemSlice.js";

export default function Form() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        categoryId: "",
        finalDate: ""
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((formData.name.trim().length > 0 && formData.name.trim().length <= 5000) &&
            (formData.categoryId === "" || +formData.categoryId > 0) &&
            (formData.finalDate === "" || formData.finalDate > dateNow)) {
            dispatch(add(formData));
            setFormData({name: "", categoryId: "", finalDate: ""});
        }
    };

    const categories = useSelector((state) => [...state.category.categories]);

    return (
        <form className="create-item" onSubmit={handleSubmit}>
            <input type="text" placeholder="Що потрібно виконати?" className="form-control"
                   required="required" name="name" value={formData.name} onChange={handleChange}/>
            <select className="form-select" name="categoryId" value={formData.categoryId} onChange={handleChange}>
                <option value="" disabled>Оберіть категорію</option>
                {categories.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}
            </select>
            <input type="date" className="form-control" min={dateNow} name="finalDate" value={formData.finalDate}
                   onChange={handleChange}/>
            <button className="btn">Додати</button>
        </form>
    );
}