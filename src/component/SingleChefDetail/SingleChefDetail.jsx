import { faBookmark, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleChefDetail = () => {
  const [chefSingleData, setChefSingleData] = useState(null);
  const chefRecipes = useLoaderData();
  const id = useParams(null);
  useEffect(() => {
    fetch(
      `https://palatable-world-client-site-ashiqur23.vercel.app/chef/${id.id}`
    )
      .then((res) => res.json())
      .then((data) => setChefSingleData(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="my-5">
        <div className="md:flex justify-between items-center">
          <div>
            <h1 className="font-bold text-5xl" style={{ color: "#910000" }}>
              {chefSingleData?.chefName}
            </h1>
            <div className=" text-2xl">
              <p>Recipes Quantity: {chefSingleData?.recipes_quantity}</p>
              <p>Years Of Experience: {chefSingleData?.years_of_experience}</p>
              <p>Total Likes: {chefSingleData?.total_like}</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              className="m-3"
              style={{ width: "100%" }}
              src={chefSingleData?.chefPhoto}
              alt=""
            />
          </div>
        </div>
        <div className="my-20">
          <div className="py-20">
            <h1 className="section-title text-center">Our Recipes</h1>

            <div className="grid-layout">
              {chefRecipes?.map((recipe) => (
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
        </div>
      </div>
    </div>
  );
};

export default SingleChefDetail;
