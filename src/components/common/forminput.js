import React from "react";

const FormInput = ({ label, onChange, value, placeholder, required }) => {
  return (
    <div className="form-container">
      <label>
        {label}
      </label>
      <input
        autoFocus
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormInput;
