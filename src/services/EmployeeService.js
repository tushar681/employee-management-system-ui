import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8081/employeeManagement/employeesByDepartmentId/';

class EmployeeService{

    getEmployees(department){
        return axios.get(EMPLOYEE_API_BASE_URL + department);
    }
}

export default new EmployeeService();