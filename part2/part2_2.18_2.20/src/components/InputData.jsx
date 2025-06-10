import React from "react";

const InputData = ({ inputValue, handleChange }) => {
  return (
    <div>
      Find: <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default InputData;
