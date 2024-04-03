import { useState } from 'react';
import "../../styles/Navbar.scss";
import { Link, useLocation } from 'react-router-dom';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  return (
    <>
      <div className="flex flex-wrap">
        <section className="relative mx-auto">
          <nav className="bg-white text-white w-screen border-b-2 border-gray-300 shadow-md">
            <div className="max-w-7xl mx-auto px-5 py-4">
              <div className="flex justify-between">
                <div className="flex space-x-8">
                  <div>
                    <Link to="/">
                      <a href="#" className="flex items-start py-5 px-2 text-gray-700 hover:text-gray-900">
                        <img style={{ width: "140px" }} src="https://agora2030.org/wp-content/uploads/2022/10/logo-14.png" />
                      </a>
                    </Link>
                  </div>
                  <div className="hidden lg:flex items-center space-x-1">
                    <li><a className="hover:text-blue-800 font-normal text-base text-gray-700" href="#">Quiénes somos</a></li>
                    <li className="ml-4"><a className="hover:text-blue-800 font-normal text-base text-gray-700" href="#">Programas</a></li>
                    <li className="ml-4"><a className="hover:text-blue-800 font-normal text-base text-gray-700" href="#">Impacto</a></li>
                    <li className="ml-4"><a className="hover:text-blue-800 font-normal text-base text-gray-700" href="#">Súmate</a></li>
                    <li className="ml-4">
                      <Link to="/blog" className={`hover:text-blue-800 text-base text-gray-700 ${location.pathname === '/blog' ? 'font-bold text-blue-800' : ''}`}>Blog</Link>
                    </li>
                    <li className="ml-4"><a className="hover:text-blue-800 font-normal text-base text-gray-700" href="#">Recursos</a></li>
                    <li className="ml-4"><a className="hover:text-blue-800 font-normal text-base text-gray-700" href="#">Sedes</a></li>
                    <li className="ml-4">
                      <a style={{ fontWeight: "700" }} className="hover:text-pink-700 text-[#19417F]  text-lg" href="#">Change Lab</a>
                    </li>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center">
                  <button id="button" className="bg-pink-700 shadow-xl hover:bg-pink-800 text-white font-bold rounded-full p-1 w-28 mb-2 sm:mb-0 sm:mr-2">Donate</button>
                  <div className="hidden sm:flex items-center">
                    <button className="rounded-lg px-3 py-1 bg-gray-800 text-gray-100 mr-2 sm:text-sm">ES</button>
                    <p className="text-gray-700 hidden sm:block">EN</p>
                  </div>
                </div>
                <div className="lg:hidden flex items-center">
                  <button className="mobile-menu-button flex items-center justify-center bg-gray-200 rounded-lg w-10 h-10" onClick={toggleMenu}>
                    {isOpen ? (
                      <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className={`lg:hidden menu-container ${isOpen ? 'menu-open overflow-x-hidden' : 'menu-closed'}`}>
              <div className="flex flex-col items-center mt-2">
                <button className="block w-full py-2 px-4 text-lg font-bold hover:bg-gray-400 hover:text-white focus:outline-none text-gray-700">
                  Quiénes somos
                </button>
                <button className="block w-full py-2 px-4 text-lg font-bold hover:bg-gray-400 hover:text-white focus:outline-none text-gray-700">
                  Programas
                </button>
                <button className="block w-full py-2 px-4 text-lg font-bold hover:bg-gray-400 hover:text-white focus:outline-none text-gray-700">
                  Impacto
                </button>
                <button className="block w-full py-2 px-4 text-lg font-bold hover:bg-gray-400 hover:text-white focus:outline-none text-gray-700">
                  Súmate
                </button>
                <button className="block w-full py-2 px-4 text-lg font-bold hover:bg-gray-400 hover:text-white focus:outline-none text-gray-700">
                <Link to="/blog">
                  Blog
                </Link>
                </button>
                <button className="block w-full py-2 px-4 text-lg font-bold hover:bg-gray-400 hover:text-white focus:outline-none text-gray-700">
                  Recursos
                </button>
                <button className="block w-full py-2 px-4 text-lg font-bold hover:bg-gray-400 hover:text-white focus:outline-none text-gray-700">
                  Sedes
                </button>
                <button className="block w-full py-2 px-4 text-lg font-bold hover:bg-gray-400 hover:text-white focus:outline-none text-gray-700">
                  Change Lab
                </button>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
}
