import React, { useEffect, useState } from "react";
import api from "../Api/indexApi";
import ShowData from "./ShowData";

export default function DependentsView() {
  const title = "List Dependents";
  const [dependents, setDependents] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.dependentsApi.findAll().then((data) => {
      setDependents(data);
    });
  }, []);

  const renderTable = () => {
    return (
      <table>
        <th>Dependent ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Epmployee ID</th>
        <th>Relationship</th>
        <tbody>
          {dependents &&
            dependents.map((dependent) => (
              <tr key={dependent.dependent_id}>
                <td>{dependent.dependent_id}</td>
                <td>{dependent.first_name}</td>
                <td>{dependent.last_name}</td>
                <td>{dependent.employee_id}</td>
                <td>{dependent.relationship}</td>
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
