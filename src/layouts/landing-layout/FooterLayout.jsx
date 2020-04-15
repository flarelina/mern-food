import React from "react";
import './FooterLayout.css'

import { 
  Container, 
} from 'reactstrap';

const FooterLayout = () => {
  return (
    <Container className="footerLayout">
      Developed with <span className="text-primary">❤</span> by Phems 
    </Container>
  );
}

export default FooterLayout;
