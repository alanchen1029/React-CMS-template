import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AreaChartComponent, BarChartComponent, RadarChartComponent, PieChartComponent } from './components';

export const Charts = (): JSX.Element =>
{
  return (
    <div className="panel">
      <div className="panel-header">
        <div className="header-left">
          Charts
        </div>
      </div>
      <div className="panel-body">
        <Container fluid>
          <Row>
            <Col sm={12} md={6}>
              <AreaChartComponent />
            </Col>
            <Col sm={12} md={6}>
              <BarChartComponent />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <RadarChartComponent />
            </Col>
            <Col sm={12} md={6}>
              <PieChartComponent />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}