import React from "react";
import { serve } from "../../dummydata";
import "./services.css"

const ServicesCard = () => {
  return (
    <>
      {serve.map((val) => (
        <div className="services shadow">
          <span>{val.logo}</span>
          <h1>{val.name}</h1>
          <p>{val.about}</p>
        </div>
      ))}
    </>
  );
};

export default ServicesCard;
