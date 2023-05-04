import React, { useState, useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Rating, Star } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const SignleRecipe = ({ recipe }) => {
  const [dataId, setDataId] = useState([]);
  const { setFavorite } = useContext(AuthContext);
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#910000",
  };

  const handleBookMark = (id) => {
    setFavorite((prev) => [...prev, id]);

    setDataId([...dataId, id]);
    Swal.fire({
      title: "Favorite Successful",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  return (
    <div className="card lg:w-96 border mx-auto">
      <div className="card-body items-start ">
        <div className="flex justify-between items-start w-full">
          <h1 className="text-2xl  font-semibold">{recipe?.recipes_name}</h1>

          <button
            className={`btn btn-black favoriteBtn ${
              dataId.includes(recipe.id) ? "bg-gray-500" : "bg-[#910000]"
            }`}
            onClick={() => handleBookMark(recipe.id)}
            disabled={dataId.includes(recipe.id)}
          >
            <AiFillHeart className="bookmark"></AiFillHeart>
          </button>
        </div>
        <p>
          {" "}
          <span className="text-xl  font-semibold">Recipes Instructions :</span>
          <span className="text-xll ">
            {recipe?.recipes_instructions?.slice(0, 100)}.ETC
          </span>
        </p>
        <>
          <span className="text-xl font-semibold">Recipes Ingredients</span>
          {recipe?.recipes_ingredients?.map((r, i) => (
            <li key={i} className="text-xll ">
              {r}
            </li>
          ))}
        </>
        <div className="">
          <span className="text-xl font-semibold">Retting:</span>{" "}
          <span className="text-xll">
            {recipe?.rating}
            <Rating
              style={{ maxWidth: 250 }}
              value={recipe?.rating}
              readOnly
              itemStyles={myStyles}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignleRecipe;
