/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPrefecturesData } from "./async/getPrefecruresData";
import { Chart } from "./component/chart/Chart";
import { Prefectures } from "./component/prefecture/Prefectures";

export const App = () => {

  const [prefectureData, setPrefectureData] = useState([])

  // console.log(prefectureData)

  useEffect(() => {
    getPrefecturesData(setPrefectureData)
  },[])

  return (
    <Wrapper>
      <Prefectures
        prefectureData={prefectureData}
      />
      <Chart/>
    </Wrapper>
  )
};

const Wrapper = styled.div`

`
