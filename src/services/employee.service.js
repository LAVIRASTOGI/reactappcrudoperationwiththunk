import axios from 'axios';

const apiUrl = "http://localhost:5500/api/Employee";
const employeeService = {
    getEmployeeList: () => {
        var url = apiUrl + "/getEmployeeList";
        return axios.get(url);
    },
    getEmployee: (id) => {
        var url = apiUrl + "/getEmployee/" + id;
        return axios.get(url);
    },
    deleteEmployee: (id) => {
        var url = apiUrl + "/deleteEmployee/" + id;
        return axios.delete(url,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    updateEmployee: (emp) => {
        var url = apiUrl + "/updateEmployee/" + emp._id;
        return axios.put(url, emp,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    addEmployee: (emp) => {
        var url = apiUrl + "/addEmployee/";
        return axios.post(url, emp,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    }

}

export default employeeService;