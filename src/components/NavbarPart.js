"use client";

import { Avatar, Dropdown, DropdownHeader, Navbar } from "flowbite-react";
import Switch from "./Switch";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const NavbarPart = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Navbar fluid className=" h-[70px] p-3  items-center">
      <div>
        <Link to="/">
          <span className="self-center flex flex-row items-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <img
              src="/favicon.ico"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            Movie App
          </span>
        </Link>
      </div>
      <div className="flex md:order-2">
        <Switch />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clip-rule="evenodd"
              />
            </svg>
          }
        >
          <Dropdown.Header>
            <Dropdown.Item>
              <NavLink to="/register">Register </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/login">Login </NavLink>
            </Dropdown.Item>
          </Dropdown.Header>

          <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};
export default NavbarPart;
