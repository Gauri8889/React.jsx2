



import { useState } from "react";
import Color from "./Color";
import Counter from "./Counter";
import Name from "./Name";
const App=()=>{
  const [city ,setCity]=useState("");
  const display=()=>{
    setCity("Indore!");

  }
  return(
    <>
    <h1> My city : {city}</h1>
    <button onClick={()=>{setCity("Bhopal")}}>Click here</button>
    <button onClick={display}> Click here</button>
    <Color />
    <Counter/>
    <Name/>
    </>
  )
}
export default App;

