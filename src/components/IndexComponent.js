// IndexComponent.js

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class IndexComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {employees: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4200/employee')
      .then(response => {
        this.setState({ employees: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.employees.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Code</td>
                  <td>Profession</td>
                  <td>Color</td>
                  <td>City</td>
                  <td>Branch</td>
                  <td>Assigned</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }