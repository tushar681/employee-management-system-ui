import axios from 'axios';
import { employeeManagementApiUrl } from '../constants/apiUrls';

export const getAllEmployeesByDepartment = async (departmentName) => {
    const uri = employeeManagementApiUrl + '/employeeManagement/employeesByDepartmentId/' + departmentName;
    const data = await new Promise((resolve, reject) => {
        axios.get(uri).then(async res => {
            if (res.data) {
                return resolve.data;
            } 
            // else {
            //     reject();
            // }
        }).catch(err => {
            console.log('Error occured', err);
           // reject();
        });
    });
    console.log('getAllEmployeesByDepartment  ',data);
    return data;
};

export const getAllEmployeesWithSalaryGreaterThanAmountEntered = async (amount) => {
    const uri = employeeManagementApiUrl + '/employeeManagement/employeesWithSalaryGreaterThanAmountEntered/' + amount;
    const data = await new Promise((resolve, reject) => {
        axios.get(uri).then(async res => {
            if (res.data) {
                return resolve.data;
            } 
            // else {
            //     reject();
            // }
        }).catch(err => {
            console.log('Error occured', err);
            //reject();
        });
    });
    console.log('getAllEmployeesWithSalaryGreaterThanAmountEntered  ',data);
    return data;
};