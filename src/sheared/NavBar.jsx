import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import avatar from "../assets/user.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, Favorite } = useContext(AuthContext);
  // console.log(user?.photoURL);
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="bg-[#974e4e20]">
      <div className="px-4 py-5 mx-auto container ">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="palatable world"
            title="palatable world"
            className="inline-flex items-center"
          >
            <span className="">
              <h1 className="logo lg:uppercase">Palatable world</h1>
            </span>
          </Link>
          <div className="flex items-center ">
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/recipes"
                  aria-label="recipes"
                  title="Recipes"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Blog"
                  aria-label="Blog"
                  title="Blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            {user ? (
              <button
                onClick={handleLogout}
                className="btn-primary lg:ms-9 hidden lg:flex"
              >
                logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn-primary lg:ms-9 hidden lg:flex">
                  Login
                </button>
              </Link>
            )}
            <div className="relative">
              {user ? (
                <>
                  <img
                    title={`${user?.displayName ? user?.displayName : ""}`}
                    style={{
                      width: "50px",
                      height: "px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    className="md:ms-3 hidden lg:block"
                    src={user?.photoURL}
                    alt=""
                  />
                  <>
                    {user?.photoURL && (
                      <>
                        {Favorite.length > 0 && (
                          <p className="absolute hidden lg:block -top-2 text-xxl bg-white px-2 font-semibold -right-2 rounded-full">
                            {Favorite.length}
                          </p>
                        )}
                      </>
                    )}
                  </>
                </>
              ) : (
                <img
                  style={{ width: "50px", height: "px" }}
                  className="md:ms-3 hidden lg:block"
                  src={user && avatar}
                  alt=""
                />
              )}
            </div>
          </div>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="palatable world"
                        title="palatable world"
                        className="inline-flex items-center"
                      >
                        <span className="">
                          <h1 className="logo">Palatable world</h1>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <NavLink
                          to="/recipes"
                          aria-label="recipes"
                          title="Recipes"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Recipes
                        </NavLink>
                      </li>
                      <li>
                        <Link
                          to="/Blog"
                          aria-label="Blog"
                          title="Blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      {user ? (
                        <li>
                          <button
                            onClick={handleLogout}
                            className="btn-primary  lg:flex"
                          >
                            logout
                          </button>
                        </li>
                      ) : (
                        <li>
                          <Link to="/login">
                            <button className="btn-primary  lg:flex">
                              Login
                            </button>
                          </Link>
                        </li>
                      )}
                      {user ? (
                        <img
                          title={`${
                            user?.displayName ? user?.displayName : ""
                          }`}
                          style={{
                            width: "50px",
                            height: "px",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          className="md:ms-3"
                          src={user?.photoURL}
                          alt=""
                        />
                      ) : (
                        <img
                          style={{ width: "50px", height: "px" }}
                          className="md:ms-3"
                          src={avatar}
                          alt=""
                        />
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
