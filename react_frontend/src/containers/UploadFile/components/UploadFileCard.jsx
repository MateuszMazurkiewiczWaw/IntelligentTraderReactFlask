import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const UploadFileCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h3 className="bold-text">Silnik predykcji "Intelligent Trader"</h3>
          <h3 className="subhead">Zaimportuj gotowy plik CSV na potrzeby predykcji</h3>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default UploadFileCard;
