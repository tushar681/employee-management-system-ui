import React, {useState, useEffect} from 'react'
import EmployeeService from '../src/services/EmployeeService'

function EmployeeComponent() {

    const [employees, setEmployees] = useState([])
    const [department, setDepartment] = useState('');

    // useEffect(() => {
    //     getEmployees()
    // }, [])

    const getEmployees = (department) => {

        EmployeeService.getEmployees(department).then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        });
    };

    const handleSubmit = () => {
        //e.preventDefault();
        getEmployees(department);
       // props.addPost(title, body);
        setDepartment('');
        //setBody('');
    };  

    return (
        // <form onSubmit={handleSubmit}>
        <div className = "container">
            
            <h1 className = "text-center"> Employees List by Department Name </h1>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> <label>Enter Department name </label></th>
                        <th>  <input 
                                name="department" 
                                type="text" 
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                        /></th>
                        <th><button 
                onClick={() => handleSubmit()}
            >Submit</button></th>
                    </tr>

                </thead>
            </table>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> Employee Id</th>
                        <th> Employee Name</th>
                        <th> Salary</th>
                        <th> Department Id</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td> {employee.employeeId }</td>
                                    <td> {employee.employeeName }</td>
                                    <td> {employee.salary }</td>    
                                    <td> {employee.department_id }</td>

                                </tr>

                        )
                    }

                </tbody>


            </table>

        </div>
        // </form>
    )
}

export default EmployeeComponent