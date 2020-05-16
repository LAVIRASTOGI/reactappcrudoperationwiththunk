import * as actionTypes from '../components/store/actions/actionType'

import React, { Component } from "react";

import { Link } from "react-router-dom";
import { actionCreators } from "../components/store/actions/actionCreator";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import employeeService from "../services/employeeService";

// import employeeService from '../services/employeeService';

function mapStateToProps(state) {
  return {
    data: state.employeeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
class EmpList extends Component {

state={
  employee: { _id: '', id: '', name: '', age: '' },
  showbutton:"true"

}
  componentDidMount() {
    this.props.getEmployeeListAction();
  }

  deleteEmployee(empId) {
    this.props.deleteEmployeeAction(empId);
}
  viewEmployee = (EmpId) => {
   this.props.getEmployeeIdData(EmpId);

    this.props.history.push(`/emp-detail/${EmpId}`);
  };
  addEmployee =()=>{
    this.props.addEmployeeID(this.state.employee);
    this.setState({
    
      employee: { _id: '', id: '', name: '', age: '' }
  })
  }
  updateEmployee=()=>{
    this.props.updateEmployeeID(this.state.employee);
    this.setState({
      
      employee: { _id: '', id: '', name: '', age: '' },
      showbutton:true

  })
  }
  showEmployee =(EmpId)=>{
  //   this.props.getEmployeeIdData(EmpId);
  //  this.setState({
  //    employee:{
  //     _id: this.props.data.employee._id,
  //      id:this.props.data.employee.id,
  //      name:this.props.data.employee.name,
  //      age:this.props.data.employee.age
  //    }
  //  })
  employeeService.getEmployee(EmpId).then(res => {
    var empData = res.data;

    this.setState({
        ...this.state,
        employee: empData,
        showbutton:false
    });
})
  }
  handleChange(event, inputName) {
        var inputValue = event.target.value;
        this.setState({
            employee: {
                ...this.state.employee,
                [inputName]: inputValue
            }
        });
        
    }
  render() {
    return (
      <div>
        Emp Id:
        <input type="text" value={this.state.employee.id} onChange={(event) => this.handleChange(event, 'id')} />
        <br />
        Emp Name:
        <input type="text" value={this.state.employee.name}  onChange={(event) => this.handleChange(event, 'name')}/>
        <br />
        Emp Age:
        <input type="text" value={this.state.employee.age}  onChange={(event) => this.handleChange(event, 'age')}/>
        <br />
        <button onClick={this.addEmployee} disabled={!this.state.showbutton}>ADD</button>
        <button onClick={this.updateEmployee} disabled={this.state.showbutton}>UPDATE</button>
        <h1>Employee List:</h1>
        <table border="1">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
            {this.props.data.empList.map((emp, index) => (
              <tr key={"tr-" + index}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>
                <button onClick={() => this.showEmployee(emp._id)}>
                    Edit
                  </button>
                  <button onClick={() => this.deleteEmployee(emp._id)}>
                    Delete
                  </button>
                  <button onClick={() => this.viewEmployee(emp._id)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmpList);
