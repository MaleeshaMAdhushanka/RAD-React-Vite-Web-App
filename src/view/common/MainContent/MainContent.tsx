// import './MainContenet.css'
// import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
export function MainContent() {
    return (
        <div className="container mx-auto px-4 py-8 bg-[var(--background)] min-h-screen">

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>



            </Routes>
        </div>

    );
}