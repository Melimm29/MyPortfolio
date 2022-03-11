import React from "react";

const FormInput = ({ label, onChange, value, placeholder, required, inputType = 'text' }) => {
  return (
    <div className="form-input">
      <div>
        <label>
          {label}
        </label>
      </div>
      <div>
        { inputType === 'text' 
          &&  <input
            autoFocus
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          /> 
        }

        { inputType === 'textarea' 
          &&  <textarea
            autoFocus
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            rows={4}
            resize
          /> 
        }
      </div>
    </div>
  );
};

export default FormInput;
