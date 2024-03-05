import React from "react";

const SelectOptionFilter = ({ handleChange, options, name }) => {
  return (
    <div className="flex items-center gap-2 ">
      <label htmlFor={name} className="capitalize">
        {name}
      </label>
      <select
        id={name}
        name={name}
        onChange={handleChange}
        className="w-full border p-2 "
      >
        <option value="">All</option>
        {options?.map((item) => (
          <option key={item?.id} value={item.value}>
            {item?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptionFilter;
