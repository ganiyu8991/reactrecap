import { Link, useLocation, useNavigate} from "react-router-dom";
import userStore from "../Store/userStore";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // A cleaner icon for architectural style
import { useState } from "react";
import Loader from "./loader";

export default function NavBar() {
  const { user, logout } = userStore();
  const location = useLocation();
  const [isOpen, setisOpen] = useState(false);
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const handleNavigation = (path) => {
   setisOpen(false);
   setIsNavigating(true);
    setTimeout(() => {
    setIsNavigating(false);
    navigate(path);
    }, 1000); 
  };
 

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  // Helper to keep logic clean and styling consistent
  const navLinks = [
    { name: "Research & Insight", path: "/research" },
    { name: "Career", path: "/career" },
    { name: "People", path: "/people" },
    { name: "Projects", path: "/projects" },
    { name: "About us", path: "/about" },
    { name: "Contact us", path: "/contact" },
    { name: "Join us", path: "/signup" },
  ];

  

  return (
    
    <div>
      {isNavigating && (
        <div className="fixed inset-0 z-[999] bg-white flex items-center justify-center">
          <Loader />
        </div>
      )}
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100]">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        
        <div
        onClick={() => handleNavigation("/")}
        className="flex items-center space-x-2 group cursor-pointer">
        {/* LOGO AREA */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <span className="text-white font-bold text-xs">A</span>
          </div>
          <h1 className="text-xl font-bold tracking-tighter text-black uppercase">
            Arch<span className="font-light text-gray-500">Build</span>
          </h1>
        </div>
        </div>
        

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <div
                onClick={() => handleNavigation(link.path)}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 hover:text-blue-600 cursor-pointer ${
                  location.pathname === link.path 
                    ? "font-bold text-black border-b-2 border-black pb-1" 
                    : "text-gray-500 font-medium"
                }`}
              >
                {link.name}
              </div>
            </li>
          ))}
          {/* Example of Logic check preserved */}
          {user && <li className="text-xs font-semibold px-3 py-1 bg-gray-400 rounded-full">Hi, {user.email}</li>}

          {user && (
  <li className="flex items-center space-x-3">
    {/* <span className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded-full">
      Hi, {user.email}
    </span> */}
    <button 
      onClick={logout}
      className="text-xs uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors font-bold cursor-pointer"
    >
      Logout
    </button>
  </li>
)}
        </ul>

        {/* MOBILE HAMBURGER ICON */}
        <div className="md:hidden cursor-pointer p-2" onClick={toggleMenu}>
          <GiHamburgerMenu className="text-2xl text-black" />
        </div>

        {/* MOBILE SIDEBAR OVERLAY */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" 
            onClick={toggleMenu}
          />
        )}

        {/* MOBILE SIDEBAR */}
        <div
          className={`fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out md:hidden`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-end mb-8" onClick={toggleMenu}>
              <IoClose className="text-3xl text-gray-400 hover:text-black transition-colors" />
            </div>

            <div className="mb-12">
               <h1 className="text-xl font-bold tracking-tighter uppercase">ArchBuild</h1>
            </div>

            <ul className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <li key={link.name} onClick={toggleMenu}>
                  <div
                    onClick={() => handleNavigation (link.path)}
                    className="text-lg font-light tracking-wide text-gray-800 hover:text-blue-600 block cursor-pointer"
                  >
                    {link.name}
                  </div>
                </li>
              ))}
              {user && (
  <div className="mt-8 border-t border-gray-100 pt-6">
    <p className="text-sm text-gray-400 mb-4 truncate">{user.email}</p>
    <button 
      onClick={logout}
      className="w-full py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-all"
    >
      Log Out
    </button>
  </div>
)}
            </ul>

            <div className="mt-auto border-t pt-6">
               <p className="text-xs text-gray-400">© 2026 ArchBuild Research & Insights</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </div>
  );
}