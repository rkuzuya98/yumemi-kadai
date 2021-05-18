import React from 'react';
import styled from 'styled-components';

export const Prefecture = ({
  prefecture
}) => {
  return (
    <Wrapper>
      <label>
        <input
          type="checkbox"
          />
        {prefecture.prefName}
      </label>
    </Wrapper>
  )
}

const Wrapper = styled.div``