import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { appData } from "@/data/appData"; // Import your data

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu((prev) => !prev);

  // A helper function to create a menu item
  const MenuItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <li>
      <Link to={to} onClick={handleMenu}>
        <button className="mt-2 w-full text-left items-center font-poppins flex font-semibold text-[19px] text-black hover:bg-[#f0f0f0] py-2 px-6">
          {children}
        </button>
      </Link>
    </li>
  );

  return (
    <div>
      {/* Overlay */}
      {menu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={handleMenu}
        ></div>
      )}
      
      {/* Sidedrawer */}
      <div
        className={
          menu
            ? "z-50 fixed left-0 top-0 rounded-r-[10px] w-[60%] h-full bg-white ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <ul className="cursor-pointer">
          <li className="ml-6 mt-5 cursor-pointer pt-2 font-poppins text-blue-950 text-[20px] font-semibold">
            Hadrumet Passport
          </li>
          
          <MenuItem to="/">Home</MenuItem>

          {/* DYNAMICALLY GENERATE CATEGORY LINKS */}
          {appData.map(category => (
            <MenuItem key={category.id} to={`/${category.slug}`}>
              {category.name}
            </MenuItem>
          ))}
          
          {/* Other static links */}
          <MenuItem to="/emergency">Emergency numbers</MenuItem>
          <MenuItem to="/profile">My profile</MenuItem>
          <MenuItem to="/support">Support</MenuItem>
          <MenuItem to="/logout">Log Out</MenuItem>
        </ul>
      </div>

      {/* Navbar Bar */}
      <div className="flex justify-between pt-3 items-center ml-6 lg:ml-20 mr-6">
        <div className="flex items-center">
          <button
            className="pt-2 cursor-pointer flex lg:hidden"
            onClick={handleMenu}
            aria-label="Open menu"
          >
            <RxHamburgerMenu color="#000000" size={28} />
          </button>
          <div className="pt-2 ml-4 font-poppins text-blue-950 text-[20px] font-semibold">
            Hello, Oussama Rachdi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;