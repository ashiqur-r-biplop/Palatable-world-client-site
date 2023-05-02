import React, { useEffect, useState } from "react";
import NavBar from "../../sheared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../sheared/Footer";
import Spinner from "../../Spinner/Spinner";

const Main = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldRender(true);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      {!shouldRender && <Spinner></Spinner>}
      {shouldRender && (
        <div>
          <NavBar></NavBar>
          <div className="md:min-h-[calc(100vh-293px)]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Main;
