import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ShowData from "./ShowData";

export default function DepartmentsApi() {
  const title = "List Departments";
  const [departments, setDepartments] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.departmentsApi.findAll().then((data) => {
      setDepartments(data);
    });
  }, []);

  const renderTable = () => {
    return (
      <table>
        <th>Department ID</th>
        <th>Department Name</th>
        <th>Location ID</th>
        <tbody>
          {departments &&
            departments.map((department) => (
              <tr key={department.department_id}>
                <td>{department.department_id}</td>
                <td>{department.department_name}</td>
                <td>{department.location_id}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <ShowData
        Title={title}
        Display={display}
        setDisplay={setDisplay}
        renderTable={renderTable}
      />
    </div>
  );
}
