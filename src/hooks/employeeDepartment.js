import { useEffect, useState } from "react";
import { getAllEmployeesByDepartment, 
    getAllEmployeesWithSalaryGreaterThanAmountEntered } from "../services/proxyServices";
import { useDispatch } from "react-redux";

export function getAllEmployeesByDepartmentName (departmentName) {
    // const [empDep, setEmpDep] = useState(null);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await dispatch (getAllEmployeesByDepartment(departmentName));
    //         setEmpDep(data)
    //     }
    //     fetchData();
    // }, [departmentName]);
    return getAllEmployeesByDepartment(departmentName);
}

export function getAllEmployeesWithSalaryGreaterThanAmountEnt (amount) {
    // const [empSal, setEmpSal] = useState(null);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await dispatch (getAllEmployeesWithSalaryGreaterThanAmountEntered (amount));
    //         setEmpSal(data)
    //     }
    //     fetchData();
    // }, [amount]);
    return getAllEmployeesWithSalaryGreaterThanAmountEntered(amount);
}