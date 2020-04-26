import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
} from "reactstrap";

import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

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
  }
];

class Customers extends React.Component {

  renderTableHeader = () => {
    return tableHeader.map(header => {
      return <th key={header.key}>{header.label}</th>
    })
  };

  renderTableData() {
    return tableData.map((order, key) => {
      return tableHeader.map(header => {
        if(header.key === "action") {
          return (
            <td key={`${key}${header.key}`} >
              <Button color="primary" outline>View Details</Button>
            </td>
          )
        }

        return <td key={`${key}${header.key}`} >{order[header.key]}</td>
      })
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
                  <tr>{this.renderTableData()}</tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Customers;
