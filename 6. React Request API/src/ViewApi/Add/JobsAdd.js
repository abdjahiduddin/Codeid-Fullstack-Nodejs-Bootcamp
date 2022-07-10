import React from "react";

export default function JobsAdd(props) {
  const clearInput = () => {
    const inputs = document.querySelectorAll(
      "#job_title, #min_salary, #max_salary"
    );
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div>
      <h4>Add New Job</h4>
      <form onSubmit={props.onSubmit}>
        <div>
          <label>Job Title :</label>
          <br />
          <input
            id="job_title"
            type="text"
            placeholder="Job Title"
            required
            onChange={props.handleOnChange("job_title")}
          />
        </div>
        <div>
          <label>Min Salary :</label>
          <br />
          <input
            id="min_salary"
            type="text"
            placeholder="Min Salary"
            onChange={props.handleOnChange("min_salary")}
          />
        </div>
        <div>
          <label>Max Salary :</label>
          <br />
          <input
            id="max_salary"
            type="text"
            placeholder="Max Salary"
            onChange={props.handleOnChange("max_salary")}
          />
        </div>
        <div>
          <button type="submit"> Simpan </button>
          <input type="button" value="Clear" onClick={() => clearInput()} />
        </div>
      </form>
    </div>
  );
}
