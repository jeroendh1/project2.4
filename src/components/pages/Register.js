import React, { Component } from 'react'
import axios from "axios";
export default class Register extends Component {
    handleSubmit(event) {
        const api_base = 'http://localhost:3001'
        const password = event.target.password.value;
        const email = event.target.email.value;
        const reactData = { email: email, password: password};
        axios.post(api_base + '/register', reactData)
            .then((response) => {
                alert(response)
            console.log(response);
        }, (error) => {
                alert(error)
            console.log(error);
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Register a Employee</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}