import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8081/employeeManagement/employeesWithSalaryGreaterThanAmountEntered/';

class DepartmentService{

    getEmployees(amount){
        return axios.get(EMPLOYEE_API_BASE_URL + amount);
    }
}

export default new DepartmentService();