import React from "react";

export default function LocationsShow(props) {
  return (
    <div>
      <h4>List Locations</h4>
      <table>
        <thead>
          <tr>
            <th>Location ID</th>
            <th>Street Address</th>
            <th>Postal Code</th>
            <th>City</th>
            <th>State Province</th>
            <th>Country ID</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {props.Locations &&
            props.Locations.map((location) => (
              <tr key={location.location_id}>
                <td>{location.location_id}</td>
                <td>{location.street_address}</td>
                <td>{location.postal_code}</td>
                <td>{location.city}</td>
                <td>{location.state_province}</td>
                <td>{location.country_id}</td>
                <td>
                  <button onClick={() => props.onDelete(location.location_id)}>
                    {" "}
                    Delete
                  </button>
                  <button onClick={()=> (props.onEdit(location.location_id)) }> Edit </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
