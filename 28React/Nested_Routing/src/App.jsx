const App=()=>{
    const subject=["php","python","java","html","java"];
    const ans=subject.map((key)=>{
        return(
            <>
            <li>{key}</li>
            </>
        )
    })
    return(
        <>
        <h1>hello woild</h1>
        <ol>
            {ans}
        </ol>
        </>
    )
}
export default App;

// const name=["ranju", "manju","sanju"];
// const App=()=>{
//     const ans=name.map((key)=>{
//         return(
//             <>s
//             <h1> {key}</h1>
//             </>
//         )
//     })
    

// return(
//     <>
//     <h1>hello world!!</h1>
//     {ans}
//     </>
// )
// }
// export default App;