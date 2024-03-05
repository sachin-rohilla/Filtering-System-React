import React from "react";
import RadioComp from "./RadioComp";

const ColorFilter = ({ handleChange, colorFilter }) => {
  return (
    <div className="flex flex-col gap-1 mt-2">
      <h1 className="font-semibold">Color</h1>
      <RadioComp
        id="All"
        name="color"
        title="All"
        type="radio"
        value=""
        handleChange={handleChange}
        radioFilter={colorFilter}
      />
      <RadioComp
        id="Black"
        name="color"
        title="Black"
        type="radio"
        value="black"
        handleChange={handleChange}
        radioFilter={colorFilter}
      />
      <RadioComp
        id="Blue"
        name="color"
        title="Blue"
        type="radio"
        value="blue"
        handleChange={handleChange}
        radioFilter={colorFilter}
      />
      <RadioComp
        id="Red"
        name="color"
        title="Red"
        type="radio"
        value="red"
        handleChange={handleChange}
        radioFilter={colorFilter}
      />
      <RadioComp
        id="Green"
        name="color"
        title="Green"
        type="radio"
        value="green"
        handleChange={handleChange}
        radioFilter={colorFilter}
      />
    </div>
  );
};

export default ColorFilter;
