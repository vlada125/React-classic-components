import * as React from "react";
import PropTypes from "prop-types";
import { Container, } from "@mui/material";

import { BoxPanel, } from "../commons/styledComponents";

import Plot from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';

const PlotlyComponent = Plot(Plotly);

const Chart = () => {
  const y = [25, -35, -20, -5, 10, 25, 40, 55, 80, 60, 60];
  const x = [0, 5.5, 7, 14, 21, 28, 35, 42, 47, 49, 56];

  let shapes = [];
  let data = [];

  for (let i = 1; i < x.length - 1; i++) {
    // trace1 for the horizontal lines
    //TODO: horizontal lines should stop at the appropriate x and y values
    
    let bigger = y[i] > y[i-1] ? true : false
    
    let _w = (Math.abs(y[i] - y[i-1])/80+0.3)

    let _trace1 = {
      mode: 'lines',
      x: [x[i-1], x[i]-_w],
      y: [y[i-1], y[i-1]],
      type: 'line+markers',
      line: {
        color: y[i-1]<0 ? 'red' : (y[i-1]>50 ? 'blue':'black'),
        width: 1
      }
    };
    // trace2 for the diagonal joining lines
    //TODO: diagonal lines should cover about a percentage of the distance between the  horizontal lines. Needs corrections
    let _trace2 = {
      mode: 'lines',
      x: [x[i] - _w + 0.15, x[i] - 0.15],
      y: bigger ? [y[i-1] + 1.5, y[i] - 1.5] : [y[i-1] - 1.5 , y[i] + 1.5],
      type: 'line',
      line: {
        color: y[i]<0 || y[i-1]<0 ? 'red':(y[i]>50 || y[i-1]>50 ? 'blue':'black'),
        width: 1
      },
    };
    var diff = y[i] - y[i - 1];
    // trace3 for the vertical lines
    //TODO: vertical lines should take into consideration correct increase or decrease
    let _trace3 = {
      mode: 'lines',
      x: [x[i], x[i]],
      y: [1, diff],
      type: 'line',
      line: {
        color: diff > 0 ? 'black' : 'red',
        width: 5
      }
    };
    data.push(_trace1, _trace2, _trace3);
    shapes.push({
          type: 'path',
          path: `M ${x[i]-_w}, ${y[i-1]} Q ${x[i]-_w + 0.1}, ${y[i-1]} ${x[i]-_w + 0.15} ${!bigger ? y[i-1]-1.5 : y[i-1]+1.5}`,
          line: {
            color: y[i-1]<0 || y[i]<0 ? 'red' : ( y[i]>50 || y[i-1]>50 ? 'blue':'black'),
            width: 1
          }
          },{
          type: 'path',
          path: `M ${x[i] - 0.15}, ${bigger ? y[i]-1.5 : y[i]+1.5} Q ${x[i] - 0.1}, ${y[i]} ${x[i]}, ${y[i]}`,
          line: {
            color: y[i-1]<0 || y[i]<0 ? 'red' : ( y[i]>50 || y[i-1]>50 ? 'blue':'black'),
            width: 1
          }
          },)
  }

  let layout = {
    xaxis: {
      autotick: false,
      ticks: 'outside',
      tick0: 0,
      dtick: 5,
      ticklen: 10,
      tickwidth: 1,
      tickcolor: '#E0E0E0',
      side: 'top',
      
      showgrid: false,
      zeroline: false,
      showline: true,
      mirror: 'ticks',
      linecolor: '#E0E0E0',
      linewidth: 1
    },
    yaxis: {
      autotick: false,
      ticks: 'outside',
      tick0: 0,
      dtick: 20,
      ticklen: 8,
      tickwidth: 1,
      tickcolor: '#E0E0E0',

      showgrid: false,
      zeroline: true,
      showline: false,
      mirror: 'ticks',
      zerolinecolor: '#828282',
      zerolinewidth: 2,
    },
    showlegend: false,
    shapes: shapes,
  }

  return (
    <Container>
      <BoxPanel>
        <PlotlyComponent
          data={data}
          layout={layout}
        />
      </BoxPanel>
    </Container>
  );
};

Chart.propTypes = {
  children: PropTypes.any,
};

export default Chart;