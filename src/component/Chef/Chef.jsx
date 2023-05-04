import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Chef = () => {
  const [sixChefData, setSixChefData] = useState([]);
  const [fullChefData, setFullChefData] = useState([]);
  const [lessChef, setLessChef] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://palatable-world-client-site-ashiqur23.vercel.app/chef/all")
      .then((res) => res.json())
      .then((data) => {
        setSixChefData(data.slice(0, 6));
        setLessChef(data.slice(0, 6));
        setFullChefData(data);
      });
  }, []);
  const handleSeeAll = () => {
    setSixChefData(fullChefData);
  };
  const handleShowLess = () => {
    setSixChefData(lessChef);
  };

  const handleVewRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div>
      <div className="grid-layout mx-auto">
        {sixChefData?.map((chef) => (
          <div
            key={chef.id}
            className="card lg:w-96 m-4 mx-auto bg-base-100 shadow-xl"
          >
            <figure>
              <img src={chef?.chefPhoto} alt="Shoes" />
            </figure>
            <div className="card-body relative">
              <h2
                className="card-title text-2xl absolute -top-10 shadow-lg"
                style={{
                  backgroundColor: "#fff",
                  padding: "10px 30px",
                  display: "inline",
                }}
              >
                {chef?.chefName}
              </h2>
              <div className="py-3">
                <p>
                  <span className="font-semibold">Recipes quantity :</span>{" "}
                  {chef?.recipes_quantity}
                </p>
                <p>
                  <span className="font-semibold">Total like :</span>{" "}
                  {chef?.total_like}
                </p>
                <p>
                  <span className="font-semibold">Years of experience :</span>{" "}
                  {chef?.years_of_experience}
                </p>
              </div>
              <div className="card-actions justify-start">
                <button
                  onClick={() => handleVewRecipe(chef?.id)}
                  className="btn-primary bottom-0"
                >
                  View Recipes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        {sixChefData.length > 6 ? (
          <button onClick={handleShowLess} className="btn-primary">
            show Less
          </button>
        ) : (
          <button onClick={handleSeeAll} className="btn-primary">
            See All Chef
          </button>
        )}
      </div>
    </div>
  );
};
export default Chef;
