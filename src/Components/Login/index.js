import React, { useState } from 'react';
import InputBox from './InputBox';
import SubmitButtom from './Button';
import {withRouter } from "react-router-dom";

function LoginPage(props) { 
    const [state, setState] = useState({
        userName: '',
        password: ''
    })
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        localStorage.setItem("userName", state.userName);
        props.history.push('/')
    }
    return (
        <div>
            <div className='text-center my-4'>Login</div>
            <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={(event) => handleSubmit(event)}>
                <InputBox placeholder='Enter Email' type='email' name="userName" handleChange={handleChange} />
                <InputBox placeholder='Enter password' type='password' name="password" handleChange={handleChange} />
                <SubmitButtom />
            </form>
        </div>
    )
}
export default withRouter(LoginPage)