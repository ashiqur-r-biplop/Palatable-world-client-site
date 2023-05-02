import React from "react";
import "../CustomStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl text-center w-full text-black">
          palatable world
        </h1>

        <div className="flex justify-center items-center mx-auto my-2 footerEmail ">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>

        <div className="flex justify-between w-full">
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
