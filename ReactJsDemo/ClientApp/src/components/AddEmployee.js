import React, { Component } from 'react';

export class Employee {

    constructor() {
        this.id = 0;
        this.firstname = "";
        this.lastname = "";
        this.salary = "";
    }
}

export class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            employee: new Employee,
            loading: false
        };

        this.initialize();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }


     async initialize() {
        var id = this.props.match.params["id"]; //if grather than 0 means edit or crate

        
         if (id === null || id === undefined) {


             this.setState = { title: "Create", employee: new Employee, loading: false };

             alert(this.state.loading);

        }
         else {

            const response =await fetch('api/Employee/' + id);
            const data = await response.json();
            this.setState ({ title: "Edit", employee: data, loading: false });
        }
    }

    render() {

        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderCreateForm();

        return (<div>
            <h1>{this.state.title}</h1>
            <h3>Employees</h3>
            <hr />
            {contents}
        </div>);
    }

    async handleSave(e) {
         e.preventDefault();

         const data = new FormData(e.target); //Get all form data that use fills in text box.


         if (this.state.employee.id)
         {
             alert("Edit" + this.state.employee.id + " " + data);
             var editResponse = await fetch('api/Employee/' + this.state.employee.id, { method: 'PUT', body: data });
             this.props.history.push("/get-employees"); //redirect to get-employees route
         }
         else {

             var createResponse = fetch('api/SampleData/AddEmployee/', { method: 'POST', body: data });

             //This will refresh page after we add new employee
             this.setState = {
                 title: "create",
                 employee: data,
                 loading:false
             };

             this.props.history.push("/get-employees");
         }

    }

    handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/get-employees");
    }

    renderCreateForm() {

        return (
            <form onSubmit={this.handleSave}>
              
                <div className="form-group row"> 
                    <input type="hidden" name="id" value={this.state.employee.id}/>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="name">First Name</label>
                    <div className="col-md-4">
                        <input type="text" name="firstName" defaulVvalue={this.state.employee.firstName}  className="form-control" required />
                    </div>
                       
                   
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="name">Last Name</label>
                    <div className="col-md-4">
                        <input type="text" name="lastName" defaulVvalue={this.state.employee.lastName}  className="form-control" required />
                    </div>


                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="salary">Salary</label>
                    <div className="col-md-4">
                        <input type="text" name="salary" defaulVvalue={this.state.employee.salary}className="form-control" required />
                    </div>
                </div>
             

                <div className="form-group">
                    <button type="submit" className="btn btn-success">Save</button>
                    <button type="submit" className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                </div>
            </form>

            );
    }
}
