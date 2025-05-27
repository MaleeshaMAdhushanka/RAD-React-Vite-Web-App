// import './Foooter.css'
import log from "../../../assets/log.png";

export function Footer() {
    return (
        <footer className="bg-[#222] text-white py-8 mt-auto">
            <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center">
                <div className="flex items-center mb-4 justify-center">
                    <img src={log} alt="Logo" className="h-10 w-auto mr-3"/>
                    <span className="text-xl font-bold text-[limegreen] font-['Arial_Black']">OrgShopzi</span>
                </div>
                <div className="pt-4 border-t border-gray-700 w-full text-center">
                    <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} OrgShopzi. All rights
                        reserved.</p>
                </div>
            </div>
        </footer>
    );
}