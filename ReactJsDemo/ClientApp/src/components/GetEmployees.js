import React, { Component } from 'react';
export class GetEmployees extends Component {

    displayName = GetEmployees.name;

    constructor(props) {
        super(props);
        this.state = { employees: [], loading: true };

    }

    componentDidMount() {

        this.populateEmployees();

    }

    async populateEmployees() {

        const response = await fetch('api/Employee/');
        const employeeData = await response.json();

        this.setState({ employees: employeeData, loading: false });
    }


    renderEmployeeDetails(employees) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.salary}</td>


                                <td>
                                    <button className="btn btn-success" onClick={(id) => this.handleEdit(employee.id)}> Edit</button>&nbsp;
                                     <button className="btn btn-danger" onClick={(id) => this.handleDelete(employee.id)}> Delete</button>&nbsp;
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        );
    }


    handleEdit(id) {
        this.props.history.push("/employees/edit/" + id);
    }

    handleDelete(id) {
        if (!window.confirm("Do you want to delete?")) {
            return;
        }

        fetch("api/Employee/" + id, { method: 'delete' })
            .then(data => {
                //setState will refresh page after delete operation
                this.setState({
                    employees: this.state.employees.filter((rec) => {

                        return rec.id !== id;

                    })

                });
            });
    }

    render() {

        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderEmployeeDetails(this.state.employees);

        return (
            <div>
                <h3>Employee Details</h3>
                {contents}
            </div>
        );
    }


}