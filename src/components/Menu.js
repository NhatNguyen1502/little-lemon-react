import React from "react";
import recipes from "../recipes";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This Week Specials!!!</h2>
        <button>Order Menu</button>
      </div>

      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderBtn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
