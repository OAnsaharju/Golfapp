import React, { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu function
  const onToggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle between true and false
  };

  return (
    <header className="bg-[#4B5B4C] text-white p-4">
      <nav className="flex justify-between items-center mx-auto w-[90%] md:mt-5 md:mb-5 ">
        {/* Logo/Title Section */}
        <div>
          <h1 className="text-2xl font-bold m-2 font-raleway">Poikainpelit</h1>
        </div>

        {/* Menu Links */}
        <div
          className={`md:static absolute bg-[#4B5B4C] md:min-h-fit min-h-[60vh] left-0 transition-all duration-300 ease-in-out md:w-auto w-full px-5 
            ${
              menuOpen
                ? "top-[5.7vh] flex justify-left items-center"
                : "top-[-100%]"
            }`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500 hover:underline" href="/">
                HOME
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 hover:underline" href="/stats">
                STATISTICS
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 hover:underline"
                href="/content"
              >
                CONTENT
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 hover:underline" href="/util">
                RANDOMIZER
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          {menuOpen ? (
            <RiCloseFill
              onClick={onToggleMenu}
              className="text-3xl cursor-pointer"
            />
          ) : (
            <RiMenuFill
              onClick={onToggleMenu}
              className="text-3xl cursor-pointer"
            />
          )}
        </div>
      </nav>
      <div className="mx-auto bg-white h-[2px] w-[90%]"></div>
    </header>
  );
};

export default Navbar;
