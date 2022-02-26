import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Logo from "../assets/images/logo.png";

class DeviseLayout extends React.Component
{
  render(): JSX.Element
  {
    return (
      <div className="layout-devise">
        <Container fluid>
          <Row >
            <Col className="devise-left" md={6}>
              <div className="logo-area">
                <img src={Logo} alt="" />
              </div>
            </Col>
            <Col className="devise-right" md={6} sm={12}>
              <div className="devise-main">{this.props.children}</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { DeviseLayout };
