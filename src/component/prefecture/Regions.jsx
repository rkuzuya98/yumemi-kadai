/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { regionData } from './data/regionCode';
import { sortRegion } from './function/sortRegion';
import { Region } from './Region';

export const Regions = ({
  prefectureData
}) => {
  return (
    <Wrapper>
      {
        regionData.map((item) => {
          const regionPrefectures = []
          prefectureData.map((d) => {
            const regionCode = sortRegion(d.prefCode);
            if (regionCode === item.regionCode) {
              regionPrefectures.push(d)
            }
          })
          // console.log(item.regionCode)
          // console.log(regionPrefectures)
          return (
            <Region
              key={item.regionCode}
              regionPrefectures={regionPrefectures}
              region={item}
            />
          )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.div``