import React   from "react";
import Account from '../../apis/Account'

import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Button, FormFeedback
} from "reactstrap";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username      : '',
      password      : '',
      usernameTouch : false,
      passwordTouch : false,
    }
  }
  
  login = () => {
    // Touch Fields
    this.setState({usernameTouch: true});
    this.setState({passwordTouch: true});

    if(!this.state.password || !this.state.username) {
      return;
    }

    Account.login({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        if(res.data.error) {
          console.log(res.data.error);
          return;
        }

        this.props.history.push('/admin/customers')
      })
      .catch(error => {
        console.log(error.message);
      })
  };

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
                       value={this.state.username}
                       onChange={(event) => {
                         this.setState({username: event.target.value});
                         if(!this.state.usernameTouch) {
                           this.state.usernameTouch = true;
                         }
                       }}
                       autoComplete="username"
                       invalid={!this.state.username && this.state.usernameTouch}
                />
                <FormFeedback>Username/Email is required.</FormFeedback>
              </FormGroup>

              {/* PASSWORD */}
              <FormGroup>
                <label>Password</label>
                <Input placeholder="***********"
                       type="password"
                       value={this.state.password}
                       onChange={(event) => {
                         this.setState({password: event.target.value});
                         if(!this.state.passwordTouch) {
                           this.state.passwordTouch = true;
                         }
                       }}
                       autoComplete="current-password"
                       invalid={!this.state.password && this.state.passwordTouch}
                />
                <FormFeedback>Password is required.</FormFeedback>
              </FormGroup>
            </Form>

            <Button color="primary"
                    className="btn-round float-right"
                    onClick={this.login}>Login</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

