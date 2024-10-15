import { useState } from "react";
import axios from "axios";
const SearchByName=()=>{
    const [ename, setEname]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleChange=(e)=>{
        let emplname= e.target.value;
        setEname(emplname);
        let api=`http://localhost:3000/employees`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
          let str= key.empname.toLowerCase();
           let mystatus=str.includes(ename.toLowerCase());
           console.log(mystatus);
         if (mystatus)
            {  
          return(
            <>
             <tr>
              <td> {key.empno}</td>
              <td>  {key.empname} </td>
              <td> {key.email} </td>
              <td>  {key.contact}</td>
              <td>  {key.salary}</td>
              </tr>
            </>
          )
        }
    })

    return(
        <>
          <h1> Search Employee Records</h1>
Type Emp Name  : <input type="text" value={ename} onChange={handleChange} />
          
          <hr size="5" color="green"/>
          <table>
            <tr>
                <th> Emp No</th>
                <th> Name</th>
                <th> Email</th>
                <th>Contact</th>
                <th>Salary</th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default SearchByName;