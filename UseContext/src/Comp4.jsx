// import { useContext } from "react";
import Comp5 from "./Comp5";
const Comp4=()=>{
    const {user}= useContext(myContext);
    return(
        <>
        <h1>Component-4 : Welcome : {user} </h1>
        </>
    )
}
export default Comp4;