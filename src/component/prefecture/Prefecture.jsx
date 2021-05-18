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

const Wrapper = styled.div``