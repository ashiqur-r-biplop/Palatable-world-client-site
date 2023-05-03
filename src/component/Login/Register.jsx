import { faEye, faEyeSlash, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleImg from "../../assets/google.png";
import gitHubImg from "../../assets/github.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const navigate = useNavigate();
  const { signUp, signInGoogle, signInGithub, ProfileUpdate } = useContext(
    AuthContext
  );

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    signUp(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setErrorMassage("");
        ProfileUpdate(name, photoUrl);
        console.log(loggedUser);
        navigate("/");
        form.reset();
      })
      .catch((err) => {
        setErrorMassage(err.message);
      });
  };
  const handleEmail = (e) => {
    const emailHandle = e.target.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailHandle)) {
      setErrorMassage("Email are not valid");
      return;
    }
  };
  const handlePassword = (e) => {
    const passwordHandle = e.target.value;
    console.log(passwordHandle);
    if (passwordHandle.length < 6) {
      setErrorMassage("Minimum six characters provide your password");
      return;
    } else if (!/^(?=.*[A-Za-z])/.test(passwordHandle)) {
      setErrorMassage("At least one letter");
    } else {
      setErrorMassage("");
    }
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
      <div style={{ margin: "50px 0px" }}>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col justify-center items-center h-full"
        >
          <div className="flex flex-col justify-start items-start fullForm lg:w-3/6 md:w-3/6  shadow-2xl">
            <h2 className="text-2xl mb-2" style={{ color: "#910000" }}>
              Please Register
            </h2>
            <input
              type="name"
              placeholder="Your Name"
              className="border"
              name="name"
              required
            />
            <input
              type="text"
              placeholder="Your Photo URL"
              className="border"
              name="photoUrl"
              required
            />
            <input
              type="email"
              placeholder="palatable.world@gmail.com"
              className="border"
              name="email"
              onChange={handleEmail}
            />
            <div className="w-full relative">
              <input
                type={`${toggleIcon ? "text" : "password"}`}
                className="border m-0"
                placeholder="******"
                name="password"
                onChange={handlePassword}
              />

              <span
                onClick={() => setToggleIcon(!toggleIcon)}
                className="absolute bottom-4 right-4 toggle-icon"
              >
                {toggleIcon ? (
                  <FontAwesomeIcon
                    className="block"
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
            <p className="text-red-500 mb-2 ">{errorMassage}</p>
            <p className="mb-2">
              Already have an account?{" "}
              <Link style={{ color: "#910000", fontWeight: 700 }} to="/login">
                Please Login
              </Link>
            </p>
            <input type="submit" value="Register" className="btn-primary" />

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
export default Register;
