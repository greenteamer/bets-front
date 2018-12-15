import React from 'react';
import styled, { css } from 'styled-components';


export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.5s;
  box-shadow: 1px 2px 20px rgba(0,0,0,0.1);
  border-radius: 10rem;
  padding: 0.5rem 2rem;
  ${props => props.primary && css`
    background: #376f9a;
    color: white;
  `};
  &:hover {
    cursor: pointer;
    box-shadow: 1px 2px 20px rgba(0,0,0,0.2);
  }
  {...props}
`;
