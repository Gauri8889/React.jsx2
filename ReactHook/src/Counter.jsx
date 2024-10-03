import { useState } from "react";
const Counter=()=>{
  const [cnt, setCnt]=useState("0");
  const MyDcerement=()=>{
    if(cnt<=1)
    {
      alert("No dcrese minus value")
    }
    else{
      setCnt(cnt-1)
    }
  }
  
  return(
    <>
    <center>
      <h1>Counter App</h1>
      <h1>Count:{cnt}</h1>
      <button onClick={()=>{setCnt(cnt+1)}}> Increment </button>
      <button onClick={()=>{setCnt(cnt-1)}}>Decerement</button>
      <button onClick={()=>{setCnt(0)}}>Reset</button>
    </center>
   
    </>
  )
}
export default Counter;
