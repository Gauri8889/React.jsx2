// import { useContext } from "react";
import Comp2 from "./Comp2";
const Comp1=()=>{
    const {user}= useContext(myContext);
    return(
        <>
        <h1>Component-1 : Welcome : {user} </h1>
        </>
    )
}
export default Comp1;