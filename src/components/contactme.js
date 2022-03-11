import FormInput from "./UI/forminput";

const Contactme = () => {
  return (
    <div className="contactme-container">
      <h1>Contact Me</h1>
      <div className="contactme">
        <FormInput
          label="Name"
          required
          onChange={(e) => setName(e.target.value)}
          // value={Name}
        />
        <FormInput
          label="Contact"
          required
          onChange={(e) => setName(e.target.value)}
          // value={Name}
        />
        <FormInput
          label="Subject"
          required
          onChange={(e) => setName(e.target.value)}
          // value={Name}
        />
        <FormInput 
          label="Message"
          required
          inputType="textarea"
          onChange={(e) => setDescription(e.target.value)}
          expand
        />
          {/* <div className="description">
          <label>
            Description
          </label>
          <textarea
            className=""
            name="description"
            v-model="form.description"
            type="description"
            autoFocus
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            // value={description}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Contactme;
