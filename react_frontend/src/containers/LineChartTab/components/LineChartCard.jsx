import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const LineChartCard = () => (

  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h3 className="bold-text">Silnik predykcji "Intelligent Trader"</h3>
          <h3 className="subhead">Prognozy kursu pary walutowej EUR/USD LineChart</h3>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default LineChartCard;
