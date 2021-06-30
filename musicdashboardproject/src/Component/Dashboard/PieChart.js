import React, { Component } from "react";
import Chart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,

              },
              legend: {
                position: 'bottom'
              }
            }
          }],
        dataLabels: {
            enabled: true,
        },
        legend:{
          position: 'left',
        },
        labels: ['Spain', 'United Kingdom', 'EEUU', 'VietNam'],
      },
      series: [44, 55, 41, 17, 15],
      
      

      
    };
  }

  render() {
    return (
      <div className="Pie">
          <div className="streamText">
              <h5>Streams by countries</h5>
          </div>
        <div className="row">
          <div className="mixed-chart">
            <Chart
                type= 'donut'
                title={this.state.title}
              options={this.state.options}
              series={this.state.series}
              labels={this.state.labels}
              width="100%"
              height="488px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PieChart;