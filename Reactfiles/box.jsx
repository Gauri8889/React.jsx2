App.jsx------------------------
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
------------------------------
Bhopal.jsx-------------------
const Bhopal = () => {
    return (
        <>
            <div className="main">
                <div className="one">
                    <div className="two">
                        <div className="three">
                            <h1 id="hh">Cybrom</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bhopal;