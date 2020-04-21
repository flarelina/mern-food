import React from "react";
import './Home.css'

import {
  Container,
  Row,
  Col
} from "reactstrap";

// Temporary Images
const images = [
  "https://images.squarespace-cdn.com/content/v1/5ae2b8fdf93fd4d57303a71d/1553946990418-A59QCFS2KNLFQ1HPBG5H/ke17ZwdGBToddI8pDm48kA9rhCjhJUYcQpKsBaLXN1ZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIye_uGeP4isZUnhF2J4BSLX0iSmbQA7pLf20f1CNe8SkKMshLAGzx4R3EDFOm1kBS/Coconut+and+saffronn+mussels.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/5ae2b8fdf93fd4d57303a71d/1552739107380-GX6VQI7SF6DDVKF28E5Y/ke17ZwdGBToddI8pDm48kA9rhCjhJUYcQpKsBaLXN1ZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIye_uGeP4isZUnhF2J4BSLX0iSmbQA7pLf20f1CNe8SkKMshLAGzx4R3EDFOm1kBS/Morrocan-lamb-apricots.jpg?format=1500w"
];

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <div style={{textAlign: 'center', padding: '20px'}}>
          <h6 className="text-primary">~ NEW ~</h6>
        </div>

        {/*Images*/}
        <Row>
          <Col md={6} xs={12} className="text-center">
            <img className="homeImage" src={images[0]} alt="test"></img>
            <div className="itemPrice">P 50.00</div>
            <div className="itemDescription">Coconut and Shaffron Mussels</div>
          </Col>

          <Col md={6} xs={12} className="text-center">
            <img className="homeImage" src={images[1]} alt="test2s"></img>
            <div className="itemPrice">P 120.00</div>
            <div className="itemDescription">Moroccan Lamb with Apricots</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

