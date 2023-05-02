import React from "react";
import NavBar from "../../sheared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../sheared/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
