import React from "react";
 import './works.css';
const plans = [
  {
    type: "STRATEGY",
    title: "Money Momentum",
    description: "Tract Premium helps you start saver investments insights covering.",
    duration: "3 yrs CAGR",
    rate: "7.20%",
    bgColor: "bg-green",
  },

];

const Works = () => {
  return (
    <section id="works" className="clientsContainer">
      <div className="header">
      <span className="C_Title">WORK EXPERIENCE</span>
        {/* <h2 className="title">My Projects</h2> */}
        <a href="#" className="exploreLink">Explore All</a>
      </div>
      <div className="grid">
        {plans.map((plan, index) => (
          <div key={index} className={`card ${plan.bgColor}`}>
            <p className="type">{plan.type}</p>
            <h3 className="cardTitle">{plan.title}</h3>
            <p className="description">{plan.description}</p>
            <div className="details">
              <div>
                <p className="duration">{plan.duration}</p>
                <p className="rate">{plan.rate}</p>
              </div>
              <button className="button">➜</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works

