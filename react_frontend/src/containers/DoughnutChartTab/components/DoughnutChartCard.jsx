import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const DoughnutChartCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h3 className="bold-text">Silnik predykcji "Intelligent Trader"</h3>
          <h3 className="subhead">Prognozy kursu pary walutowej EUR/USD Doughnut Chart</h3>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default DoughnutChartCard;
