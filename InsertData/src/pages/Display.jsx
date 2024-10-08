const { useState, useEffect } = from("react")

const Display=()=>{
    const [empdata, setEmpdata]=useState([]);
    const loadData=()=>{
        let url ="http://localhost:3000/employees";
        axios.get(url).then(res)=>{
            console.log(res.data);
            setEmpdata(res.data);
        }
    }
    useEffect(()=>{
        loadData();
    }, [])
    const ans = empdata.map((key)=>{
        return(
            
        )
    })
}