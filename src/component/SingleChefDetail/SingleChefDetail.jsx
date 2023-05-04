import React, { createContext, useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import "./SingleChefDetail.css";
import ErrorPage from "../ErrorPage/ErrorPage";
import Spinner from "../../Spinner/Spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SignleRecipe from "../signleRecipe/SignleRecipe";

export const Favorite = createContext(null);

const SingleChefDetail = () => {
  const [chefSingleData, setChefSingleData] = useState(null);

  const chefRecipes = useLoaderData();
  const [imgLoad, setImgLoad] = useState(false);

  const id = useParams(null);
  useEffect(() => {
    fetch(
      `https://palatable-world-client-site-ashiqur23.vercel.app/chef/${id.id}`
    )
      .then((res) => res.json())
      .then((data) => setChefSingleData(data));
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoad(true);
    };
    img.src = chefSingleData?.chefPhoto;
    setImgLoad(false);
  }, [chefSingleData?.chefPhoto]);

  const navigation = useNavigation();

  if (chefRecipes.length === 0) {
    return <ErrorPage></ErrorPage>;
  }
  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }
  return (
    <div className="container mx-auto">
      <div className="my-5">
        <div className="md:flex flex-col-reverse md:flex-row  justify-between items-center">
          <div>
            <h1 className="font-bold text-5xl" style={{ color: "#910000" }}>
              {chefSingleData?.chefName}
            </h1>
            <div className="text-2xl">
              <p>Recipes Quantity: {chefSingleData?.recipes_quantity}</p>
              <p>Years Of Experience: {chefSingleData?.years_of_experience}</p>
              <p>Total Likes: {chefSingleData?.total_like}</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <LazyLoadImage
              src={chefSingleData?.chefPhoto}
              className="card-img-top"
              loading="lazy"
              effect="blur"
              alt="Chef"
              placeholderSrc={chefSingleData?.chefPhoto.blurhash}
            />
          </div>
        </div>
        <div className="my-20">
          <div className="py-20">
            <h1 className="section-title text-center py-20">Our Recipes</h1>

            <div className="grid-layout">
              {chefRecipes?.map((recipe) => (
                <SignleRecipe recipe={recipe} key={recipe?.id}></SignleRecipe>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChefDetail;
