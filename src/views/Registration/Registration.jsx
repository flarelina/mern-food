import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Button
} from "reactstrap";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    }
  }

  componentDidMount() {
  }

  registerUser = () => {
    // Call API Here
  };

  render() {
    return (
      <div className="text-center p-3">
        <Card style={{maxWidth: "600px", textAlign: "left"}}>
          <CardHeader>
            <h5 className="title text-primary">Registration</h5>
          </CardHeader>

          <CardBody>
            <Form>
              {/* USERNAME */}
              <FormGroup>
                <label>Username*</label>
                <Input value={this.state.username}
                       onChange={(e) => this.setState({ username: e.target.value })}
                       type="text"
                       autoComplete="username"/>
              </FormGroup>

              {/* EMAIL */}
              <FormGroup>
                <label>Email*</label>
                <Input
                  type="email"
                  autoComplete="Email"
                />
              </FormGroup>

              {/* FIRST NAME */}
              <FormGroup>
                <label>First Name*</label>
                <Input
                  type="text"
                  autoComplete="firstname"
                />
              </FormGroup>

              {/* LAST NAME */}
              <FormGroup>
                <label>Last Name*</label>
                <Input
                  type="text"
                  autoComplete="lastname"
                />
              </FormGroup>

              {/* CONTACT NUMBER */}
              <FormGroup>
                <label>Contact Number*</label>
                <Input
                  type="text"
                  autoComplete="contact-number"
                />
              </FormGroup>

              {/* ADDRESS */}
              <FormGroup>
                <label>Address</label>
                <Input
                  type="text"
                  autoComplete="address"
                />
              </FormGroup>

              {/* PASSWORD */}
              <FormGroup>
                <label>Password</label>
                <Input
                  placeholder="***********"
                  type="password"
                  autoComplete="current-password"
                />
              </FormGroup>
            </Form>

            <Button color="primary"
                    className="btn-round float-right"
                    onClick={this.registerUser}>
              Register
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

