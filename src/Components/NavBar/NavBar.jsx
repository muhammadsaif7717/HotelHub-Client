import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import DarkMode from "../DarkMode/DarkMode";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext)

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // console.log('User logged out')
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const links = (
    <>
      <NavLink className="px-5" to="/">
        Home
      </NavLink>
      <NavLink className="px-5" to="/rooms">
        Rooms
      </NavLink>
      <NavLink className="px-5" to="/my-bookings">
        My Bookings
      </NavLink>
      <NavLink className="px-5" to="/about">
        About
      </NavLink>
      <NavLink className="px-5" to="/contact">
        Contact
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <nav
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              {links}
            </nav>
          </div>
          <Link to={`/`} className="btn btn-ghost text-xl font-bold p-0">HotelHub</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <nav className="menu menu-horizontal px-1">{links}</nav>
        </div>
        <div className="navbar-end gap-2">
          <div className="pt-4">
            <DarkMode></DarkMode>
          </div>
          <div>
            {
              user ?
                <img src={user.photoURL} className="rounded-full w-12" />
                :
                ''
            }
          </div>
          <div>
            {
              user ?
                <button onClick={handleSignOut} className="btn btn-primary border-none bg-orange-500 text-white px-0 w-[76px]"> Sign Out</button>
                :
                <Link
                  to={`/sign-in`}
                  className="btn btn-primary border-none bg-orange-500 text-white px-0 w-[76px]"
                >
                  Sign In
                </Link>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
