import React, { useState } from "react";
const Form = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }
    const changeName = (e) => {
        setName(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                名字:
                <input type="text" value={name} onChange={ changeName }/>
            </label>
            <input type="submit" value="提交"/>
        </form>
    )
}
export default Form
