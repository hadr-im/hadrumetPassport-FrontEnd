import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import usePlaces from "@/hooks/usePlaces"; // 1. IMPORT THE HOOK

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu((prev) => !prev);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/login");
  };
  const { categories, loading, error } = usePlaces();

  // A helper function to create a menu item
  const MenuItem = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => (
    <li>
      <Link to={to} onClick={handleMenu}>
        <button className="mt-1 w-full text-left items-center font-poppins flex font-semibold text-[18px] text-black hover:bg-[#f0f0f0] py-2 px-6">
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
            : "ease-in-out duration-500 z-50 fixed left-[-100%]"
        }
      >
        <ul className="cursor-pointer">
          <li className="ml-6 mt-5 cursor-pointer pt-2 font-poppins text-blue-950 text-[20px] font-semibold">
            Hadrumet Passport
          </li>

          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/my-profile">My profile</MenuItem>

          {/* 
            3. DYNAMICALLY GENERATE CATEGORY LINKS from the hook's state.
               This will only render the links once loading is false and there is no error.
          */}
          {!loading &&
            !error &&
            categories.map((category) => (
              <MenuItem key={category.id} to={`/${category.slug}`}>
                {category.name}
              </MenuItem>
            ))}

          {/* Other static links */}
          <MenuItem to="/events">Events</MenuItem>
          <MenuItem to="/emergency">Emergency numbers</MenuItem>
          <MenuItem to="/local-apps">Local Apps</MenuItem>
          <MenuItem to="/contacts">Contacts</MenuItem>

          <MenuItem to="/eps">Other EPs</MenuItem>
          <MenuItem to="/about-us">About Us</MenuItem>
            <button onClick={handleLogout} className="mt-1 w-full text-left items-center font-poppins flex font-semibold text-[18px] text-black hover:bg-[#f0f0f0] py-2 px-6">
              Log out
            </button>
          
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
