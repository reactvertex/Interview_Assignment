import React from "react";

function InputBox ({handleChange,type,name,placeholder}){
    return (
        <div className="my-2">
            <input required  className="form-control " placeholder={placeholder} name={name} type={type} onChange={(e) =>handleChange(e)}/>
        </div>
    )
}

export default InputBox