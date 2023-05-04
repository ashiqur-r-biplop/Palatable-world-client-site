import React, { Suspense, lazy } from "react";
import NavBar from "../../sheared/NavBar";
// const Navbar = lazy(() => import("../../sheared/NavBar"));
import { Outlet } from "react-router-dom";
// const Outlet = lazy(() => import("react-router-dom"));
import Footer from "../../sheared/Footer";
// const Footer = lazy(() => import("../../sheared/Footer"));
import Spinner from "../../Spinner/Spinner";
// import { Planets } from "react-preloaders";

const Main = () => {
  return (
    <>
    {/*   <Suspense
        fallback={
          <div>
            Please Wait
          </div>
        }
      > */}
        <NavBar />
        <div className="md:min-h-[calc(100vh-293px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        {/* <Planets time={500}></Planets> */}
      {/* </Suspense> */}
    </>
  );
};

export default Main;
