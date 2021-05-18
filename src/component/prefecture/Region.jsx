import React, { useState } from 'react';
import styled from 'styled-components';
import { Prefecture } from './Prefecture';

export const Region = ({
  regionPrefectures,
  region
}) => {

  // 都道府県（true: 表示, false: 非表示）
  const [prefecture, setPrefecture] = useState(false)
  const hdPrefecture = () => setPrefecture(!prefecture)

  return (
    <Wrapper>
      <p>
        {region.regionName}
        <i className="fas fa-chevron-down" onClick={hdPrefecture}/>
      </p>
      <form>
        {
          regionPrefectures.map((item) => {
            return (
              prefecture &&
              <Prefecture
                key={item.prefCode}
                prefecture={item}
              />
            )
          })
        }
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div``