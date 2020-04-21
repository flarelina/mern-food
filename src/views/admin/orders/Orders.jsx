
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Table,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

const tableHeader = [
    {label: 'Name'         , key: 'name'},
    {label: 'Quantity'     , key: 'quantity'},
    {label: 'Total Amount' , key: 'totalAmount'},
    {label: 'Date Ordered' , key: 'dateOrdered'},
    {label: 'Order Status' , key: 'orderStatus'},
];

const tableData = [
  {
    name        : "Cecilia Salenga",
    quantity    : 1,
    totalAmount : 100,
    dateOrdered : "Jan 1, 2019",
    orderStatus : "Received"
  }
];

class Orders extends React.Component {

  renderTableHeader() {
    return tableHeader.map(header => {
      return <th key={header.key}>{header.label}</th>
    })
  }

  renderTableData() {
    return tableData.map((order, key) => {
      return tableHeader.map(header => {
        return <td key={`${key}${header.key}`} >{order[header.key]}</td>
      })
    })
  }

  render() {
    return (
      <>
        <PanelHeader size="xs" />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Orders</h5>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        {this.renderTableHeader()}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {this.renderTableData()}
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Orders;
