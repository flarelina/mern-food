import React  from 'react';

import {
  Button,
  Col,
  FormGroup,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row
} from 'reactstrap';


class CustomerModal extends React.Component {
  renderCustomerForm = () => {
    if(this.props.selectedCustomer) {
      const {username, email} = this.props.selectedCustomer

      return (
        <Form>
          <Row>
            {/* USERNAME */}
            <Col className="pr-1" md="6">
              <FormGroup>
                <label>Username</label>
                <Input
                  disabled
                  defaultValue={username}
                  type="text"
                />
              </FormGroup>
            </Col>

            {/* EMAIL */}
            <Col className="pl-1" md="6">
              <FormGroup>
                <label>
                  Email address
                </label>
                <Input
                  disabled
                  defaultValue={email}
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            {/* FIRST NAME */}
            <Col className="pr-1" md="6">
              <FormGroup>
                <label>First Name</label>
                <Input
                  defaultValue="Mike"
                  type="text"
                />
              </FormGroup>
            </Col>


            {/* LAST NAME */}
            <Col className="pl-1" md="6">
              <FormGroup>
                <label>Last Name</label>
                <Input
                  defaultValue="Andrew"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>


          {/* CONTACT NUMBER */}
          <FormGroup>
            <label>Contact Number</label>
            <Input
              defaultValue=""
              type="text"
            />
          </FormGroup>

          {/* ADDRESS*/}
          <FormGroup>
            <label>Address</label>
            <Input
              defaultValue=""
              type="text"
            />
          </FormGroup>

        </Form>
      );
    }

    return
  };

  render() {
    const {isShowModal, hideCustomerModal} = this.props;

    return (
      <Modal isOpen={isShowModal} toggle={hideCustomerModal}>
        <ModalHeader toggle={hideCustomerModal}>View Customer</ModalHeader>

        <ModalBody>
          {this.renderCustomerForm()}
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={hideCustomerModal}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
};

export default CustomerModal;