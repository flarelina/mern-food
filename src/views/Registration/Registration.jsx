import React     from "react";
import Customers from '../../apis/Customers'

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Spinner
} from "reactstrap";

import {required} from '../../references/validations'

const validations = {
  username : [{message: 'This field is required', fn: required}],
  email    : [{message: 'This field is required', fn: required}],
  lname    : [{message: 'This field is required', fn: required}],
  fname    : [{message: 'This field is required', fn: required}],
  phone    : [{message: 'This field is required', fn: required}],
  address  : [{message: 'This field is required', fn: required}],
  birthday : [{message: 'This field is required', fn: required}],
  password : [{message: 'This field is required', fn: required}],
  confirmPassword: [{message: 'This field is required', fn: required}],
};

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
      confirmPassword: '',

      // Error Messages
      usernameErr  : '',
      fnameErr     : '',
      lnameErr     : '',
      emailErr     : '',
      phoneErr     : '',
      addressErr   : '',
      birthdayErr  : '',
      passwordErr  : '',
      confirmPasswordErr: '',

      // For spinner
      isProcessing: false
    }
  }

  validateAll = () => {
    const errors = [];

    Object.keys(validations).forEach(key => {
      validations[key].forEach(validation => {
        const res = validation.fn(this.state[key]);

        if(res.error) {
          this.setState({[`${key}Err`]: validation.message});
          errors.push(true);
        }
      });
    });

    return errors.some(e => !!e)
  };

  registerUser = () => {
    // Client-side validation here
    if(this.validateAll()) {return}

    // Initial Data Preparation
    const customerForm = {
      username : this.state.username,
      fname    : this.state.fname,
      lname    : this.state.lname,
      email    : this.state.email,
      phone    : this.state.phone,
      address  : this.state.address,
      birthday : this.state.birthday,
      password : this.state.password
    };

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

  handleInput = (event) => {
    const {name, value} = event.target;

    // Set Value
    this.setState({[name]: value});

    // Validate
    this.setState({[`${name}Err`]: ''});
    validations[name].forEach(validation => {
      const res = validation.fn(value);

      if(res.error) {
        this.setState({[`${name}Err`]: validation.message})
      }
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
              onChange={this.handleInput}
              type="text"
              autoComplete="username"
              name="username"
              invalid={!!this.state.usernameErr}
            />
            <FormFeedback>{this.state.usernameErr}</FormFeedback>
          </FormGroup>

          {/* EMAIL */}
          <FormGroup>
            <label>Email*</label>
            <Input
              value={this.state.email}
              onChange={this.handleInput}
              type="email"
              autoComplete="Email"
              name="email"
              invalid={!!this.state.emailErr}
            />
            <FormFeedback>{this.state.emailErr}</FormFeedback>
          </FormGroup>

          {/* FIRST NAME */}
          <FormGroup>
            <label>First Name*</label>
            <Input
              value={this.state.fname}
              onChange={this.handleInput}
              type="text"
              autoComplete="firstname"
              name="fname"
              invalid={!!this.state.fnameErr}
            />
            <FormFeedback>{this.state.fnameErr}</FormFeedback>
          </FormGroup>

          {/* LAST NAME */}
          <FormGroup>
            <label>Last Name*</label>
            <Input
              value={this.state.lname}
              onChange={this.handleInput}
              type="text"
              autoComplete="lastname"
              name="lname"
              invalid={!!this.state.lnameErr}
            />
            <FormFeedback>{this.state.lnameErr}</FormFeedback>
          </FormGroup>

          {/* CONTACT NUMBER */}
          <FormGroup>
            <label>Contact Number*</label>
            <Input
              value={this.state.phone}
              onChange={this.handleInput}
              type="text"
              autoComplete="contactnumber"
              name="phone"
              invalid={!!this.state.phoneErr}
            />
            <FormFeedback>{this.state.phoneErr}</FormFeedback>
          </FormGroup>

          {/* BIRTHDAY */}
          <FormGroup>
            <label>Birthdate</label>
            <Input
              value={this.state.birthday}
              onChange={this.handleInput}
              type="Date"
              autoComplete="birthdate"
              name="birthday"
              invalid={!!this.state.birthdayErr}
            />
            <FormFeedback>{this.state.birthdayErr}</FormFeedback>
          </FormGroup>

          {/* ADDRESS */}
          <FormGroup>
            <label>Address</label>
            <Input
              value={this.state.address}
              onChange={this.handleInput}
              type="text"
              autoComplete="address"
              name="address"
              invalid={!!this.state.addressErr}
            />
            <FormFeedback>{this.state.addressErr}</FormFeedback>
          </FormGroup>

          {/* PASSWORD */}
          <FormGroup>
            <label>Password</label>
            <Input
              value={this.state.password}
              onChange={this.handleInput}
              placeholder="***********"
              type="password"
              autoComplete="current-password"
              name="password"
              invalid={!!this.state.passwordErr}
            />
            <FormFeedback>{this.state.passwordErr}</FormFeedback>
          </FormGroup>

          {/* CONFIRM PASSWORD */}
          <FormGroup>
            <label>Confirm Password</label>
            <Input
              value={this.state.confirmPassword}
              onChange={this.handleInput}
              placeholder="***********"
              type="password"
              autoComplete="current-password"
              name="confirmPassword"
              invalid={!!this.state.confirmPasswordErr}
            />
            <FormFeedback>{this.state.confirmPasswordErr}</FormFeedback>
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

