import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect } from 'react';

function Detail(props){
    const location=useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        
        if(location.state===null){
            navigate('/');
        }
});
   
    if(location.state){
        return <span>{location.state.title}</span>
    }
    return null;
    }

export default Detail;

