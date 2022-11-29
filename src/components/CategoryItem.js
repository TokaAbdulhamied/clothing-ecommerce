import React from "react";

function CategoryItem({ category }) {
  const { id, title, imageUrl } = category;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h1>{title}</h1>
        <p>shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
