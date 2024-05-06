import React, {useState, useEffect} from 'react'
import DepartmentService from '../src/services/DepartmentService'

function DepartmentComponent() {

    const [employees, setEmployees] = useState([])
    const [amount, setAmount] = useState([])

    // useEffect(() => {
    //     getEmployees()
    // }, [])

    const getEmployees = (amount) => {

        DepartmentService.getEmployees(amount).then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        });
    };

    const handleSubmit = () => {
        //e.preventDefault();
        getEmployees(amount);
       // props.addPost(title, body);
        setAmount('');
        //setBody('');
    };  


    return (
        <div className = "container">
            
            <h1 className = "text-center"> Employees List with salary Greater than Enetered amount </h1>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> <label>Amount </label></th>
                        <th>  <input 
                                name="amount" 
                                type="text" 
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
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
    )
}

export default DepartmentComponent