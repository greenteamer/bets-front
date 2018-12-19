import React from 'react';
import styled from 'styled-components';

import { CardContainer, CardHeader, CardContent, Wrapper, GlobalStyle } from '../components/common';


export const CardsMain = () => (
  <Wrapper>
    <CardContainer>
      <CardHeader>Card Header</CardHeader>
      <CardContent>
        card content
      </CardContent>
    </CardContainer>
    <GlobalStyle />
  </Wrapper>
)
