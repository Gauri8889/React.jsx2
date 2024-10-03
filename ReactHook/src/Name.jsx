
import { useState } from "react";
const Name=()=>{
  const [name ,setName]=useState("Nazneen");
  const myname=()=>{
    setName("Gauri")

  }
  return(
    <>
    <h1> welcome to useSate hook</h1>
    <h1>My name :{name}</h1>
    <button onClick={myname}> chenge name</button>
    </>
  )
}
export default Name;
