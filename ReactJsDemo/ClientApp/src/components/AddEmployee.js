import React, { Component } from 'react';

var deptId = "";

export class Employee {

    constructor() {
        this.id = 0;
        this.firstname = "";
        this.lastname = "";
        this.salary = "";
        this.departmentId = "";
    }
}

export class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            employee: new Employee,
            departments: [],
            selectedDepartmentId:"",
            loading: false
        };

        this.initialize();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

  
    async initialize() {
        var id = this.props.match.params["id"]; //if null or undefine means request for create employee

        //load departments

        const departments = await fetch('api/Department/');
        const departmentsData = await departments.json();


        if (id === null || id === undefined) {
            this.setState({ title: "Create", employee: new Employee, departments: departmentsData, loading: false });
        }
        else {

            const response = await fetch('api/Employee/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", employee: data, departments: departmentsData, selectedDepartmentId:data.departmentId, loading: false });

            document.getElementById("ddDepartment").value = data.departmentId;
        }
    }


    async handleSave(e) {
        e.preventDefault();

        const data = new FormData(e.target); //Get all form data that use fills in text box.

        if (this.state.employee.id) {
            await fetch('api/Employee/' + this.state.employee.id, { method: 'PUT', body: data });
            this.props.history.push("/get-employees"); //redirect to get-employees route
        }
        else {

            fetch('api/Employee/', { method: 'POST', body: data });

            //This will refresh page after we add new employee
            this.setState = {
                title: "create",
                employee: data,
                loading: false
            };

            this.props.history.push("/get-employees");
        }

    }

    handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/get-employees");
    }

    handleChange(e) {

        deptId = e.target.value; 

        this.setState({ selectedDepartmentId: deptId });

    }

    renderCreateForm() {
        return (
            <form onSubmit={this.handleSave}>

                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.employee.id} />
                </div>
                <div>
                    <input type="hidden" name="departmentId" value={this.state.selectedDepartmentId}/>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="name">First Name</label>
                    <div className="col-md-4">
                        <input type="text" name="firstName" value={this.state.employee.firstName} className="form-control" required />
                    </div>

                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="name">Last Name</label>
                    <div className="col-md-4">
                        <input type="text" name="lastName" value={this.state.employee.lastName} className="form-control" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="salary">Salary</label>
                    <div className="col-md-4">
                        <input type="text" name="salary" defaultVvalue={this.state.employee.salary} className="form-control" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="departments">Departments</label>


                    <div className="col-md-4">
                        <select className="form-control" id="ddDepartment"  onChange={this.handleChange}>

                            {
                                this.state.departments.map(department =>
                                    <option value={department.id}>{department.name}</option>
                            )}

                        </select>

                    </div>
                </div>

               
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Save</button>
                    <button type="submit" className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                </div>
            </form>

        );
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
}
