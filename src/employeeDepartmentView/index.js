import { useEffect, useState } from "react";
import { getAllEmployeesByDepartmentName, getAllEmployeesWithSalaryGreaterThanAmountEnt } from "../hooks/employeeDepartment"

export default ({departmentName}) => {
    const[empDep, setEmpDep] = useState([]);
    const fetchEmpDep = () => {
        fetch('http://localhost:8081/employeeManagement/employeesByDepartmentId/101')
        .then((response) => response)
        .then((data) => setEmpDep(data))
    }
    const employeesByDepartmentName = getAllEmployeesByDepartmentName ('Mortgage');
    const employeeAmount =  getAllEmployeesWithSalaryGreaterThanAmountEnt (50000);
    console.log('test data');
    console.log(employeesByDepartmentName);

    useEffect(() => {
        fetchEmpDep()
    }, []);

    return (
        <>
        <h1>EmployeeByDepartment</h1>
        <section>
            {empDep.map((emp) => 
            <empByDepart
            empId = {emp.employeeId}
            empName = {emp.employeeName}
            salary= {emp.salary}
            department= {emp.department_id}/>
            )}
        </section>
        </>
    )
}