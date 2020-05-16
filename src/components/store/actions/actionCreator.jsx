import * as actionTypes from "./actionType";

import employeeService from '../../../services/employee.service';

export const actionCreators = {
    getEmployeeListAction: () => async(dispatch, GetState) => {
        dispatch({ type: actionTypes.GET_EMPLOYEE_LIST_REQUEST });

        var res = await employeeService.getEmployeeList();

        dispatch({ type: actionTypes.GET_EMPLOYEE_LIST_RESPONSE, data: res.data });
    },
    deleteEmployeeAction: (empId) => async(dispatch, GetState) => {
        dispatch({ type: actionTypes.DELETE_EMPLOYEE_REQUEST });
        var deleRes = await employeeService.deleteEmployee(empId);

        var res = await employeeService.getEmployeeList();
        dispatch({ type: actionTypes.DELETE_EMPLOYEE_RESPONSE, data: res.data });

    },
    getEmployeeIdData: (empId) => async(dispatch, GetState) => {
        var empres = await employeeService.getEmployee(empId);
        dispatch({ type: actionTypes.GET_EMPLOYEEID_RESPONSE, data: empres.data })
    },
    addEmployeeID: (employee) => async(dispatch, GetState) => {
        var empres = await employeeService.addEmployee(employee);
        var res = await employeeService.getEmployeeList();
        dispatch({ type: actionTypes.GET_EMPLOYEE_LIST_RESPONSE, data: res.data });
    },
    updateEmployeeID: (empData) => async(dispatch, GetState) => {
        var empres = await employeeService.updateEmployee(empData);
        var res = await employeeService.getEmployeeList();
        dispatch({ type: actionTypes.UPDATE_EMPLOYEE_RESPONSE, data: res.data });
    }
};