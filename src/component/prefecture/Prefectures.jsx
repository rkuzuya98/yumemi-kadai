import React from 'react';
import styled from 'styled-components';
import { Regions } from './Regions';

export const Prefectures = () => {
  return (
    <Wrapper>
      <h2>都道府県</h2>
      <Regions/>
    </Wrapper>
  )
}

const Wrapper = styled.div``