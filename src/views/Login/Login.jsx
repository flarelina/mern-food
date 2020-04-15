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

export default class Login extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader>
              <h5 className="title text-primary">Login</h5>
            </CardHeader>
          
            <CardBody>
              <Form>
                <FormGroup>
                  <label>Username/Email</label>
                  <Input
                    placeholder="Please enter your username or email."
                    type="text"
                    autoComplete="username"
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

              <Button color="primary" className="btn-round float-right">Login</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

