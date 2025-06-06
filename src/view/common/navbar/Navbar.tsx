import { useState } from "react";
import { Link } from "react-router-dom";
import log from '../../../assets/log.png';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex items-center justify-between p-4 bg-[#222] shadow-md">
            <div className="flex items-center">
                <img src={log} alt="Logo" className="h-10 w-auto mr-3" />
                <p className="text-xl font-bold text-[limegreen]">OrgShopzi</p>
            </div>

            {/* Mobile burger button */}
            <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8 text-2xl">
                <li>
                    <Link to="/" className=" text-yellow-400 hover:text-[limegreen] transition-colors">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-yellow-400 hover:text-[limegreen] transition-colors">About</Link>
                </li>

                <li>
                    <Link to="/contact" className="text-yellow-400 hover:text-[limegreen] transition-colors">Contact</Link>
                </li>
            </ul>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-[#333] md:hidden z-10">
                    <ul className="flex flex-col py-2">
                        <li className="px-4 py-2 hover:bg-[#444]">
                            <Link to="/" className="text-yellow-400 hover:text-[limegreen] block">Home</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-[#444]">
                            <Link to="/about" className="text-yellow-400 hover:text-[limegreen] block">About</Link>
                        </li>

                        <li className="px-4 py-2 hover:bg-[#444]">
                            <Link to="/contact" className="text-yellow-400 hover:text-[limegreen] block">Contact</Link>
                        </li>
                    </ul>
                </div>
            )}

            <div className="hidden md:block">
                <button className="bg-[#00bcd4] hover:bg-[limegreen] text-white px-5 py-2 rounded transition-colors">
                    <Link to="/login">Sign In</Link>
                </button>
            </div>
        </div>
    );
}