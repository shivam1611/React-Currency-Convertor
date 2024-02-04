import React from "react";

function Input({ input, setInput }) {
  return (
    <div className="input-form">
      <input
        type="text"
        placeholder="Enter the Value"
        className="input-field"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
    </div>
  );
}

export default Input;
