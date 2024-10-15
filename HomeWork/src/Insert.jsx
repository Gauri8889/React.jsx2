import axios from "axios";
import { useState } from "react";
const Insert=()=>{
    const [input, setInput]=useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
        let api="http://localhost:3000/employees";
        axios.post(api,input).then((res)=>{
            console.log(res);
            alert("Data save!!!");
        })

        return(
            <>
           <h1> Insert Record</h1>
         Enter Employee No : <input type="text" name="empno"  
         onChange={handleInput} />
         <br/>
         Enter name : <input type="text" name="name" 
          onChange={handleInput} />
         <br/>
         Enter email : <input type="text" name="email"  
         onChange={handleInput} />
         <br/>
         Enter contact no. : <input type="text" name="contact"  
         onChange={handleInput} />
         <br/>
         <button onClick={handleSubmit}>Save!!!</button>
        
            </>
        )
        }
   
    }
    export default Insert;
