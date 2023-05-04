import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

const CardRecipe = () => {
  const chefRecipes = useLoaderData();
  const [controlDisable, setControlDisable] = useState(false);
  return (
    <div className="grid-layout">
      {chefRecipes?.map((recipe) => (
        <div key={recipe.id}>
          <div className="card w-96 border">
            <div className="card-body items-start ">
              <div className="flex justify-between items-start w-full">
                <h1 className="text-2xl  font-semibold">
                  {recipe?.recipes_name}
                </h1>

                <button
                  className="btn btn-black favoriteBtn"
                    onClick={() => setControlDisable(!controlDisable)}
                    disabled={controlDisable}
                >
                  <AiFillHeart
                    className={`bookmark ${  controlDisable ? "text-black" : "text-gray"}`}
                  ></AiFillHeart>
                </button>
              </div>
              <p>
                {" "}
                <span className="text-xl  font-semibold">
                  Recipes Instructions :
                </span>
                <span className="text-xll ">
                  {recipe?.recipes_instructions?.slice(0, 100)}.ETC
                </span>
              </p>
              <p>
                <span className="text-xl font-semibold">
                  Recipes Ingredients
                </span>
                {recipe?.recipes_ingredients?.map((r, i) => (
                  <li key={i} className="text-xll ">
                    {r}
                  </li>
                ))}
              </p>
              <p className="">
                <span className="text-xl font-semibold">Retting:</span>{" "}
                <span className="text-xll">
                  {recipe?.rating}{" "}
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardRecipe;
