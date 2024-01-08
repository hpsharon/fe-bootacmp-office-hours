import React from 'react';
import './App.css';
import EmployeesTable from './employees-table';
import Button from './button';

function App() {

  const [employees, setEmployees] = React.useState<any[]>([]);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);

  const onRefreshClick  = React.useCallback((event:any)=>{
    setIsFetching(true);
    fetch('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001')
      .then(response => response.json())
      .then((data) => {
        setEmployees(data);
        setIsFetching(false);
      })
  },[])

  const onSortClick = React.useCallback(()=>{
    const sortedEmployees = employees.sort((employeeA, employeeB)=> {
      return employeeA.firstName.toString().localeCompare(employeeB.firstName.toString());
    })
    setEmployees(sortedEmployees);
  },[])

  React.useEffect(()=>{
    fetch('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001')
      .then(response => response.json())
      .then((data) => {
        setEmployees(data);
      })
  },[]);

  return (
    <div className="App">
      <Button onClick={onRefreshClick} buttonText={'Refresh'} />
      <Button onClick={onSortClick} buttonText={"Sort employees"}/>
      {isFetching ? <div>Fetching Data</div> : <EmployeesTable employees={employees} /> }
    </div>
  );
}

export default App;
