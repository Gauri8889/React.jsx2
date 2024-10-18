// import { useContext } from "react";
import Comp3 from "./Comp3";
const Comp2=()=>{
    const {user}= useContext(myContext);
    return(
        <>
        <h1>Component-2 : Welcome : {user} </h1>
        </>
    )
}
export default Comp2;