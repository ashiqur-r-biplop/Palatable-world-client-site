import { faEye, faEyeSlash, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleImg from "../../assets/google.png";
import gitHubImg from "../../assets/github.png";

const Register = () => {
    const [toggleIcon, setToggleIcon] =useState(false)
  return (
    <div className="container mx-auto">
      <div style={{ height: "100vh" }}>
        <form className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col justify-start items-start fullForm shadow-2xl">
            <h2 className="text-2xl mb-2" style={{ color: "#910000" }}>
              Please Register
            </h2>
            <input
              type="email"
              placeholder="Your Name"
              className="border"
              name="email"
            />
            <input
              type="email"
              placeholder="Your Photo URL"
              className="border"
              name="email"
            />
            <input
              type="email"
              placeholder="palatable.world@gmail.com"
              className="border"
              name="email"
            />
            <div className="w-full relative">
              <input
                type={`${toggleIcon ? "text" : "password"}`}
                className="border m-0"
                placeholder="******"
                name="password"
              />
              <div
                onClick={() => setToggleIcon(!toggleIcon)}
                className="w-full block absolute bottom-4 -right-52 toggle-icon"
              >
                {toggleIcon ? (
                  <FontAwesomeIcon
                    className="block "
                    icon={faEyeSlash}
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    className="block"
                    icon={faEye}
                  ></FontAwesomeIcon>
                )}
              </div>
            </div>
            <p className="mb-3 text-end w-full forget-password">
              Forget Password
            </p>
            <p className="mb-2">
              Already have an account?{" "}
              <Link
                style={{ color: "#910000", fontWeight: 700 }}
                to="/login"
              >
                Please Login
              </Link>
            </p>
            <input type="submit" value="Login" className="btn-primary" />
            <div className="pt-5 flex items-center justify-between w-full">
              <p>Or Sign in with:</p>
              <div className="flex items-center justify-between">
                <img
                  style={{
                    width: "50px",
                    marginRight: "10px",
                    border: "2px solid #910000",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                  src={googleImg}
                  alt=""
                />
                <img
                  style={{
                    width: "50px",
                    marginRight: "10px",
                    border: "2px solid #910000",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                  src={gitHubImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
