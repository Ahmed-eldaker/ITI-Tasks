import React from "react";
import useSWR from "swr";

const fetshingData = async () => {
  const res = await fetch("http://localhost:3000/data");
  const data = await res.json();
  return data[0];
};
const DashSWR = () => {
  const { data, error } = useSWR("dashdata", fetshingData);
  if (error) return "error";
  if (!data) return "Loading...";
  return (
    <div className="container w-75 m-auto">
      <div className="row">
        <div className="col">
          <h2 className="mb-4">Posts : {data.posts}</h2>
        </div>
        <div className="col">
          <h2 className="mb-4">Likes : {data.likes}</h2>
        </div>
        <div className="col">
          <h2 className="mb-4">Followers : {data.followers}</h2>
        </div>
      </div>
    </div>
  );
};

export default DashSWR;
