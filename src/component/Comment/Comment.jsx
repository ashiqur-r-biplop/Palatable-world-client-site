import React from "react";
import ReactStars from "react-rating-stars-component";

import "./comment.css";

const Comment = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="m-3">
      <h1 className="uppercase text-xl font-bold">Leave a Reply</h1>
      <p className="text-lg">You email address will no be publish. Required fields are marked.</p>
      <div className="flex items-center">
        <span className="me-2">Retting </span>{" "}
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#910000"
        />
      </div>
      <div className="flex mx-auto flex-col justify-start items-start w-full">
        <div className="allComment-input mx-auto">
          <textarea
            style={{ borderRadius: "5px" }}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Comment"
            required
          ></textarea>
          <input
            style={{ borderRadius: "5px" }}
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            style={{ borderRadius: "5px" }}
            type="Email"
            placeholder="Your Email"
            required
          />
          <input
            style={{ borderRadius: "5px" }}
            type="Email"
            placeholder="Website"
            required
          />
        </div>
        <div className="flex justify-start items-start my-3">
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <p className="ms-1">
            Save my name, email and website in this browser for the next time I
            comment.
          </p>
        </div>
        <button className="btn-primary">Post Comment</button>
      </div>
    </div>
  );
};

export default Comment;
