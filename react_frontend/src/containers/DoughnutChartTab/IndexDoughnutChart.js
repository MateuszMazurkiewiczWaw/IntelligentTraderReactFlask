import React, {Component} from "react";
import DoughnutChart from "../charts/DoughnutChart";
import {Col, Container, Row} from "reactstrap";
import DoughnutChartCard from "./components/DoughnutChartCard";

class IndexPolarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: [
                   '21:54','21:55','21:56','21:57','21:58'
                ],
                datasets: [
                    {
                        label: 'Kurs rzeczywisty 18.01.2019',
                        data: [
                            1.13633,1.136285,1.13629,1.135975,1.136105,1.136
                        ],
                        borderColor: "#3cba9f",
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)'
                        ],
                        hoverBorderColor: "#ba4f45",
                        fill: false
                    }
                ]
            }
        });
    }

    render() {
        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">Kurs pary walutowej EUR/USD - wykres Doughnut</h3>
                    </Col>
                </Row>
                <Row>
                    <DoughnutChartCard/>
                </Row>
                <div>
                    <DoughnutChart chartData={this.state.chartData} currencyPair="EUR/USD" legendPosition="bottom"/>
                </div>
            </Container>
        );
    }
}

export default IndexPolarChart;