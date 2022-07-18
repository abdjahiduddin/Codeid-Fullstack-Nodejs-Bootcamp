import React from "react";

export default function RegionShow(props) {
  return (
    <div>
      <h4>List Regions</h4>
      <table>
        <thead>
          <tr>
            <th>Region ID</th>
            <th>Region Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.Regions &&
            props.Regions.map((reg) => (
              <tr key={reg.region_id}>
                <td>{reg.region_id}</td>
                <td>{reg.region_name}</td>
                <td>
                  <button onClick={() => (props.onDelete(reg.region_id, reg.region_name))}>
                    {" "}
                    Delete
                  </button>
                  <button onClick={()=> (props.onEdit(reg.region_id)) }> Edit </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
