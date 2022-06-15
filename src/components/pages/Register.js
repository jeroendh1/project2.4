import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
export default class Register extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const api_base = "http://localhost:3001";
    const password = event.target.password.value;
    const email = event.target.email.value;
    const admin = event.target.admin.checked;
   
    const reactData = { email: email, password: password, admin: admin };
    axios.post(api_base + "/register", reactData).then(
      (response) => {
        window.location.reload(true);
        console.log(response);
      },
      (error) => {
        alert(error);
        console.log(error);
      }
    );
  }

  render() {
    const api_base = "http://localhost:3001";
    axios.get(api_base + "/getEmployee").then(
      (response) => {
        const t = document.getElementById("tbody");
        for (const user of response.data) {
          t.innerHTML =
            
            `<tr><td>${user.id}</td><td>${user.email}</td><td>${
              user.role ? "Admin" : "User"
            }</td></tr>` + t.innerHTML;
        }
      },
      (error) => {
        alert(error);
        console.log(error);
      }
    );
    return (
      <div className="Register">
        <main>
          <Container>
            <Row className="justify-content-md-center">
              <Col className="mb-4" sm={12} md={8} lg={8}>
                <Card className="center ">
                  <Card.Body>
                    <Card.Title> Employee </Card.Title>
                    <Card.Subtitle className="mb-4 text-muted"></Card.Subtitle>
                    <table className="table table-responsive mt-4">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Email</th>
                          <th>Role</th>
                        </tr>
                      </thead>
                      <tbody id="tbody"></tbody>
                    </table>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-4" sm={6} md={4} lg={4}>
                <Card className="center ">
                  <Card.Body>
                    <Card.Title> Register a Employee </Card.Title>
                    <Card.Subtitle className="mb-4 text-muted"></Card.Subtitle>
                    <form onSubmit={this.handleSubmit}>
                      <div className="mb-3">
                        <label> Email address </label>
                        <input
                          name="email"
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="mb-3">
                        <label> Password </label>
                        <input
                          name="password"
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="mb-3">
                      <label> Admin </label>
                        <input
                          name="admin"
                          type="checkbox"
                          id="admin"
                          className="form-check-input ms-2"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          Register
                        </button>
                      </div>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}
