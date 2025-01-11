import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://learnerbits.com/wp-content/uploads/2023/10/download-1.png"
              className="mr-1 h-8"
              alt="Logo"
            />  
          </Link>
          <div className="flex items-center lg:order-2">
            
            <Link
              to="#"
              className="text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-4 -mr-96">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 lg:p-0 ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
                    }`
                  }
                >
                  Crypto Taxes 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/free_tools"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 lg:p-0 ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
                    }`
                  }
                >
                  Free Tools 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Resources"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 lg:p-0 ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
                    }`
                  }
                >
                  Resources Center
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
