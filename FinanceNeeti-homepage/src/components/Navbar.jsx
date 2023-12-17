import React, { useState } from "react";
import Logo from "../assets/financeneeti-logo.png";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Posts",
    link: "/#posts",
  },
  {
    id: 3,
    name: "Optimizer",
    link: "/#optimizer",
  },
  {
    id: 4,
    name: "News",
    link: "/#news",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="shadow-md bg-navbg dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-4 sm:py-0">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              <a href="#" className="font-bold text-2xl sm:text-3xl py-5">
                FinanceNeeti
              </a>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <DarkMode />
              <div className="sm:hidden">
                <button
                  onClick={toggleMenu}
                  className="block text-gray-500 hover:text-navyblue focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                    />
                  </svg>
                </button>
              </div>
              <ul
                className={`${
                  showMenu ? 'block' : 'hidden'
                } sm:flex items-center gap-4 ml-auto`}
              >
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-navyblue"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                <li>|</li>
                <li>
                  <a href="/register" className="py-4 px-4 hover:text-navyblue">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/login" className="py-2 px-4 pr-10">
                    <span className="bg-navyblue text-white py-1 px-4 rounded hover:bg-white hover:text-navyblue">
                      Login
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
