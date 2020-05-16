import axios from "axios";
var baseUrl = "http://localhost:5500/";

const employeeService = {
  getEmployeeList: () => {
    var url = baseUrl + "api/Employee/getEmployeeList";
    /* Get Employee List by axios */
    return axios.get(url);
    // return fetch(url).then(res => res.json());
  },
  getEmployee: (empId) => {
    var url = baseUrl + "api/Employee/getEmployee/" + empId;
    return axios.get(url);
    // return fetch(url).then(res => res.json());
  },
  deleteEmployee: (empId) => {
    var url = baseUrl + "api/Employee/deleteEmployee/" + empId;
    // return fetch(
    //     url,
    //     {
    //         method: 'delete'
    //     }).then(res => res.json());
    return axios.delete(url);
  },
  updateEmployee: (emp) => {
    var url = baseUrl + "api/Employee/updateEmployee/" + emp._id;
    // return fetch(
    //     url,
    //     {
    //         method: 'put',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(emp)
    //     }).then(res => res.json());
    return axios.put(url, emp,{headers: { "Content-Type": "application/json" }});
  },
  addEmployee: (emp) => {
    var url = baseUrl + "api/Employee/addEmployee";
    // return fetch(url, {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(emp),
    // }).then((res) => res.json());
    return axios.post(url, emp,{headers: { "Content-Type": "application/json" }});
  },
};

export default employeeService;
