import axios from "axios";
import { useState } from "react"

const Search=()=>{
    const [eno, setEno]=useState("");
    const [mydata, setMydata]=useState([]);
    
    const handleSubmit=()=>{
        let api=`http://localhost:3000/employees`;
        axios.get(api).than((res)=>{
        setMydata(res.data);
        console.log(res.data);
        })
    }

    const ans=mydata.map((key)=>{
        return(
            <>
            <h1>Employee Number:{key.empno}</h1>
            <h2> Name : {key.name}</h2>
            <h2> Email : {key.email}</h2>
            <h2> Contact no: {key.Contact}</h2>
            </>
        )
    })
    return(
        <>
        <h1> Search Empplyee Records</h1>
    Enter Emp No. : <input type="text" value={eno} onChange={(e)=>{setEno(e.target)}}/>
    <button onClick={handleSubmit}>search</button>
    <hr size="5" color="green"/>
    {ans}
        </>
    )
}
export default Search;