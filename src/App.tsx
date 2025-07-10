import './App.css'
;
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./view/pages/Login/Login.tsx";
// src/App.tsx (or wherever your routes are defined)


// Add these routes to your routing configuration
// <Route path="/contact" element={<Contact />} />
// <Route path="/contacts" element={<ContactList />} />
import {DefaultLayout} from "./view/common/DefaultLayeout/DefaultLayout.tsx";

function App() {
    return(
       <BrowserRouter>
           {/*<DefaultLayout/>*/}
           {/*Login nowana onama ekaka awoth me layout eka pennawa
           */}
           <Routes>
               <Route path="/login" element={<Login/>}></Route>
               <Route path="/*" element={<DefaultLayout/>}> </Route>


           </Routes>
       </BrowserRouter>
    );
}
export default App;