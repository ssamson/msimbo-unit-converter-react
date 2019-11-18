import React from "react";

const Input = ({ filter, filterHandler }) => {
  return (
    <input
      type="number"
      className="form-control mb-4"
      id="input"
      name="input"
      placeholder="Enter lbs here..."
      value={filter}
      onChange={filterHandler}
    />
  );
};

export default Input;
