import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";

const Responsive = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-50 h-screen w-[75%] bg-white px-8 pb-6 pt-16 text-black transition-all duration-200 rounded-r-xl shadow-md flex flex-col justify-between md:hidden`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="text xl space-y-4">
            {NavbarLinks.map(item => {
              return (
                <li>
                  <Link
                    to={item.link}
                    onClick={() => setShowMenu(false)}
                    className="mb-5 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Responsive;
