import React     from "react";
import Customers from '../../apis/Customers'

import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Button,
  Spinner
} from "reactstrap";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username  : '',
      fname     : '',
      lname     : '',
      email     : '',
      phone     : '',
      address   : '',
      birthday  : '',
      password  : '',

      // For spinner
      isProcessing: false
    }
  }

  registerUser = () => {
    // Client-side validation here

    // Initial Data Preparation
    const customerForm = Object.assign({}, this.state);
    delete customerForm.isProcessing;

    // Start adding registering new customer
    this.setState({isProcessing: true});
    Customers.register(customerForm)
      .then(res => {
        this.props.history.push('/login')
      })
      .catch(error => {
        console.log(error.message);
        this.setState({isProcessing: false});
      })
  };

  renderForm = () => {
    return (
      <div>
        <Form>
          {/* USERNAME */}
          <FormGroup>
            <label>Username*</label>
            <Input
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
              type="text"
              autoComplete="username"
            />
          </FormGroup>

          {/* EMAIL */}
          <FormGroup>
            <label>Email*</label>
            <Input
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              type="email"
              autoComplete="Email"
            />
          </FormGroup>

          {/* FIRST NAME */}
          <FormGroup>
            <label>First Name*</label>
            <Input
              value={this.state.fname}
              onChange={(e) => this.setState({ fname: e.target.value })}
              type="text"
              autoComplete="firstname"
            />
          </FormGroup>

          {/* LAST NAME */}
          <FormGroup>
            <label>Last Name*</label>
            <Input
              value={this.state.lname}
              onChange={(e) => this.setState({ lname: e.target.value })}
              type="text"
              autoComplete="lastname"
            />
          </FormGroup>

          {/* CONTACT NUMBER */}
          <FormGroup>
            <label>Contact Number*</label>
            <Input
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
              type="text"
              autoComplete="contact-number"
            />
          </FormGroup>

          {/* BIRTHDAY */}
          <FormGroup>
            <label>Birthdate</label>
            <Input
              value={this.state.birthday}
              onChange={(e) => this.setState({ birthday: e.target.value })}
              type="Date"
              autoComplete="birthdate"
            />
          </FormGroup>

          {/* ADDRESS */}
          <FormGroup>
            <label>Address</label>
            <Input
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
              type="text"
              autoComplete="address"
            />
          </FormGroup>

          {/* PASSWORD */}
          <FormGroup>
            <label>Password</label>
            <Input
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
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
      </div>
    )
  };

  renderSpinner = () => {
    return (
      <div className="text-center p-5">
        <Spinner color="primary" />
        <p className="p-2">Creating an Account. Please Wait.</p>
      </div>
    )
  };

  render() {
    return (
      <div className="text-center p-3">
        <Card style={{maxWidth: "600px", textAlign: "left"}}>
          <CardHeader>
            <h5 className="title text-primary">Registration</h5>
          </CardHeader>

          <CardBody>
            {(() => this.state.isProcessing ? this.renderSpinner() : this.renderForm())()}
          </CardBody>
        </Card>
      </div>
    );
  }
}

