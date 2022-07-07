import React, { useState, useEffect } from "react";
import api from "../Api/indexApi";
import ShowData from "./ShowData";

export default function EmployeesView() {
  const title = "List Employees";
  const [employees, setEmployees] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    api.employeesApi.findAll().then((data) => {
      setEmployees(data);
    });
  }, []);

  const renderTable = () => {
    return (
      <table>
        <th>Employee ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Hire Date</th>
        <th>Salary</th>
        <th>Manager ID</th>
        <th>Job ID</th>
        <th>Department ID</th>
        <tbody>
          {employees &&
            employees.map((employee) => (
              <tr key={employee.employee_id}>
                <td>{employee.employee_id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone_number}</td>
                <td>{employee.hire_date}</td>
                <td>{employee.salary}</td>
                <td>{employee.manager_id}</td>
                <td>{employee.job_id}</td>
                <td>{employee.department_id}</td>
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
