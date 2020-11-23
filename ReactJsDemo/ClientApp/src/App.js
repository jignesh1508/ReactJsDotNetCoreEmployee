import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { GetEmployees } from './components/GetEmployees';
import { AddEmployee } from './components/AddEmployee';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route  path='/counter' component={Counter} />
                <Route  path='/fetch-data' component={FetchData} />
                <Route  path='/get-employees' component={GetEmployees} />
                <Route path='/add-employee' component={AddEmployee} />
                <Route path='/employees/edit/:id' component={AddEmployee}/>
            </Layout>
              );
            }
          }
