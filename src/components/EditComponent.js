// EditComponent.js

import React, { Component } from 'react';
import axios from 'axios';

export default class EditComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeProfession = this.onChangeProfession.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeBranch = this.onChangeBranch.bind(this);
        this.onChangeAssigned = this.onChangeAssigned.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: '',
            code: '',
            profession: '',
            color: '',
            city: '',
            branch: '',
            assigned: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4200/employee/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ name: response.data.name, code: response.data.code, profession: response.data.profession, color: response.data.color, city: response.data.city,
                branch : response.data.branch, assigned: response.data.assigned });
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        onChangeName(e) {
            this.setState({  name: e.target.value  });
        }
        onChangeCode(e) {
            this.setState({  code: e.target.value  });
        }
        onChangeProfession(e) {
          this.setState({   profession: e.target.value });
        }
        onChangeColor(e) {
            this.setState({   color: e.target.value  });
        }
        onChangeCity(e){
            this.setState({    city: e.target.value  });
        }
        onChangeBranch(e){
            this.setState({   branch: e.target.value  });
        }
    
        onChangeAssigned(e){
            this.setState({   assigned: e.target.value  });
        }

        onSubmit(e) {
            e.preventDefault();
            const employee = {
                name: this.state.name,
                code: this.state.code,
                profession:  this.state.profession,
                color: this.state.color,
                city: this.state.city,
                branch: this.state.branch,
                assigned: this.state.assigned
            };

        axios.post('http://localhost:4200/employee/update/'+this.props.match.params.id, employee)
        .then(res => console.log(res.data));
        this.setState({
            name: '',
            code: '',
            profession: '',
            color: '',
            city: '',
            branch: '',
            assigned: ''
        })
        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Edit Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Name:  </label>
                        <input type="text" value={this.state.name} className="form-control" onChange={this.onChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>Code: </label>
                        <input type="text" value={this.state.code} className="form-control" onChange={this.onChangeCode}/>
                    </div>

                    <div className="form-group">
                        <label>Profession:  </label>
                        <input type="text" value={this.state.profession}  className="form-control"   onChange={this.onChangeProfession} />
                    </div>
                    <div className="form-group">
                        <label>Color: </label>
                        <input type="text"  value={this.state.color} className="form-control"   onChange={this.onChangeColor} />
                    </div>
                    <div className="form-group">
                        <label>City:  </label>
                        <input type="text" value={this.state.city}  className="form-control"   onChange={this.onChangeCity} />
                    </div>
                    <div className="form-group">
                        <label>Branch: </label>
                        <input type="text" value={this.state.branch}  className="form-control"  onChange={this.onChangeBranch} />
                    </div>
                    <div className="form-group">
                        <label>Assigned: </label>
                        <input type="text" value={this.state.assigned}  className="form-control"  onChange={this.onChangeAssigned} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Employee" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}