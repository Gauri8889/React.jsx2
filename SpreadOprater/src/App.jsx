import { useState } from "react"

const App=()=>{
  const[input, setInput]=useState({ });// input={ }

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    // console.log({[name]:value});
    //setInput({[name]:value})
    setInput((values)=>({...values, [name]:value}));//sread oprater(...)
    console.log(input);
  }
  const handleSubmit=()=>{
    console.log(input);
  }
  return(
    <>
    <h1>Application from</h1>
    Enter name : <input type="text" name="name" value={input.name} onChange={handleInput}/>
    <br />
    Enter city : <input type="text" name="city" value={input.city} onChange={handleInput}/>
    <br />
    Enter contact : <input type="text" name="contact" value={input.contact} onChange={handleInput}/>
    <br />
    Enter email : <input type="text" name="email" value={input.email} onChange={handleInput}/>
    <br />

    <button onClick={handleInput}>Data Save !</button>
    </>
  )
  
}
export default App;