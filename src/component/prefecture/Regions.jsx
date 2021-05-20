import React from 'react';
import styled from 'styled-components';
import { regionData } from './data/regionCode';
import { sortRegion } from './function/sortRegion';
import { Region } from './Region';

export const Regions = ({
  prefectureData,
  selectingPrefectures,
  hdSelectingPrefectures
}) => {
  return (
    <Wrapper>
      {
        regionData.map((item) => {
          // 現在処理中の地方に含まれる都道府県を格納
          const regionPrefectures = []
          prefectureData.map((d) => {
            const regionCode = sortRegion(d.prefCode);
            if (regionCode === item.regionCode) {
              // 各都道府県の地方と現在処理中の地方が一致した場合
              regionPrefectures.push(d)
            }
          })
          return (
            // 地方
            <Region
              key={item.regionCode}
              regionPrefectures={regionPrefectures}
              region={item}
              selectingPrefectures={selectingPrefectures}
              hdSelectingPrefectures={hdSelectingPrefectures}
            />
          )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.div``