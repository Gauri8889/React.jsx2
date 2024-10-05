import{ useState, useEffect } from "react";
const App=()=>{
    const [cnt,setCnt]=useState(0);
    const[multi, setMulti]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCnt(cnt*2)
        },[cnt]);
    },[])
        return(
            <>
                    <h1>welcome to Cybrom:{cnt}</h1> 
                    <h2>Multiplication : {multi}</h2>
                    <button onClick={()=>setCnt(cnt+1)}>Click here!!</button>
            </>
        )
    
}
export default useEffect;



// import{ useState, useEffect } from "react";
// const App=()=>{
//     const [cnt,setCnt]=useState(0);

//     useEffect(()=>{
//         setTimeout(()=>{
//             setCnt(cnt+1)
//         },6000);
//     },[])
//         return(
//             <>
//                     <h1>welcome to Cybrom:{cnt}</h1>
//             </>
//         )
    
// }
// export default useEffect;