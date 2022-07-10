import React from "react";

export default function RegionsAdd(props) {
  const clearInput = () => {
    const input = document.getElementById("region_name")
    input.value = ""
  }
  
  return (
    <div>
      <h4>Add New Region</h4>
      <form onSubmit={props.onSubmit}>
        <div>
          <label>Region Name :</label>
          <br/>
          <input
            id="region_name"
            type="text"
            placeholder="Region Name"
            required
            onChange={props.handleOnChange("region_name")}
          />
        </div>
        <div>
          <button type="submit"> Simpan </button>
          <input type="button" value="Clear" onClick={() => clearInput()}/>
        </div>
      </form>
    </div>
  );
}
