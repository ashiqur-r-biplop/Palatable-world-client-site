import React, { useEffect, useState } from "react";
import header from "./../../assets/header.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Chef from "../Chef/Chef";

const Home = () => {
  
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="lg:flex justify-between items-center">
          <div>
            <h1 className="logo">CEREALS</h1>
            <div className="m-2">
              <div className="my-3">
                <h5 className="title-text font-semibold">
                  Easy, soft and crispy chocolate croissants
                </h5>
                <p className="lg:w-8/12">
                  Are you looking for a delicious and easy breakfast treat? Look
                  no further than chocolate croissants! With just a few
                  ingredients and some basic kitchen skills, you can make
                  irresistible chocolate croissants that are soft, buttery, and
                  crispy on the outside.
                </p>
              </div>
              <button className="btn-primary ">
                BUY NOW
                <FontAwesomeIcon className="ms-2" icon={faShoppingCart} />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img style={{ width: "100%" }} src={header} alt="" />
          </div>
        </div>
        "{/* Our CHef */}"
        <div className="">
          <div className="py-20 text-center">
            <h1 className="section-title ">Our Chef</h1>
            <p className="mt-5">
              A chef's quality can vary depending on their skill level,
              experience, creativity, and passion for cooking.{" "}
            </p>
          </div>
          <Chef></Chef>
        </div>
      </div>
    </div>
  );
};

export default Home;
