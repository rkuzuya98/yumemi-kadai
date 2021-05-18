import React, { useState } from 'react';
import styled from 'styled-components';
import { Prefecture } from './Prefecture';

export const Region = ({
  regionPrefectures,
  region,
  selectingPrefectures,
  hdSelectingPrefectures
}) => {

  // 都道府県（true: 表示, false: 非表示）
  const [prefecture, setPrefecture] = useState(false)
  const hdPrefecture = () => setPrefecture(!prefecture)

  return (
    <Wrapper>
      <div>
        <p>
          <span
            onClick={hdPrefecture}
          >
            {region.regionName}
          </span>
        </p>
        <i
          className={
            prefecture ?
            "fas fa-chevron-up" :
            "fas fa-chevron-down"
          }
          onClick={hdPrefecture}
        />
      </div>
      <form>
        {
          regionPrefectures.map((item) => {
            return (
              prefecture &&
              <Prefecture
                key={item.prefCode}
                prefecture={item}
                selectingPrefectures={selectingPrefectures}
                hdSelectingPrefectures={hdSelectingPrefectures}
              />
            )
          })
        }
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;
  & > div {
    position: relative;
    padding: 0px 10px;
    & > p {
      /* font-size:  */
      font-weight: bold;
      & > span {
        padding: 5px 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          opacity: 0.5;
        }
      }
    }
    & > i {
      position: absolute;
      color: #333;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      border-radius: 50%;
      transition: all 0.3s ease;
      &.fas.fa-chevron-up {
        padding: 6px 8px 10px 8px;
      }
      &.fas.fa-chevron-down {
        padding: 10px 8px 6px 8px;
      }
      &:hover {
        color: white;
        background-color: #333;
        cursor: pointer;
      }
    }
  }
`