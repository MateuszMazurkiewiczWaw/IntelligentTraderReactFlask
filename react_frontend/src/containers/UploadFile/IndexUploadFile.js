import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import UploadFileCard from "./components/UploadFileCard";
import Papa from 'papaparse';

class IndexUploadFile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            csvfile: undefined
        };
        this.updateData = this.updateData.bind(this);
    }

    handleChange = event => {
        this.setState({
            csvfile: event.target.files[0]
        });
    };

    importCSV = () => {
        const {csvfile} = this.state;
        Papa.parse(csvfile, {
            complete: this.updateData,
            header: true
        });
    };

    updateData(result) {
        var data = result.data;
        console.log(data);
    }

    render() {

        var buttonStyle = {
            fontSize: "2em",
            fontFamily: "sens-serif",
            //color: "#333333",
            fontWeight: "bold",
            backgroundColor: "#646643",
            color: "#FFFFFF"
        };


        return (
            <Container className="dashboard">
                <Row>
                    <Col md={12}>
                        <h3 className="page-title">Importowanie danych</h3>
                    </Col>
                </Row>
                <Row>
                    <UploadFileCard/>
                </Row>
                <div>
                    <form method="post" encType="multipart/form-data">
                        <input
                            className="csv-input"
                            type="file"
                            ref={input => {
                                this.filesInput = input;
                            }}
                            name="file"
                            placeholder={null}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="Upload"/>
                        <p/>
                        <button onClick={this.importCSV} style={buttonStyle}>Zaimportuj plik</button>
                    </form>
                </div>
            </Container>
        );
    }
}

export default IndexUploadFile;