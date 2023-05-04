import React from "react";
import "../CustomStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl text-center lg:w-full text-black uppercase lg:text-3xl">
          palatable world
        </h1>

        <div className="flex justify-center items-center mx-auto my-2 lg:w-3/5 footerEmail ">
          <input
            type="text"
            style={{ outline: "none", border: "none" }}
            className="m-0"
            placeholder="Your Email"
          />

          <button className="py-4 uppercase font-semibold px-2 lg:px-20">Subscribe</button>
        </div>

        <div className="md:flex justify-between m-3 lg:w-full">
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <p className="text-gray-400">Home</p>
            <p className="text-gray-400">ABout Us</p>
            <p className="text-gray-400">Contact us</p>
          </div>
          <div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <p className="text-gray-400">Web: www.palatable.com</p>
              <p className="text-gray-400">Fb: www.fb.palatable/page/chef </p>
              <p className="text-gray-400">Gmail: palatable@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
