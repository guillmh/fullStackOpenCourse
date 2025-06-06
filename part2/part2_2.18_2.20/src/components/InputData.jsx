import React from "react";

const InputData = ({ inputValue, handleChange }) => {
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default InputData;
