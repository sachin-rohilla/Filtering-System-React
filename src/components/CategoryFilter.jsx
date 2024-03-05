import React, { useState } from "react";
import RadioComp from "./RadioComp";

const CategoryFilter = ({ handleChange, categoryFilter }) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-semibold">Category</h1>
      <RadioComp
        id="All"
        name="category"
        title="All"
        type="radio"
        value=""
        handleChange={handleChange}
        radioFilter={categoryFilter}
      />
      <RadioComp
        id="Sneakers"
        name="category"
        title="Sneakers"
        type="radio"
        value="sneakers"
        handleChange={handleChange}
        radioFilter={categoryFilter}
      />
      <RadioComp
        id="Flats"
        name="category"
        title="Flats"
        type="radio"
        value="flats"
        handleChange={handleChange}
        radioFilter={categoryFilter}
      />
      <RadioComp
        id="Heals"
        name="category"
        title="Heals"
        type="radio"
        value="heals"
        handleChange={handleChange}
        radioFilter={categoryFilter}
      />
      <RadioComp
        id="Sandals"
        name="category"
        title="Sandals"
        type="radio"
        value="sandals"
        handleChange={handleChange}
        radioFilter={categoryFilter}
      />
    </div>
  );
};

export default CategoryFilter;
