import React from 'react';
import employeeService from '../services/employee.service';

class EmpDetail extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.state = {
                employee: {}
            }
        }
        componentDidMount() {
            var empId = this.props.match.params.id;
            /* Get Employee by employee service */
            employeeService.getEmployee(empId).then(res => {
                var empData = res.data;

                this.setState({
                    ...this.state,
                    employee: empData
                });
            })
        }
        render() {
            return ( < div >
                <
                h1 > Employee Details: < /h1>
                Emp Id: { this.state.employee.id } < br / >
                Emp Name: { this.state.employee.name } < br / >
                Emp Age: { this.state.employee.age } < br / >
                <
                /div>)
            }
        }

        export default EmpDetail;