import React from 'react';
import styled from 'styled-components';
import { Prefecture } from './Prefecture';

export const Region = ({
  regionPrefectures
}) => {
  console.log(regionPrefectures)
  return (
    <Wrapper>
      <Prefecture/>
    </Wrapper>
  )
}

const Wrapper = styled.div``