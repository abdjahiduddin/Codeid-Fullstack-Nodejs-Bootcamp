import React from "react";

export default function DependentsAdd(props) {
  const clearInput = () => {
    const inputs = document.querySelectorAll(
      "#first_name, #last_name, #relationship, #employee_id"
    );
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div>
      <h4>Add New Dependent</h4>
      <form onSubmit={props.onSubmit}>
        <div>
          <label>First Name :</label>
          <br />
          <input
            id="first_name"
            type="text"
            placeholder="First Name"
            required
            onChange={props.handleOnChange("first_name")}
          />
        </div>
        <div>
          <label>Last Name :</label>
          <br />
          <input
            id="last_name"
            type="text"
            placeholder="Last Name"
            required
            onChange={props.handleOnChange("last_name")}
          />
        </div>
        <div>
          <label>Relationship :</label>
          <br />
          <input
            id="relationship"
            type="text"
            placeholder="Relationship"
            required
            onChange={props.handleOnChange("relationship")}
          />
        </div>
        <div>
          <label>Employee ID :</label>
          <br />
          <input
            id="employee_id"
            type="number"
            placeholder="Employee ID"
            onChange={props.handleOnChange("employee_id")}
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
