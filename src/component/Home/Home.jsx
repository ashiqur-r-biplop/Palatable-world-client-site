import React, { useEffect, useState } from "react";
import header from "./../../assets/header.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Chef from "../Chef/Chef";
import Testimonial from "../Testimonial/Testimonial";
import Comment from "../Comment/Comment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigation } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="lg:flex flex flex-col-reverse lg:flex-row justify-between items-center" >
          <div className="lg:w-1/2">
            <h1
              className="logo lg:text-6xl lg:leading-[1.3]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Its Not Just Food, Its An Experience
            </h1>
            <div className="m-2">
              <div className="my-3">
                <p
                  style={{
                    lineHeight: "36px",
                    fontSize: "20px",
                    padding: "15px 0px",
                  }}
                >
                  Are you looking for a delicious and easy breakfast treat? Look
                  no further than chocolate croissants! With just a few
                  ingredients and some basic kitchen skills, you can make
                  irresistible chocolate croissants that are soft, buttery, and
                  crispy on the outside.
                </p>
              </div>
              <button className="btn-primary shadow-lg font-bold">
                BUY NOW
                <FontAwesomeIcon className="ms-2" icon={faShoppingCart} />
              </button>
            </div>
          </div>
          <div className="lg:w-3/5 ">
            <LazyLoadImage
              src={header}
              className="m-0 rounded my-3 lg:my-0"
              loading="lazy"
              effect="blur"
              alt="Chef"
              style={{ width: "80%", margin: "auto" }}
              placeholderSrc={header.blurhash}
            />
          </div>
        </div>

        <div className="">
          <div className="py-20 text-center">
            <h1 className="section-title uppercase">Our Chef</h1>
            <p className="mt-5 text-xl lg:w-1/2 lg:mx-auto">
              A chef's quality can vary depending on their skill level,
              experience, creativity, and passion for cooking.{" "}
            </p>
          </div>
          <Chef></Chef>
        </div>
        {/* our testimonial  */}
        <div>
          <div className="py-20 text-center">
            <h1 className="section-title uppercase">Our Testimonial</h1>
            <p className="mt-5 text-xl lg:w-1/2 lg:mx-auto">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue purus pretium ligula
            </p>
          </div>
          <Testimonial></Testimonial>
        </div>
        {/* Leave a reply */}
        <div>
          <div className="py-20 text-center">
            <h1 className="section-title">Our Comment</h1>
          </div>
          <Comment></Comment>
        </div>
      </div>
    </div>
  );
};

export default Home;
