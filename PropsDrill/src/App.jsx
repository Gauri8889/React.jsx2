
import { useState } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

const App=()=>{
    const [user, setUser]=useState("Ayushi");
    return(
        <>
        <h1> Welcome : {user}</h1>
        <Comp1 user={user}/>
        <Comp2 user={user}/>

        
        </>
    )
}
export default App;