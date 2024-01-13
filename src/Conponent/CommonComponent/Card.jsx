import React from "react";

const Card = ({ className, children, cardTilte, cardDeatils }) => {
  return (
    <div className={className}>
      <h1 className="card__tilte">
        {cardTilte ? cardTilte : `Top 5 SaaS Businesses –August 2021`}
      </h1>
      <p className="card__details">
        {cardDeatils
          ? cardDeatils
          : `you currently using one of the top SaaS businesses, according to the
        team at Lunar Strategy? Check out this list of our top SaaS`}
      </p>
      {children}
    </div>
  );
};

export default Card;
