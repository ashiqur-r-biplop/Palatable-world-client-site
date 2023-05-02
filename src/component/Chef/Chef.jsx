import React, { useEffect, useState } from "react";

const Chef = () => {
  const [sixChefData, setSixChefData] = useState([]);
  const [fullChefData, setFullChefData] = useState([]);
  useEffect(() => {
    fetch("https://palatable-world-client-site-ashiqur23.vercel.app/chef/all")
      .then((res) => res.json())
      .then((data) => {
        setSixChefData(data.slice(0, 6));
        setFullChefData(data);
      });
  }, []);
  const handleSeeAll = () => {
    setSixChefData(fullChefData);
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
              <h2 className="card-title">{chef?.chefName}</h2>
              <p>recipes quantity : {chef?.recipes_quantity}</p>
              <p>Total like : {chef?.total_like}</p>
              <p>Years of experience : {chef?.years_of_experience}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Recipes</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button onClick={handleSeeAll} className="btn-primary">
          See All
        </button>
      </div>
    </div>
  );
};

export default Chef;
