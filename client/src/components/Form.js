import React, { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit({ name });
        setName("");
      }}
    >
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="btn btn-primary">Submit</div>
      </div>
    </form>
  );
};

export default Form;
