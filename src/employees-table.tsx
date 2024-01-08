import React from 'react';

const EmployeesTable = (props:any) => {
    const { employees } = props;

    return (
      <table>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Image</th>
          </tr>
        {employees.map((employee:any) => {
          return (
            <tr>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td><img src={employee.imageUrl} /></td>
            </tr>
          )
        })}
      </table>
    )

}

export default EmployeesTable;