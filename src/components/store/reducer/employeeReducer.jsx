import * as actionTypes from "../actions/actionType";

const initialState = {
    empList: [],
    employee: {},
    isLoading: false
};

const employeeReducer = (state = initialState, action) => {


    switch (action.type) {
        case actionTypes.GET_EMPLOYEE_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.GET_EMPLOYEE_LIST_RESPONSE:
            return {
                ...state,
                empList: action.data,
                isLoading: false
            };

        case actionTypes.DELETE_EMPLOYEE_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.DELETE_EMPLOYEE_RESPONSE:
            return {
                ...state,
                empList: action.data,
                isLoading: false
            };
        case actionTypes.GET_EMPLOYEEID_RESPONSE:
            return {
                ...state,
                employee: action.data,
                isLoading: false
            };
        case actionTypes.UPDATE_EMPLOYEE_RESPONSE:
            return {
                ...state,
                empList: action.data,
                employee: {},
                isLoading: false
            };

        default:
            return state;

    }
}
export default employeeReducer;