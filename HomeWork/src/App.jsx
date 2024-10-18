import { useState,createContext } from "react";
import Cybrom from "./Cybrom";

const myContext=createContext();
const App=()=>{
    const [user, setUser]=useState("Deepa");
    return(
        <>
        <button onClick={()=>{setUser("NaZneen")}}>Click</button>
        <h1> Welcome: {user}</h1>
        < myContext.Provider value={{user, setUser}}>
        <Cybrom/>

        </myContext.Provider>
        </>
    )
}
export default App;
export {myContext};