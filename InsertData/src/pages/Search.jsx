import { useState } from "react";

const SearchByName=()=>{
    const [ename, setEname]=useState("");
    const [mydata, setmydata]=useState([]);
    const handleChange=(e)=>{
        let empname = e.target.value;
        setEname(empname);
        let api=`http://localhost:3000/employees`;
        axios.get(api).than((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
        let str=key.name;
        let mystatus=str.include(ename);
        console.log(mystatus);
        if(mystatus)
        {
            return(
                <>
                <tr>
                    <td> { key.empno}</td>
                    <td>{key.name}</td>
                    <td>{key.email}</td>
                    <td>{key.contact}</td>
                </tr>
                </>
            )
        }
    })
}