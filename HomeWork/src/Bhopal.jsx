import { useContext } from "react"
import { myContext } from "./App";

const Bhopal=()=>{
    const { user, setUser } = myContext(myContext);
    return(
        <>
        <h1> Welcome to Bhopal : Name : {user}</h1>
        <button onClick={()=>{setUser("nisha")}}>Click</button>
        </>
    )
}
export default Bhopal;