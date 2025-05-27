import './App.css'
;
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./view/pages/Login/Login.tsx";
import {DefaultLayout} from "./view/common/DefaultLayeout/DefaultLayout.tsx";

function App() {
    return(
       <BrowserRouter>
           {/*<DefaultLayout/>*/}
           {/*Login nowana onama ekaka awoth me layout eka pennawa
           */}
           <Routes>
               <Route path="/*" element={<DefaultLayout/>}> </Route>
               <Route path="/login" element={<Login/>}></Route>

           </Routes>
       </BrowserRouter>
    );
}
export default App;