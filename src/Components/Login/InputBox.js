import React from "react";

function InputBox ({handleChange,type,name}){
    return (
        <input name={name} type={type} onChange={handleChange}/>
    )
}

export default InputBox