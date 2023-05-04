import React from "react";
import { Outlet } from "react-router-dom";
import { Planets } from "react-preloaders";
import NavBar from "../sheared/NavBar";
import Footer from "../sheared/Footer";

const Main = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="md:min-h-[calc(100vh-293px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Planets time={200}></Planets>
    </>
  );
};

export default Main;
