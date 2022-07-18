import React from "react";

export default function ProjectsAdd(props) {
  const clearInput = () => {
    const inputs = document.querySelectorAll(
      "#proj_name, #proj_createdon, #proj_duedate, #proj_cust_name, #proj_description, #proj_status, #proj_amount, #proj_account_mgr, #employee_id, #proj_cust_name"
    );
    inputs.forEach((input) => (input.value = ""));
  };
  return (
    <div>
      <h4>Add New Project</h4>
      <form onSubmit={props.onSubmit}>
        <div>
          <label>Project Name :</label>
          <br />
          <input
            id="proj_name"
            type="text"
            placeholder="Project Name "
            onChange={props.handleOnChange("proj_name")}
          />
        </div>
        <div>
          <label>Created On :</label>
          <br />
          <input
            id="proj_createdon"
            type="date"
            placeholder="Created On"
            onChange={props.handleOnChange("proj_createdon")}
          />
        </div>
        <div>
          <label>Due Date :</label>
          <br />
          <input
            id="proj_duedate"
            type="date"
            placeholder="Due Date"
            onChange={props.handleOnChange("proj_duedate")}
          />
        </div>
        <div>
          <label>Project Status :</label>
          <br />
          <input
            id="proj_status"
            type="text"
            placeholder="Project Status"
            onChange={props.handleOnChange("proj_status")}
          />
        </div>
        <div>
          <label>Project Description :</label>
          <br />
          <input
            id="proj_description"
            type="text"
            placeholder="Project Description"
            onChange={props.handleOnChange("proj_description")}
          />
        </div>
        <div>
          <label>Customer Name :</label>
          <br />
          <input
            id="proj_cust_name"
            type="text"
            placeholder="Customer Name"
            onChange={props.handleOnChange("proj_cust_name")}
          />
        </div>
        <div>
          <label>Project Amount :</label>
          <br />
          <input
            id="proj_amount"
            type="number"
            placeholder="Project Amount"
            onChange={props.handleOnChange("proj_amount")}
          />
        </div>
        <div>
          <label>Project Account Manager :</label>
          <br />
          <input
            id="proj_account_mgr"
            type="number"
            placeholder="Project Account Manager"
            onChange={props.handleOnChange("proj_account_mgr")}
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
