import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props){
    console.log(props,"props")
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let log = localStorage.getItem("log")
        if(!log){
            navigate('login')
        }
    })
    return(
        <>
            <Component />
        </>
    )
}

export default Protected;