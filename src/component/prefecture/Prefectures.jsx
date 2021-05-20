/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { sortRegion } from './function/sortRegion';
import { Regions } from './Regions';

export const Prefectures = ({
  prefectureData,
  selectingPrefectures,
  hdSelectingPrefectures
}) => {
  return (
    <Wrapper>
      <h2>都道府県</h2>
      <Regions
        prefectureData={prefectureData}
        selectingPrefectures={selectingPrefectures}
        hdSelectingPrefectures={hdSelectingPrefectures}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 10px;
  margin-bottom: 40px;
  & > h2 {
    font-size: 18px;
  }
`