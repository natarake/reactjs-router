import React from "react";

const Input = ({ inputs, handleChange, handleSubmit }) => {
  return (
    <div>
      <h1>Student's List</h1>
      <form className="input-group container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={inputs.firstName || ""}
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="lastName"
          value={inputs.lastName || ""}
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="title"
          value={inputs.title || ""}
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="genre"
          value={inputs.genre || ""}
          onChange={handleChange}
          className="form-control"
        />
        <button type="submit" className="btn btn-outline-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
