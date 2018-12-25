import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { COLORS } from '../../../constants';


export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${COLORS.iceBlue};
  padding: 2rem;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500');
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 8px;
  }

  body {
    margin: 0;
  }

  body, a, p, span {
    font-size: 1.75rem;
  }

  h1 {
    font-weight: 400;
  }
`
