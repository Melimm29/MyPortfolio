import FormInput from "./UI/forminput";
import React, { useState } from "react";

const Contactme = () => {
  const [formType, setFormType] = useState(false);

  const onFormTypeSelect = (type) => {
    return (e) => {
      e.preventDefault();
      setFormType(type);
    };
  };

  return (
    <>
      <div className="button-container">
      {!formType && (
        <button className="button" onClick={onFormTypeSelect(true)}>
          Contact Me
        </button>
      )}
      </div>
      <div>
        {formType && (
          <div id="contactme" className="contactme-container">
            <h1>Contact Me</h1>
            <div className="contactme">
              <FormInput
                label="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <FormInput
                label="Contact"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <FormInput
                label="Subject"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <FormInput
                label="Message"
                required
                inputType="textarea"
                onChange={(e) => setDescription(e.target.value)}
                expand
              />
            </div>
            <button className="button" onClick={onFormTypeSelect(false)}>
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Contactme;
