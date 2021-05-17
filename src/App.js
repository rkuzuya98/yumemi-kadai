import React from "react";
import styled from "styled-components";
import { Chart } from "./component/chart/Chart";
import { Prefectures } from "./component/prefecture/Prefectures";

export const App = () => {
  return (
    <Wrapper>
      <Prefectures/>
      <Chart/>
    </Wrapper>
  )
};

const Wrapper = styled.div`

`
