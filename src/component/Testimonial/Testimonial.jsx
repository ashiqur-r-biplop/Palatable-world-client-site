import React from "react";
import img1 from "./../../assets/1.jpg";
import img2 from "./../../assets/2.png";
import img3 from "./../../assets/3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "./../../CustomStyle.css";
const Testimonial = () => {
  return (
    <div className="grid-layout">
      <div className="lg:w-96 mx-auto border bg-base-100 " style={{maxWidth:"80vw"}}>
        <figure className="px-10 pt-10">
          <img
            src={img1}
            alt="Shoes"
            style={{ borderRadius: "50%", width: "50%", margin: "auto" }}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Gordon Ramsay</h2>
          <p>
            He is known for his expertise in cooking meat dishes and has a
            reputation for being a tough and demanding chef. His signature dish,
            beef Wellington, is a must-try for meat lovers.
          </p>
          <div className="flex" style={{ color: "#910000" }}>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStarHalfAlt}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="lg:w-96 mx-auto border bg-base-100 " style={{maxWidth:"80vw"}}>
        <figure className="px-10 pt-10">
          <img
            src={img3}
            alt="Shoes"
            style={{ borderRadius: "50%", width: "50%", margin: "auto" }}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Ina Garten</h2>
          <p>
            She is known for her simple yet elegant approach to cooking and is
            often called the "Barefoot Contessa." Her roasted chicken with
            vegetables is a classic comfort food dish that is both easy to make
            and delicious.
          </p>
          <div className="flex" style={{ color: "#910000" }}>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStarHalfAlt}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="lg:w-96 mx-auto border bg-base-100 " style={{maxWidth:"80vw"}}>
        <figure className="px-10 pt-10">
          <img
            src={img2}
            alt="Shoes"
            style={{ borderRadius: "50%", width: "50%", margin: "auto" }}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Massimo Bottura</h2>
          <p>
            He is an Italian chef who is renowned for his innovative and
            experimental approach to cooking. His restaurant, Osteria
            Francescana, has been named the best restaurant in the world several
            times.
          </p>
          <div className="flex" style={{ color: "#910000" }}>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStarHalfAlt}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
