// import { useContext } from "react";
import Comp4 from "./Comp4";
const Comp3=()=>{
    const {user}= useContext(myContext);
    return(
        <>
        <h1>Component-4 : Welcome : {user} </h1>
        </>
    )
}
export default Comp3;