import React from "react";
import SingleCard from "./SingleCard";

const Card = () => {
  const data = [
    {
      id: 1,
      heading: "BASIC",
      line1: "5 Laksh",
      line2: "Unlimited Access!",
      line3: "No Food",
    },
    {
      id: 2,
      heading: "MEDIUM",
      line1: "10 Laksh",
      line2: "limited Access!",
      line3: "No Food",
    },
    {
      id: 3,
      heading: "PERIMUM",
      line1: "20 Laksh",
      line2: "alllimited Access!",
      line3: " Food",
    },
  ];
  return (
    <>
      <h1 className="heading">Pricing</h1>
      <section className="cards">
        {data.map((item) => {
          const { heading, line1, line2, line3 } = item;
          return (
            <SingleCard
              heading={heading}
              line1={line1}
              line2={line2}
              line3={line3}
            />
          );
        })}
      </section>
    </>
  );
};

export default Card;
