import React from "react";
import { useLoaderData } from "react-router-dom";
import headerImg from "./../../assets/header2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Recipe.css";

const Recipe = () => {
  const recipes = useLoaderData();
  console.log(recipes);
  return (
    <div className="container mx-auto">
      <div className="">
        <h1
          style={{ height: "40vh" }}
          className=" border-red-400 text-center font-semibold text-3xl flex justify-center items-center"
        >
          All Recipes
        </h1>
      </div>
      <div className="grid-layout">
        {recipes?.map((recipe) => (
          <div key={recipe.id}>
            <div className="card w-96 border">
              <div className="card-body items-start ">
                <div className="flex justify-between items-start w-full">
                  <h1 className="text-2xl  font-semibold">
                    {recipe?.recipes_name}
                  </h1>
                  <FontAwesomeIcon
                    className="bookmark"
                    icon={faBookmark}
                  ></FontAwesomeIcon>{" "}
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
    </div>
  );
};

export default Recipe;
