import React, { Component } from "react";
import Chart from "react-apexcharts";

class EarningAreaGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Sep", "Oct"]
        },
        yaxis:{
            categories:[5,10,15,20,25]
        },
        stroke: {
            curve: 'smooth'
          },
        title:{
            text: "New listeners by month",
            align: 'left',
            margin: 30,
            offsetX: 20,
            offsetY: 10,
            floating: false,
            style: {
              fontSize:  '14px',
              fontWeight:  'bold',
              fontFamily:  undefined,
              color:  '#2E3B52',
            },
          },
          tooltip:{
              enabled:false
          },
          colors:['#C887EB', '#5E77FF'],
          legend:{
              show: false
          },
          dataLabels: {
              enabled: true,
              enabledOnSeries: 3,
          }
      },
      series: [
        {
          
          data: [5000, 15000, 8000, 5000, 8000, 20000, 24345, 17000]
        },{
            
            data: [5000, 8000, 9000, 16000, 7000, 3000, 13000,22000]
        }
      ]
    };
  }

  render() {
    return (
      <div className="Graph">
        <div className="row">
          <div className="mixed-chart">
            <Chart
                title={this.state.title}
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="100%"
              height="375px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EarningAreaGraph;