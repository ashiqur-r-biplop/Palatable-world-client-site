import React from "react";
import NavBar from "../../sheared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../sheared/Footer";
// import Spinner from "../../Spinner/Spinner";
import { Planets } from "react-preloaders";

const Main = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="md:min-h-[calc(100vh-293px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      {/* <Planets time={500}></Planets> */}
    </>
  );
};

export default Main;
