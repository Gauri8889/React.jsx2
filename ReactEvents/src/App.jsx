const App=()=>{
  const textboxVal=(e)=>{
    let name =e.target.name;
    let value = e.target.value;
    alert("Name : "+ name + "Value : " + value);
  }
  return(
    <>
    Enter City : <input type="text" name="city" value="Bhopal" onClick={textboxVal}/>
    </>
  )
}
export default App;





// const App=()=>{
//   const myName=(nm, e)=>{
//     let Name =e.target.name;
//     let val = e.target.value;
//     alert("Name : "+ Name + "Value : " + val);
//   }
//   return(
//     <>
//     <h1>welcome to React Event</h1>
//     <button name="btn1" value="mybtn" onClick={(e)=>{myName("raj", e)}}>click here!</button>
//     </>
//   )
// }
// export default App;




// const App=()=>{
//   const cybrom=(course, e)=>{
//     alert(`my course : ${course} event object : ${e.type}`)
//   }
//   return(
//     <>
//     <h1>welcome to React Event</h1>
//     <button onClick={(e)=>{cybrom("Fullstack", e)}}>Show name</button>
//     </>
//   )
// }
// export default App;






// const App=()=>{
//   const myName=(nm)=>{
//     alert(`my name is : ${nm}`)
//   }
//   return(
//     <>
//     <h1>welcome to React Event</h1>
//     <button onClick={()=>{myName("Sachin Mishra!")}}>Show name</button>
//     </>
//   )
// }
// export default App;