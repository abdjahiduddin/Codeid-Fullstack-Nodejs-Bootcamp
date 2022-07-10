import React from "react";

export default function CountriesAdd(props) {
  const clearInput = () => {
    const inputs = document.querySelectorAll(
      "#country_id, #country_name, #region_id"
    );
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div>
      <h4>Add New Country</h4>
      <form onSubmit={props.onSubmit}>
        <div>
          <label>Country ID :</label>
          <br />
          <input
            id="country_id"
            type="text"
            placeholder="Country ID"
            required
            onChange={props.handleOnChange("country_id")}
          />
        </div>
        <div>
          <label>Country Name :</label>
          <br />
          <input
            id="country_name"
            type="text"
            placeholder="Country Name"
            required
            onChange={props.handleOnChange("country_name")}
          />
        </div>
        <div>
          <label>Region ID :</label>
          <br />
          <input
            id="region_id"
            type="text"
            placeholder="Region ID"
            required
            onChange={props.handleOnChange("region_id")}
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
