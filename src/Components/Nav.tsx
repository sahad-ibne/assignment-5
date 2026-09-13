import { HiMenu } from "react-icons/hi";
import logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 lg:px-12 py-3.5">

            <div className="flex lg:hidden items-center justify-between w-full">

                <div className="flex-1 flex justify-start">
                    <div className="text-2xl text-gray-700">
                        <HiMenu />
                    </div>
                </div>

                <div className="flex-1 flex justify-center">
                    <img src={logo} alt="Dev Stack Logo" className="h-7 w-auto object-contain" />
                </div>

                <div className="flex-1 flex justify-end items-center gap-2">
                    <button className="text-xs font-semibold text-slate-700 px-1">
                        Sign In
                    </button>
                    <button className="bg-pink-600 text-white text-xs font-medium px-3.5 py-1.5 rounded-full shadow-sm">
                        Sign Up
                    </button>
                </div>

            </div>

            <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto">

                <div className="flex items-center gap-2">
                    <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
                </div>

                <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#home" className="text-pink-600 font-semibold">Home</a>
                    <a href="#technologies" className="">Technologies</a>
                    <a href="#projects" className="">Projects</a>
                    <a href="#about" className="">About</a>
                    <a href="#contact" className="">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-semibold text-slate-700 ">
                        Sign In
                    </button>
                    <button className="bg-pink-600  text-white text-sm font-medium px-5 py-2 rounded-full">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;