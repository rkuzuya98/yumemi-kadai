/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

export const Chart = ({
  populations
}) => {
  
  // 何も選択してない場合に挿入するデータ
  const defaultData = [{
    data: [],
    name: "都道府県"
  }]
  
  for(let i = 0; i < 13; i++) {
    defaultData[0].data.push(null)
  }

  const options = {
    title: {
      text: '',
    },
    yAxis: {
      title: {
        text: '',
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
    series: populations.length ? populations : defaultData
  };

  Highcharts.setOptions({
    lang: {
    thousandsSep: ',',
    numericSymbols: null
    }
  });


  return (
    <Wrapper>
      <h2>グラフ</h2>
      <span>（人口数）</span>
      <span>（年度）</span>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding: 0 10px;
  margin-bottom: 40px;
  & > span {
    font-size: 12px;
    color: #555;
    z-index: 100;
    &:first-of-type {
      position: absolute;
      top: 55px;
      left: 20px;
    }
    &:last-of-type {
      position: absolute;
      top: 422px;
      right: 10px;
    }
  }
  & > h2 {
    font-size: 18px;
    margin-bottom: 30px;
  }
`