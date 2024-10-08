import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Insert "./pages/Insert";

import Display from "./pages/Display";

  const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routers>
            <Route path="/" element={<Layout/>} />
                <Route index element={<Home/>}/>
                <Route path="home" element={< Home/>}/>
                <Route path="insert" element={< Insert/>}/>
                <Route path="display" element={< Display/>}/>
            </Route>
        </Routers>
        </BrowserRouter>
        </>
    )
  }
  export default App;