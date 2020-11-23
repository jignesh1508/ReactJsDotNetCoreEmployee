import React, { Component } from 'react';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div>
                <h1>Employee Management</h1>
                <h3>Owner :: Jigneshkumar Mohane</h3>
                <p>Complete CRUD operations buit with ::</p>
                <ul>
                    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                    <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                    <li><strong>EntityFramework Core</strong> Database</li>
                </ul>
                <p>To help you get started, we've also set up:</p>
                <ul>
                    <li><strong>Add Employee</strong>. To Add new employee into sql server.</li>
                    <li><strong>Employees</strong> List all employees with Edit and Delete opeartions.</li>
                </ul>

            </div>
        );
    }
}
