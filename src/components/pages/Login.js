import React, { Component } from 'react'
import axios from "axios";
export default class Register extends Component {
    handleSubmit(event) {
        event.preventDefault()
        const api_base = 'http://localhost:3001'
        const password = event.target.password.value;
        const email = event.target.email.value;
        const reactData = { email: email, password: password};
        axios.post(api_base + '/login', reactData)
            .then(function (response) {
                window.location = response.data
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>
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