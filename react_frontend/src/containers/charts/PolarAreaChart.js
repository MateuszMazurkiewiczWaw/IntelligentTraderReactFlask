import React, {Component} from 'react';
import {Polar} from 'react-chartjs-2';
import ChartDataSource from 'chartjs-plugin-datasource';

class PolarAreaChart extends Component{
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
    };

    render(){
        return (
            <div className="chart">
                <Polar
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

                        plugins: {
                            datasource: {
                                url: 'data.csv'
                            }
                        }
                    }}
                />
            </div>
        )
    }
}

export default PolarAreaChart;


