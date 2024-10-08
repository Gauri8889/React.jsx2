import { useStat, useEffect, useState } from "react";
import axios from "axios";
const App=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/employees";
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data)
        });
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
                <tr>
                    <td> {key.rollno} </td>
                    <td> {key.name} </td>
                    <td> {key.city} </td>
                    <td> {key.fees} </td>
                </tr>
            </>
        )
    })
    return(
        <>
        <h1> Welcome To cybrom Students </h1>
        <table>
            <tr>
                <th> Rollno </th>
                <th> Name </th>
                <th> city </th>
                <th> Fees </th>
            </tr>
        </table>
        </>
    )

}

export default App; 