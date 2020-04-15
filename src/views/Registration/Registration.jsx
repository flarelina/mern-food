import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Button
} from "reactstrap";

export default class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ""
    }
  }

  componentDidMount() {
  }

  registerUser = () => {
    // Call API Here
  }

  render() {
    return (
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader>
              <h5 className="title text-primary">Registration</h5>
            </CardHeader>
          
            <CardBody>
              <Form>
                <FormGroup>
                  <label>Username*</label>
                  <Input
                    value={this.state.username}
                    onChange={(e) => this.setState({ username: e.target.value })}
                    type="text"
                    autoComplete="username"
                  />
                </FormGroup>

                <FormGroup>
                  <label>Email*</label>
                  <Input
                    type="email"
                    autoComplete="Email"
                  />
                </FormGroup>

                <FormGroup>
                  <label>First Name*</label>
                  <Input
                    type="text"
                    autoComplete="firstname"
                  />
                </FormGroup>

                <FormGroup>
                  <label>Last Name*</label>
                  <Input
                    type="text"
                    autoComplete="lastname"
                  />
                </FormGroup>

                <FormGroup>
                  <label>Contact Number*</label>
                  <Input
                    type="text"
                    autoComplete="contact-number"
                  />
                </FormGroup>

                <FormGroup>
                  <label>Address</label>
                  <Input
                    type="text"
                    autoComplete="address"
                  />
                </FormGroup>

                <FormGroup>
                  <label>Password</label>
                  <Input
                    placeholder="***********"
                    type="password"
                    autoComplete="current-password"
                  />
                </FormGroup>
              </Form>

              <Button color="primary" className="btn-round float-right" onClick={this.registerUser}>Register</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

