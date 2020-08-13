import Header from './Header'
import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            employee: {
               name:"",
               password:""
            },
            IsAuthenticated:false

         }
    }
    SubmitHandler=(event)=>{
        let login=this.state.employee.name;
        if(login==='lavi')
        {
            localStorage.setItem('tokenid',"12345");
            localStorage.setItem('Authenticated',"true");
            alert('User loggedin');
            this.props.history.push("/emp-list");

        }
        else{
            alert("User not valid please login again");
            localStorage.setItem('Authenticated',"false");
        }

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
        return ( <div>
           <Header/>

            Name:
        <input type="text" value={this.state.employee.name} onChange={(event) => this.handleChange(event, 'name')} />
        <br />
        PASSWORD:
        <input type="text" value={this.state.employee.password}  onChange={(event) => this.handleChange(event, 'password')}/>
        <br />
      <button onClick={this.SubmitHandler}>SUBMIT</button>

        </div> );
    }
}
 
export default Login;