import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import googleImg from "../../assets/google.png";
import gitHubImg from "../../assets/github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { login, signInGoogle, signInGithub } = useContext(AuthContext);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const [successMassage, setSuccessMassage] = useState("");
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || "/";
  console.log(from);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from)
        setSuccessMassage("login successful");
        setErrorMassage("");
      })
      .catch((err) => {
        setSuccessMassage("");
        setErrorMassage(err.message);
      });
  };

  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInGoogle(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => {});
  };
  const handleGithubLogin = () => {
    const githubProvider = new GithubAuthProvider();
    signInGithub(githubProvider);
    then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    }).catch((err) => {});
  };
  return (
    <div className="container mx-auto">
      <div style={{ height: "80vh" }}>
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center h-full"
        >
          <div className="flex flex-col justify-start items-start fullForm lg:w-2/6 md:w-3/6  shadow-2xl">
            <h2 className="text-2xl mb-2" style={{ color: "#910000" }}>
              Please Login
            </h2>
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
              <span
                onClick={() => setToggleIcon(!toggleIcon)}
                className="absolute bottom-4 right-4 toggle-icon"
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
              </span>
            </div>
            <p className="mb-3 text-end w-full forget-password">
              Forget Password
            </p>
            <span className="text-green-500 m-0">{successMassage}</span>
            <span className="text-red-500 m-0">{errorMassage}</span>
            <p className="mb-2">
              Don't Have an Account?{" "}
              <Link
                style={{ color: "#910000", fontWeight: 700 }}
                to="/register"
              >
                Please Register
              </Link>
            </p>
            <input type="submit" value="Login" className="btn-primary" />
            <div className="pt-5 flex items-center justify-between w-full">
              <p>Or Sign in with:</p>
              <div className="flex items-center justify-between">
                <img
                  onClick={handleGoogleLogin}
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
                  onClick={handleGithubLogin}
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

export default Login;
