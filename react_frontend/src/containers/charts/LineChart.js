import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component{
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
                <Line
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

export default LineChart;