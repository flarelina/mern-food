import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
} from "reactstrap";

import PanelHeader   from "components/PanelHeader/PanelHeader.jsx";
import CustomerModal from "./CustomerModal"

// Temporary Data
const tableHeader = [
    {label: 'Name'            , key: 'name'},
    {label: 'Username'        , key: 'username'},
    {label: 'Email'           , key: 'email'},
    {label: 'Date Registered' , key: 'dateRegistered'},
    {label: 'Action'          , key: 'action'}
];

const tableData = [
  {
    name           : "Cecilia Salenga",
    username       : "ces25",
    email          : "ceciliasalenga@email.com",
    dateRegistered : "January 04, 2020"
  },
  {
    name           : "Cecilia Salenga 2",
    username       : "ces252",
    email          : "ceciliasalenga2@email.com",
    dateRegistered : "January 05, 2020"
  }
];

class Customers extends React.Component {
  state = {
    isShowModal     : false,
    selectedCustomer: null
  };

  showCustomerModal = (data) => () => {
    this.setState({
      isShowModal: true,
      selectedCustomer: data
    })
  };

  hideCustomerModal = () => {
    this.setState({
      isShowModal      : false,
      selectedCustomer : null
    })
  };

  renderTableHeader = () => {
    return tableHeader.map(header => {
      return <th key={header.key}>{header.label}</th>
    })
  };

  renderTableData = (order, key) => {
    return tableHeader.map(header => {
      if(header.key === "action") {
        return (
          <td key={`${key}${header.key}`} >
            <Button
              color="primary"
              outline
              onClick={this.showCustomerModal(order)}
            >View Details</Button>
          </td>
        )
      }

      return <td key={`${key}${header.key}`} >{order[header.key]}</td>
    })
  };

  renderTableRow = () => {
    return tableData.map((order, key) => {
      return <tr key={key}>{this.renderTableData(order, key)}</tr>
    })
  };

  render() {
    return (
      <React.Fragment>
        <PanelHeader size="xs" />

        <div className="content">
          <Card>
            {/* PAGE TITLE */}
            <CardHeader>
              <h5 className="title">Customers</h5>
            </CardHeader>

            <CardBody>
              {/* ORDER TABLE */}
              <Table responsive>
                <thead className="text-primary">
                  <tr>{this.renderTableHeader()}</tr>
                </thead>

                <tbody>
                  {this.renderTableRow()}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>

        <CustomerModal
          isShowModal={this.state.isShowModal}
          hideCustomerModal={this.hideCustomerModal}
          selectedCustomer={this.state.selectedCustomer}
        />
      </React.Fragment>
    );
  }
}

export default Customers;
