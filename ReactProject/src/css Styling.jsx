App.jsx-----------------------------
import Cybrom1 from "./Cybrom1";
import Bhopal from "./Bhopal";
const App=()=>{
    return(
        <>
       <h1>Welcome Cybrom</h1>
       <Cybrom1/>
       <Bhopal/>
        </>
    )
}
export default App;
----------------------------------
main.jsx
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./r1.css";

createRoot(document.getElementById('root')).render(<App />)
---------------------------------------------------------
r1.jsx-------------------------------------------------
body{
    background-color: brown;
}
.data{
    background-color: yellowgreen;
    text-decoration: underline;
}
#data1{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: blue;
}
