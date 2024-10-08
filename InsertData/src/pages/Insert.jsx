import axios from "axios";
import { useState } from "react";

const Insert=()=>{
    const [input, setInput]=useState({});


    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(value=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
        let api="http://localhost:3000/employees";
        axios.post(api,input).then(res)=>{
            console.log(res);
            alert("Data save !!!");
        }
    }
}