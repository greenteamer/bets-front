import React from 'react';
import styled from 'styled-components';

import { CardContainer, CardHeader, CardContent, Wrapper, GlobalStyle } from '../components/common';


export const CardsMain = () => (
  <Wrapper>
    <Block>
        <CardContainer>
          <CardHeader>Card Header</CardHeader>
          <CardContent>
            <p>card content</p>
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardHeader>Card Header2</CardHeader>
          <CardContent>
            <p>card content</p>
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardHeader>Card Header3</CardHeader>
          <CardContent>
            <p>card content</p>
          </CardContent>
        </CardContainer>
      </Block>
    <GlobalStyle />
  </Wrapper>
);


// const BlocksWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

const Block = styled.div`
  display: flex;
  flex: 1;
`;
