import { useState } from "react"

const App=()=>{
  const[input, setInput]=useState({ });// input={ }

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    // console.log({[name]:value});
    //setInput({[name]:value})
    setInput((values)=>({...values, [name]:value}));//sread oprater(...)
    console.log(input);
  }
  const handleSubmit=()=>{
    console.log(input);
  }
}