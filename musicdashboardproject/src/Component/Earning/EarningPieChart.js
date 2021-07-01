import React, { Component } from "react";
import Chart from "react-apexcharts";

class EarningPieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
        series: [ 24345, 8000, 20000, 15000, 7000, 12000],
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
        colors:['#889AFF', '#D7DDFF'],
        labels: ['The Playah', 'Bong Hoa Dep Nhat', 'Muon roi ma sao con', 'Loi Xin loi muon mang', 'Thu do Cypher', 'Trai tim mua dong'],
        dataLabels: {
            enabled: true,

        }
      },

      
      

      
    };
  }

  render() {
    return (
      <div className="Pie">
          <div className="streamText">
              <h5>Most value songs</h5>
          </div>
        <div className="row">
          <div className="mixed-chart">
            <Chart
                type= 'pie'
                title={this.state.title}
              options={this.state.options}
              series={this.state.series}
              labels={this.state.labels}
              width="100%"
              height="300px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EarningPieChart;