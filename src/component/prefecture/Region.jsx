import React, { useState } from 'react';
import styled from 'styled-components';
import { sortRegion } from './function/sortRegion';
import { RegionPrefectures } from './RegionPrefectures';

export const Region = ({
  regionPrefectures,
  region,
  selectingPrefectures,
  hdSelectingPrefectures
}) => {

  // 都道府県（true: 表示, false: 非表示）
  const [showPrefecture, setShowPrefecture] = useState(false)
  const hdShowPrefecture = () => setShowPrefecture(!showPrefecture)

  // 各地方の選択中の都道府県の数を取得
  const regionPrefecturesLength = (region) => {
    let count = 0;
    selectingPrefectures.map((prefecture) => {
      if (sortRegion(prefecture) === region.regionCode) {
        count = count + 1
      }
    })
    return count
  }

  return (
    <Wrapper>
      <div>
        <p>
          <span
            onClick={hdShowPrefecture}
          >
            {region.regionName}
          </span>
          <span>
            {regionPrefecturesLength(region)}
          </span>
        </p>
        <i
          className={
            showPrefecture ?
            "fas fa-chevron-up" :
            "fas fa-chevron-down"
          }
          onClick={hdShowPrefecture}
        />
      </div>
      {/* 地方に含まれる都道府県群 */}
      <RegionPrefectures
        showPrefecture={showPrefecture}
        regionPrefectures={regionPrefectures}
        selectingPrefectures={selectingPrefectures}
        hdSelectingPrefectures={hdSelectingPrefectures}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;
  & > div:first-of-type {
    height: 44px;
    position: relative;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > p {
      display: flex;
      align-items: center;
      font-weight: bold;
      & > span {
        cursor: pointer;
        &:first-of-type {
          font-size: 14px;
          padding: 5px 10px;
          transition: all 0.3s ease;
          &:hover {
            opacity: 0.5;
          }        
        }
        &:last-of-type {
          font-size: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          padding: 0 0 0.5px 0;
          width: 22px;
          height: 22px;
          background-color: #ddd;
          color: black;
        }
      }
    }

    & > i {
      position: absolute;
      color: #333;
      top: 50%;
      right: 10px;
      width: 22px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(-50%);
      border-radius: 50%;
      transition: all 0.3s ease;
      font-size: 12px;
      padding: 2px 1px 0px 1px;
      &:hover {
        color: white;
        background-color: #333;
        cursor: pointer;
      }
    }
  }
`