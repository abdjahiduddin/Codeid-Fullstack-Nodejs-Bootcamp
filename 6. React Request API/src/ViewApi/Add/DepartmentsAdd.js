import React from "react";

export default function DepartmentsAdd(props) {
  const clearInput = () => {
    const inputs = document.querySelectorAll(`#department_name, #location_id`);
    inputs.forEach((input) => {
      input.value = "";
    });
  };
  return (
    <div>
      <h4>Add New Department</h4>
      <form onSubmit={props.onSubmit}>
        <div>
          <label>Department Name :</label>
          <br />
          <input
            id="department_name"
            type="text"
            placeholder="Department Name"
            required
            onChange={props.handleOnChange("department_name")}
          />
        </div>
        <div>
          <label>Location ID :</label>
          <br />
          <input
            id="location_id"
            type="number"
            placeholder="Location ID"
            onChange={props.handleOnChange("location_id")}
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
