import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

import "../assets/stylesheets/style.sass";

export const App = (): JSX.Element =>
{
  return (
    <Container>
      <Row>
        <Col><h1>React Template</h1></Col>
      </Row>
      {[
        'Webpack',
        'React',
        'Typescript',
        'Babel',
        'Bootstrap',
      ].map((variant, idx) => (
        <Alert key={idx} variant={"success"}>
          {variant}
        </Alert>
      ))}
    </Container>
  )
}