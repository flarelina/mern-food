import React from "react";

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

import PanelHeader  from "../../../components/PanelHeader/PanelHeader.jsx";
import MImageUpload from "../../../components/FileUpload/MImageUpload"

class Products extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PanelHeader size="xs" />

        <div className="content">
          <Card>
            <CardHeader>
                  <h5 className="title">Products</h5>
                </CardHeader>

            <CardBody>
              <Form>
                <Row>
                  <Col className="pb-4">
                    <MImageUpload></MImageUpload>
                  </Col>
                </Row>

                <Row>
                  {/* ITEM CODE */}
                  <Col className="pr-1" md="3">
                    <FormGroup>
                      <label>Item Code*</label>
                      <Input
                        placeholder="Item Code"
                        type="text"
                      />
                    </FormGroup>
                  </Col>

                  {/* ITEM NAME */}
                  <Col className="px-1" md="5">
                    <FormGroup>
                      <label>Item Name*</label>
                      <Input
                        placeholder="Item Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>

                  {/* ITEM PRICE */}
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
                  {/* ITEM DESCRIPTION*/}
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

                <div className="text-right">
                  <Button color="primary">
                    SUBMIT
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
