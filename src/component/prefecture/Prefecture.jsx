import React from 'react';
import styled from 'styled-components';

export const Prefecture = ({
  prefecture,
  selectingPrefectures,
  hdSelectingPrefectures
}) => {
  return (
    <Wrapper>
      <label>
        <input
          type="checkbox"
          checked={selectingPrefectures.includes(prefecture.prefCode)}
          onChange={() => hdSelectingPrefectures(prefecture.prefCode)}
          />
        {prefecture.prefName}
      </label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 5px 10px;
  transition: all 0.3s ease;
  & > label {
    font-size: 14px;
    & > input[type=checkbox] {
      transform: translateY(1px);
      color: #8d8585;
    }
  }
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`