import React from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

export const Chart = ({
  populations
}) => {
  console.log(populations)
  const options = {
    title: {
      // text: '人口数'
    },
    yAxis: {
      title: {
        text: '人口数',
        rotation: 0,
        x: 34,
        y: -160,
        style: {
          fontWeight: 'bold'
        },
      }
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointInterval: 5,
        pointStart: 1960,
      }
    },
    series: populations
  };
  return (
    <Wrapper>
      <h2>グラフ</h2>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 10px;
  background-color: red;
  & > h2 {
    font-size: 18px;
  }
`