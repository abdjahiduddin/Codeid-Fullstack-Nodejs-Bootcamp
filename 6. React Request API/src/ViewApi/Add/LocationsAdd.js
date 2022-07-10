import React from "react";

export default function LocationsAdd(props) {
  const clearInput = () => {
    const inputs = document.querySelectorAll(
      "#location_id, #street_address, #postal_code, #city, #state_province, #country_id"
    );
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div>
      <h4>Add New Location</h4>
      <form onSubmit={props.onSubmit}>
        <div>
          <label>Location ID :</label>
          <br />
          <input
            id="location_id"
            type="number"
            placeholder="Location ID "
            onChange={props.handleOnChange("location_id")}
          />
        </div>
        <div>
          <label>Street Address :</label>
          <br />
          <input
            id="street_address"
            type="text"
            placeholder="Street Address"
            onChange={props.handleOnChange("street_address")}
          />
        </div>
        <div>
          <label>Postal Code :</label>
          <br />
          <input
            id="postal_code"
            type="text"
            placeholder="Postal Code "
            onChange={props.handleOnChange("postal_code")}
          />
        </div>
        <div>
          <label>City :</label>
          <br />
          <input
            id="city"
            type="text"
            placeholder="City"
            required
            onChange={props.handleOnChange("city")}
          />
        </div>
        <div>
          <label>State Province :</label>
          <br />
          <input
            id="state_province"
            type="text"
            placeholder="State Province"
            onChange={props.handleOnChange("state_province")}
          />
        </div>
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
          <button type="submit"> Simpan </button>
          <input type="button" value="Clear" onClick={() => clearInput()} />
        </div>
      </form>
    </div>
  );
}
