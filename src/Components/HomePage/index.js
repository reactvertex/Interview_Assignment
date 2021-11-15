import React, { useEffect, useState } from "react";
import {withRouter } from "react-router-dom";

function Home(props) {
    const [userName, setUserName] =useState('')
    useEffect(() =>{
       let userDetails = localStorage.getItem("userName");
       console.log(userDetails,'userDetails');
        if (userDetails) {
            setUserName(userDetails)
        }else{
            props.history.push('/login')
        }
    console.log(); 
    },[])
    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                <a className="navbar-brand px-3">Navbar</a>
                <span class="navbar-text px-3">  {userName ? userName : null} </span>
            </nav>
            <div className='text-center mt-5'>Welcome on Home page !!</div>
        </>
    )
}
export default withRouter(Home);