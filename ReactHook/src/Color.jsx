import { useState } from "react";
const Color=()=>{
  const [color, setColor]=useState("Red");
  
  return(
    <>
    <h1 style={{color:color}}> My Favourite color : {color}</h1>
    <button onClick={()=>{setColor("Green")}}>Green</button>
    <button onClick={()=>{setColor("Blue")}}>Blue</button>  
    <button onClick={()=>{setColor("Yellow")}}>Yellow</button>
    <button onClick={()=>{setColor("Orange")}}>Orange</button>
   
   
   
    </>
  )
}
export default Color;
