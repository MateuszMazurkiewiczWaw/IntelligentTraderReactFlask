import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class DoughnutChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'center',
    }

    render(){
        return (
            <div className="chart">
                <Doughnut
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                        title:{
                            display:this.props.displayTitle,
                            text:'Kurs pary walutowej ' + this.props.currencyPair,
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        },

                    }}
                />
            </div>
        )
    }
}

export default DoughnutChart;