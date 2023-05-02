import React, { useEffect, useState } from "react";

const Chef = () => {
  const [sixChefData, setSixChefData] = useState([]);
  const [fullChefData, setFullChefData] = useState([]);
  const [lessChef, setLessChef] = useState([]);
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
  return (
    <div>
      <div className="grid-layout mx-auto">
        {sixChefData?.map((chef) => (
          <div
            key={chef.id}
            className="card w-96 mx-auto bg-base-100 shadow-xl"
          >
            <figure>
              <img src={chef?.chefPhoto} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{chef?.chefName}</h2>
              <p><span className="font-semibold">recipes quantity :</span> {chef?.recipes_quantity}</p>
              <p><span className="font-semibold">Total like :</span> {chef?.total_like}</p>
              <p><span className="font-semibold">Years of experience :</span> {chef?.years_of_experience}</p>
              <div className="card-actions justify-start">
                <button className="btn-primary bottom-0">View Recipes</button>
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
