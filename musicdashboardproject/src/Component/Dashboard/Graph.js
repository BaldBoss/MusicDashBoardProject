import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
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
          }
      },
      series: [
        {
          name: "Men",
          data: [15, 10, 18, 5, 8, 20, 24, 17]
        },{
            name: 'Woman',
            data: [10, 24, 9, 16, 7, 3, 13,22]
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

export default Graph;