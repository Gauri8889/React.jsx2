import { useState } from "react";
import Comp1 from "./Comp1";

const App=()=>{
  const [user ,setUser]=useState("Khushi");
  return(
    <>
    <h1>welcom ho my main page : {user}</h1>
    <Comp1 user={user}/>
    </>
  )
}
export default App;