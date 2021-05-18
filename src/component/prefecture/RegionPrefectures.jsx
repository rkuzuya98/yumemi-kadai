import React from 'react'
import styled from 'styled-components'
import { Prefecture } from './Prefecture'

export const RegionPrefectures = ({
  showPrefecture,
  regionPrefectures,
  selectingPrefectures,
  hdSelectingPrefectures
}) => {
  return (
    <Wrapper>
      {
        showPrefecture &&
        <form>
          {
            regionPrefectures.map((item) => {
              return (
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
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* background-color: red; */
  & > form {
    padding: 5px 10px 15px 10px;
    display: flex;
    flex-wrap: wrap;
    /* font-weight: bold; */
  }
`