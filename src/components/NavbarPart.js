import { Avatar, Dropdown, DropdownHeader, Navbar } from "flowbite-react";
import Switch from "./Switch";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// ... (existing imports)

// ... (existing imports)

const NavbarPart = () => {
  const { logout, currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const renderAvatar = () => {
    return (
      <img
        src={currentUser?.photoURL || "./profile.png"} // Provide a default image or placeholder
        className="rounded-full h-8 w-8 object-cover mr-2"
        alt="User Avatar"
      />
    );
  };

  return (
    <>
      <div
        onClick={() => window.scroll(0, 0)}
        className="bg-slate-100 fixed cursor-pointer z-20 dark:bg-slate-900 w-full top-0 h-[70px] flex justify-center gap-10 sm:justify-around items-center"
      >
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
        <div className="flex md:order-2 justify-center items-center">
          <div className="flex items-center me-3">
            <h1 className="lowercase text-md font-semibold dark:text-white">
              {currentUser && currentUser.displayName}
            </h1>
          </div>
          <Switch />
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <>
                {renderAvatar()}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="red"
                  className="w-6 h-6"
                >
                  {/* Your existing dropdown icon path */}
                </svg>
              </>
            }
          >
            <Dropdown.Header>
              <Dropdown.Item>
                <NavLink to="/register">Register </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/login">Login </NavLink>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
            </Dropdown.Header>
          </Dropdown>
        </div>
      </div>
      <div className="h-[55px]"></div>
    </>
  );
};

export default NavbarPart;
