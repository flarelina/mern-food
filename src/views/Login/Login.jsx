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

export default class Login extends React.Component {
  render() {
    return (
      <div className="text-center p-3">
        <Card style={{maxWidth: "600px", textAlign: "left"}}>
          <CardHeader>
            <h5 className="title text-primary">Login</h5>
          </CardHeader>

          <CardBody>
            <Form>
              {/* USERNAME/EMAIL */}
              <FormGroup>
                <label>Username/Email</label>
                <Input placeholder="Please enter your username or email."
                       type="text"
                       autoComplete="username"/>
              </FormGroup>

              {/* PASSWORD */}
              <FormGroup>
                <label>Password</label>
                <Input placeholder="***********"
                       type="password"
                       autoComplete="current-password"/>
              </FormGroup>
            </Form>

            <Button color="primary" className="btn-round float-right">Login</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

