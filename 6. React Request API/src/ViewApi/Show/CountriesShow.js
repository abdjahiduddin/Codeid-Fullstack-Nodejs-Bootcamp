import React from "react";

export default function CountriesShow(props) {
  return (
    <div>
      <h4>List Countries</h4>
      <table>
        <thead>
          <tr>
            <th>Country ID</th>
            <th>Country Name</th>
            <th>Region ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.Countries &&
            props.Countries.map((country) => (
              <tr key={country.country_id}>
                <td>{country.country_id}</td>
                <td>{country.country_name}</td>
                <td>{country.region_id}</td>
                <td>
                  <button onClick={() => props.onDelete(country.country_id, country.country_name)}>
                    {" "}
                    Delete
                  </button>
                  <button onClick={()=> (props.onEdit(country.country_id)) }> Edit </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
