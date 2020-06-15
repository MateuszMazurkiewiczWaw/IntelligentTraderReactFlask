import React, {Component} from "react";
import PolarAreaChart from "../charts/PolarAreaChart";
import {Col, Container, Row} from "reactstrap";
import PolarAreaChartCard from "./components/PolarAreaChartCard";
import Papa from 'papaparse';
import ChartDataSource from 'chartjs-plugin-datasource';

class IndexPolarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            data: [],
            chartData: {}
        };

        this.getData = this.getData.bind(this);
        this.updateData = this.updateData.bind(this);
    }


    async getCsvData() {
        let csvData = await this.fetchCsv();

        Papa.parse(csvData, {
            preview: 1,
            complete: this.getData
        });
    }

    fetchCsv() {
        return fetch('../../../data.csv').then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                return decoder.decode(result.value);
            });
        });
    }

    getData(result) {
        this.setState({data: result.data});
    }

    componentWillMount() {
        this.getChartData();
        //this.getCsvData();

        Papa.parse('../../../data.csv', {
            header: true,
            download: true,
            skipEmptyLines: true,
            // Here this is also available. So we can call our custom class method
            complete: this.updateData
        });
    }

    updateData(result) {
        const data = result.data;
        // Here this is available and we can call this.setState (since it's binded in the constructor)
        this.setState({data: data}); // or shorter ES syntax: this.setState({ data });
        console.log(this.state.data)
    }


    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: [
                    '21:43','21:44','21:45','21:46','21:47','21:48','21:49','21:50','21:51','21:52','21:53','21:54','21:55','21:56','21:57','21:58'
                ],

                datasets: [
                    {
                        label: 'Kurs rzeczywisty 18.01.2019',
                        data: [
                            1.13644,1.13639,1.13633,1.136395,1.13641,1.136435,1.13642,1.13643,1.136375,1.136385,1.13633,1.136285,1.13629,1.135975,1.136105,1.136
                        ],
                        borderColor: "#3cba9f",
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255,184,42,0.6)',
                            'rgba(77,235,152,0.6)',
                            'rgba(18,255,33,0.6)',
                            'rgba(170,139,192,0.6)',
                            'rgba(255,0,198,0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(220,255,37,0.6)',
                            'rgba(192,30,28,0.6)',
                            'rgba(255,0,198,0.6)',
                            'rgba(251,255,227,0.6)'
                        ],
                        hoverBorderColor: "#ba4f45",
                        fill: false
                    }
                ]
            }
        });
    }

    render() {

        const option = {
            plugins: {
                datasource: {
                    url: 'data.csv',
                    rowMapping: 'index'
                }
            }
        };

        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">Kurs pary walutowej EUR/USD - wykres PolarAreaChart</h3>
                    </Col>
                </Row>
                <Row>
                    <PolarAreaChartCard/>
                </Row>
                <div>
                    <PolarAreaChart chartData={this.state.chartData} currencyPair="EUR/USD" legendPosition="bottom"
                                    plugins={[ChartDataSource]} options={option}/>
                </div>
                <div>
                    <p>{this.props.data}</p>
                    </div>
            </Container>
        );
    }
}

export default IndexPolarChart;