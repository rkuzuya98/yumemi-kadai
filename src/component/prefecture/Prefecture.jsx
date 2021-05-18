import React from 'react';
import styled from 'styled-components';

export const Prefecture = ({
  prefecture
}) => {
  return (
    <Wrapper>
      {prefecture.prefName}
    </Wrapper>
  )
}

const Wrapper = styled.div``