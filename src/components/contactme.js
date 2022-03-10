import FormInput from "./common/forminput";

const Contactme = () => {
  return (
    <div className="contactme-container">
      <h1>Contact Me</h1>
      <div className="contactme">
        <FormInput
          label="Name"
          required
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          // value={Name}
        />
        <FormInput
          label="Contact"
          required
          placeholder="Contact"
          onChange={(e) => setName(e.target.value)}
          // value={Name}
        />
        <FormInput
          label="Subject"
          required
          placeholder="Subject"
          onChange={(e) => setName(e.target.value)}
          // value={Name}
        />
        <div className="description">
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
        </div>
      </div>
    </div>
  );
};

export default Contactme;
