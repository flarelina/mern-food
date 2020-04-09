
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
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class Products extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="xs" />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Products</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label>Item Code*</label>
                          <Input
                            placeholder="Item Code"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="5">
                        <FormGroup>
                          <label>Item Name*</label>
                          <Input
                            placeholder="Item Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>
                            Price*
                          </label>
                          <Input placeholder="0.00" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Description</label>
                          <Input
                            cols="80"
                            placeholder="Item Description..."
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
        
          </Row>
        </div>
      </>
    );
  }
}

export default Products;
