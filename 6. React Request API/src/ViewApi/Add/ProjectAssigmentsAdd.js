import React from 'react'

export default function ProjectAssigmentsAdd(props) {
    const clearInput = () => {
        const inputs = document.querySelectorAll(
          "#pras_proj_id, #pras_employee_id, #pras_startdate, #pras_enddate, #pras_status"
        );
        inputs.forEach((input) => {
          input.value = "";
        });
      };
    
      return (
        <div>
          <h4>Add New Project Assignment</h4>
          <form onSubmit={props.onSubmit}>
            <div>
              <label>Project Assignment ID :</label>
              <br />
              <input
                id="pras_proj_id"
                type="text"
                placeholder="Project ID"
                onChange={props.handleOnChange("pras_proj_id")}
              />
            </div>
            <div>
              <label>Pras Employee ID :</label>
              <br />
              <input
                id="pras_employee_id"
                type="text"
                placeholder="Pras Employee ID"
                onChange={props.handleOnChange("pras_employee_id")}
              />
            </div>
            <div>
              <label>Start Date :</label>
              <br />
              <input
                id="pras_startdate"
                type="date"
                placeholder="Postal Code "
                onChange={props.handleOnChange("pras_startdate")}
              />
            </div>
            <div>
              <label>End Date:</label>
              <br />
              <input
                id="pras_enddate"
                type="date"
                placeholder="End Date"
                onChange={props.handleOnChange("pras_enddate")}
              />
            </div>
            <div>
              <label>Pras Status :</label>
              <br />
              <input
                id="pras_status"
                type="text"
                placeholder="Pras Status"
                onChange={props.handleOnChange("pras_status")}
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
