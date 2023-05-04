import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../sheared/NavBar";
import Footer from "../sheared/Footer";
import Spinner from "../Spinner/Spinner";

// import { Planets } from "react-preloaders";

const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading && <Spinner></Spinner>}
      <>
        {!loading && (
          <div>
            <NavBar></NavBar>
            <div className="md:min-h-[calc(100vh-293px)]">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
          </div>
        )}
      </>
    </>
  );
};

export default Main;
