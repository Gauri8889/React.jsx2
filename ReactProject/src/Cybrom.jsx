App.jsx---------------------
import Cybrom from "./Cybrom";
 const Student={
  "rollno": 121,
  "name":"Ayushi",
  "city":"indore",
  "fees":9999
 }
 const App=()=>{
  return(
    <>
    <h1>Wellcome!!!</h1>
    <Cybrom
    stunm={Student.name}
    sturno={Student.rollno}
    stucity={Student.city}
    stufs={Student.fees}
    />
    </>
  )
 }
export default App;
----------------------------------
Cybrom.jsx...
const Cybrom=(props)=>{
    return(
        <>
        <h1> Student Rollno :{props.sturno}</h1>
        <h1> Student Name :{props.stunm}</h1>
        <h1> Student City :{props.stucity}</h1>
        <h1> Student Fees :{props.stufs}</h1>
        </>~

    
)
}
export default Cybrom;